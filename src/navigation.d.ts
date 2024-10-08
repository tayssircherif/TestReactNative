import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the parameters for the product detail screen
export type RootStackParamList = {
    Products: undefined;
    ProductDetail: { productId: number };  // productId will be passed to ProductDetail
};

export type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

export type ProductDetailScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'ProductDetail'
>;
