import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productSlice';  // Action pour récupérer les produits depuis le store Redux
import { RootState, AppDispatch } from '../store/store';  // Types pour state et dispatch
import { useNavigation } from '@react-navigation/native';  // Hook pour naviguer entre les écrans
import { productListStyles as styles } from '../styles/styles';  // Import des styles
import ProductCard from '../components/ProductCard';  // Composant pour afficher une carte produit individuelle
import { Ionicons } from '@expo/vector-icons';  // Import d'icônes pour la barre de recherche

const ProductListScreen = () => {
    // Initialisation de dispatch pour envoyer des actions Redux
    const dispatch: AppDispatch = useDispatch();

    // Récupération de la liste des produits depuis le store Redux
    const products = useSelector((state: RootState) => state.products.products);

    // Récupération du statut de la récupération des produits (par exemple, chargement ou succès)
    const status = useSelector((state: RootState) => state.products.status);

    // Récupération du nombre total d'articles dans le panier depuis le store Redux
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    // Initialisation de la navigation pour les transitions d'écran
    const navigation = useNavigation();

    // État local pour suivre le terme de recherche
    const [searchTerm, setSearchTerm] = useState('');

    // État local pour stocker la liste filtrée des produits en fonction du terme de recherche
    const [filteredProducts, setFilteredProducts] = useState(products);

    // useEffect pour récupérer les produits lorsque le composant est monté
    useEffect(() => {
        // Envoi de l'action pour récupérer les produits
        dispatch(fetchProducts());
    }, [dispatch]);  // Ne s'exécute qu'une fois au montage

    // useEffect pour filtrer les produits en fonction du terme de recherche ou lorsque la liste des produits change
    useEffect(() => {
        // Mise à jour de la liste filtrée en fonction du terme de recherche (insensible à la casse)
        setFilteredProducts(
            products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, products]);  // Dépendance à searchTerm et products

    // Si le statut est "loading", afficher un message de chargement
    if (status === 'loading') {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            {/* Barre de recherche élégante */}
            <View style={styles.searchBarContainer}>
                {/* Icône de recherche */}
                <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />

                {/* Champ de texte pour la recherche */}
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search Products..."  // Texte d'indication dans le champ de recherche
                    value={searchTerm}  // Associe la valeur du champ de texte à searchTerm
                    onChangeText={setSearchTerm}  // Met à jour le terme de recherche lorsque l'utilisateur tape
                    placeholderTextColor="#999"  // Couleur du texte de l'indicateur
                />
            </View>

            {/* Section d'informations sur le panier */}
            <View style={styles.cartInfo}>
                {/* Bouton pour accéder au panier */}
                <TouchableOpacity
                    style={styles.goToCartButton}
                    onPress={() => null}  // Navigue vers l'écran du panier
                >
                    <Text style={styles.goToCartText}>
                        Go to Cart ( {totalQuantity} items)  {/* Affiche le nombre total d'articles dans le panier */}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Liste des produits filtrés */}
            <FlatList
                data={filteredProducts}  // Affiche la liste des produits filtrés en fonction du terme de recherche
                keyExtractor={(item) => item.id.toString()}  // Utilise l'ID du produit comme clé unique
                renderItem={({ item }) => <ProductCard item={item} />}  // Utilise le composant ProductCard pour afficher chaque produit
            />
        </View>
    );
};

export default ProductListScreen;
