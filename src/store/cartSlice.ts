import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    uniqueItemCount: number;
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    uniqueItemCount: 0,
    totalPrice: 0,
};

// Utility function to save cart to AsyncStorage
const saveCartToAsyncStorage = async (cartState: CartState) => {
    try {
        await AsyncStorage.setItem('cart', JSON.stringify(cartState));
    } catch (error) {
        console.error('Error saving cart to AsyncStorage:', error);
    }
};

// Async thunk to load the cart from AsyncStorage
export const loadCartFromAsyncStorage = createAsyncThunk(
    'cart/loadCartFromAsyncStorage',
    async () => {
        try {
            const storedCart = await AsyncStorage.getItem('cart');
            if (storedCart) {
                return JSON.parse(storedCart) as CartState;
            }
            return initialState;
        } catch (error) {
            console.error('Error loading cart from AsyncStorage:', error);
            return initialState;
        }
    }
);

// Redux slice for cart management
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push(action.payload);
                state.uniqueItemCount += 1;
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;

            // Save updated cart to AsyncStorage
            saveCartToAsyncStorage(state);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.totalQuantity -= state.items[itemIndex].quantity;
                state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
                state.items.splice(itemIndex, 1);
                state.uniqueItemCount -= 1;

                // Save updated cart to AsyncStorage
                saveCartToAsyncStorage(state);
            }
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += item.price;

                // Save updated cart to AsyncStorage
                saveCartToAsyncStorage(state);
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= item.price;

                // Save updated cart to AsyncStorage
                saveCartToAsyncStorage(state);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.uniqueItemCount = 0;
            state.totalPrice = 0;

            // Clear cart from AsyncStorage
            AsyncStorage.removeItem('cart');
        },
        // The replaceCart reducer: replaces the current cart state with the loaded state
        replaceCart: (state, action: PayloadAction<CartState>) => {
            return action.payload;  // Replace the cart state with the loaded one
        },
        extraReducers: (builder) => {
            builder.addCase(loadCartFromAsyncStorage.fulfilled, (state, action: PayloadAction<CartState>) => {
                return action.payload;  // Replace the current state with the loaded cart
            });
        }
    },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, replaceCart } = cartSlice.actions;
export default cartSlice.reducer;
