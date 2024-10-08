import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { productListStyles as styles } from '../styles/styles';  // Import separated styles

import TotalPrice from '../components/totalPrice';
import CheckoutButton from '../components/checkoutButton';
import CartItem from '../components/cartItem';

const CartScreen = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

    return (
        <View style={styles.containerCart}>
            <Text style={styles.headerText}>Cart Items</Text>

            {cartItems.length === 0 ? (
                <Text style={styles.emptyCartText}>Your cart is empty.</Text>
            ) : (
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CartItem item={item} />}  // Render CartItem component
                />
            )}

            {/* Total Price and Discounted Price */}
            <TotalPrice totalPrice={totalPrice} />

            {/* Checkout Button */}
            <CheckoutButton totalPrice={totalPrice} />
        </View>
    );
};

export default CartScreen;
