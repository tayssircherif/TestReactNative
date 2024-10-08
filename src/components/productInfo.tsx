import React from 'react';
import { View, Text } from 'react-native';
import { productListStyles as styles } from '../styles/styles';
// Ce composant reçoit les informations sur un produit en tant que propriétés (`title`, `price`, `category`, `description`)
// et les affiche dans un format stylisé avec les styles définis dans `styles`.
// Il structure les informations du produit avec des `Text` pour chaque élément (titre, prix, catégorie, description),
// ce qui permet de les afficher clairement à l'utilisateur.
// Ce composant est conçu pour être réutilisable avec différents produits dans l'application.

interface ProductInfoProps {
    title: string;
    price: number;
    category: string;
    description: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ title, price, category, description }) => {
    return (
        <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.productPrice}>Price: ${price}</Text>
            <Text style={styles.productCategory}>Category: {category}</Text>
            <Text style={styles.productDescription}>{description}</Text>
        </View>
    );
};

export default ProductInfo;
