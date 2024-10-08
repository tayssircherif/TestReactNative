import React from 'react';
import { View, Image } from 'react-native';
import { productListStyles as styles } from '../styles/styles';
// Ce composant reçoit une URL d'image en tant que propriété (`imageUrl`) et affiche cette image dans une vue stylisée.
// Le conteneur de l'image utilise `View` avec un style défini dans `styles.imageWrapper`.
// L'image elle-même est affichée avec `Image` de React Native et utilise `styles.productImageDetail` pour la taille et le style.
// Le composant est simple et réutilisable, destiné à afficher l'image d'un produit.

interface ProductImageProps {
    imageUrl: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl }) => {
    return (
        <View style={styles.imageWrapper}>
            <Image source={{ uri: imageUrl }} style={styles.productImageDetail} />
        </View>
    );
};

export default ProductImage;
