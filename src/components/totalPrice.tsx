import React from 'react';
import { View, Text } from 'react-native';
import { productListStyles as styles } from '../styles/styles';  // Import separated styles

const MIN_ORDER_VALUE = 50;  // Minimum order value to proceed to checkout
const DISCOUNT_THRESHOLD = 100;  // Price threshold for discount
const DISCOUNT_RATE = 0.10;  // Discount percentage

interface TotalPriceProps {
    totalPrice: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {
    // Apply discount if total price exceeds the discount threshold
    const discountedPrice = totalPrice > DISCOUNT_THRESHOLD ? totalPrice * (1 - DISCOUNT_RATE) : totalPrice;

    return (
        <View>
            <Text style={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</Text>
            {totalPrice > DISCOUNT_THRESHOLD && (
                <Text style={styles.discountedPrice}>
                    Discounted Price: ${discountedPrice.toFixed(2)} (10% off)
                </Text>
            )}
            {!totalPrice && (
                <Text style={styles.checkoutWarning}>
                    You need at least ${MIN_ORDER_VALUE} to proceed to checkout.
                </Text>
            )}
        </View>
    );
};

export default TotalPrice;
