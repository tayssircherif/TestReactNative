import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';
import { RootState, AppDispatch } from '../store/store';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { productListStyles as styles } from '../styles/styles';
import { COLORS } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

interface ProductCardProps {
    item: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);  // Sélectionne les articles du panier depuis le store Redux
    const uniqueItemCount = useSelector((state: RootState) => state.cart.uniqueItemCount);  // Nombre d'articles uniques dans le panier
    const navigation = useNavigation();  // Hook pour gérer la navigation
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);  // Vérifie si l'article est déjà dans le panier

    // Cette fonction gère l'ajout ou la suppression d'un article dans le panier. Si l'article est déjà dans le panier, il sera retiré.
    // Si l'utilisateur atteint la limite de 5 articles uniques, un message Toast s'affiche.
    // Sinon, l'article est ajouté au panier avec une quantité de 1.
    const handleAddOrRemoveFromCart = () => {
        if (isInCart) {
            const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
            if (cartItem) {
                dispatch(removeFromCart(cartItem.id));  // Action pour retirer l'article du panier
            }
        } else if (uniqueItemCount >= 5) {
            showMaxItemsToast();  // Affiche un message Toast si la limite de 5 articles uniques est atteinte
        } else {
            dispatch(addToCart({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                quantity: 1  // Ajoute l'article au panier avec une quantité de 1
            }));
        }
    };

    // Cette fonction affiche une notification Toast lorsqu'on atteint la limite de 5 articles uniques dans le panier.
    const showMaxItemsToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Limit Reached',
            text2: 'You cannot add more than 5 unique items to the cart.',
        });
    };

    return (
        // Composant `TouchableOpacity` pour permettre la navigation vers les détails du produit
        <TouchableOpacity
            onPress={() => null}  // Navigue vers l'écran des détails du produit
            style={styles.productCard}  // Style pour la carte produit
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
            </View>

            {/* Bouton pour ajouter ou retirer un article du panier */}
            <TouchableOpacity
                onPress={(e) => {
                    e.stopPropagation();
                    handleAddOrRemoveFromCart();
                }}
                style={styles.cartButton}
            >
                <AntDesign
                    name={isInCart ? 'heart' : 'hearto'}
                    size={24}
                    color={isInCart ? COLORS.heartColorActive : COLORS.heartColorInactive}
                    style={styles.heartIcon}
                />
                <Text>{isInCart ? 'Item in Cart' : 'Add to Cart'}</Text>
            </TouchableOpacity>

            {/* Affichage du titre et du prix du produit */}
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
        </TouchableOpacity >
    );
};

export default ProductCard;
