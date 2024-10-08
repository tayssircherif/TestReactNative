import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { RootStackParamList } from '../navigation/types';
import ProductImage from '../components/ProductImage';  // Composant séparé pour afficher l'image du produit
import { productListStyles as styles } from '../styles/styles';  // Import des styles séparés
import ProductInfo from '../components/productInfo';

// Ce composant affiche les détails d'un produit en fonction de l'ID passé via les paramètres de la route.
// Il utilise Redux pour récupérer la liste des produits et trouver le produit correspondant à l'ID.
// Si le produit n'est pas trouvé, il affiche un message d'erreur.
// Il est composé de deux sous-composants : `ProductImage` pour afficher l'image du produit
// et `ProductInfo` pour afficher les informations comme le titre, le prix, la catégorie et la description.
// Définir le type pour les paramètres de la route


type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
    const route = useRoute<ProductDetailScreenRouteProp>();  // Hook pour obtenir les paramètres de la route
    const { productId } = route.params;  // Obtenir l'ID du produit à partir des paramètres de la route
    const products = useSelector((state: RootState) => state.products.products);  // Récupérer la liste des produits depuis Redux
    const product = products.find((p) => p.id === productId);  // Trouver le produit correspondant à l'ID

    // Si le produit n'est pas trouvé, afficher un message
    if (!product) {
        return <Text>Product not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ProductImage imageUrl={product.image} />
            <ProductInfo
                title={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
            />
        </ScrollView>
    );
};

export default ProductDetailScreen;
