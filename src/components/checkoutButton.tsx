import React from 'react';
import { TouchableOpacity, Text } from 'react-native';  // Import des composants React Native
import { productListStyles as styles } from '../styles/styles';  // Import des styles séparés

// Définition des propriétés attendues par le composant `CheckoutButton`
interface CheckoutButtonProps {
    totalPrice: number;  // Le prix total du panier (fourni par le composant parent)
}

// Définition d'une constante pour la valeur minimale de commande
const MIN_ORDER_VALUE = 50;  // Montant minimum requis pour passer à la caisse

// Définition du composant fonctionnel `CheckoutButton`
const CheckoutButton: React.FC<CheckoutButtonProps> = ({ totalPrice }) => {
    // Calcul de l'éligibilité pour passer à la caisse
    const isEligibleForCheckout = totalPrice >= MIN_ORDER_VALUE;

    return (
        // Bouton de paiement qui devient actif ou désactivé selon l'éligibilité
        <TouchableOpacity
            style={[
                styles.checkoutButton,  // Style de base du bouton
                isEligibleForCheckout ? styles.activeButton : styles.disabledButton  // Style conditionnel : actif ou désactivé
            ]}
            onPress={() => console.log('Proceeding to checkout')}  // Action à effectuer lors de la pression du bouton
            disabled={!isEligibleForCheckout}  // Désactiver le bouton si le montant total est inférieur à la valeur minimale de commande
        >
            {/* Texte à afficher dans le bouton */}
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
    );
};

export default CheckoutButton;
