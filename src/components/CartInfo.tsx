import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { productListStyles as styles } from '../styles/styles';

// Ce composant affiche un bouton "Go to Cart" qui montre le nombre total d'articles dans le panier.
// Lorsqu'on clique sur le bouton, l'utilisateur est redirigé vers l'écran du panier.
// Il utilise Redux pour obtenir la quantité totale d'articles dans le panier et utilise `useNavigation` pour gérer la navigation vers l'écran du panier.


const CartInfo = () => {
    const navigation = useNavigation();
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    return (
        <View style={styles.cartInfo} >
            <TouchableOpacity
                style={styles.goToCartButton}
                onPress={() => navigation.navigate('Cart')}
            >
                <Text style={styles.goToCartText}> Go to Cart({totalQuantity} items) </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartInfo;
