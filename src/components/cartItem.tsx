import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import { productListStyles as styles } from '../styles/styles';  // Import separated styles

// Ce composant affiche un article du panier avec ses détails : image, titre, quantité, prix total.
// Il permet également à l'utilisateur d'augmenter, diminuer la quantité ou de supprimer l'article du panier grâce à trois boutons.
// Les actions Redux `incrementQuantity`, `decrementQuantity` et `removeFromCart` sont utilisées pour mettre à jour le panier.
// L'image et les informations sont stylisées avec les styles définis séparément dans `styles`.



interface CartItemProps {
    item: {
        id: number;
        title: string;
        price: number;
        quantity: number;
        image: string;
    };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.cartItemCart}>
            <Image
                source={{ uri: item.image }}
                style={styles.productImageCart}
            />
            <View style={styles.itemDetails}>
                <Text style={styles.productTitleCart}>{item.title}</Text>
                <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
                <Text style={styles.productTotal}>Total: ${item.quantity * item.price}</Text>

                <View style={styles.quantityControls}>
                    <TouchableOpacity style={styles.controlButton} onPress={() => dispatch(incrementQuantity(item.id))}>
                        <Text style={styles.controlButtonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.controlButton} onPress={() => dispatch(decrementQuantity(item.id))}>
                        <Text style={styles.controlButtonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.controlButton} onPress={() => dispatch(removeFromCart(item.id))}>
                        <Text style={styles.controlButtonText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartItem;
