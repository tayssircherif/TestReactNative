export type RootStackParamList = {
    Products: undefined;  // No params for ProductListScreen
    ProductDetail: { productId: number };  // productId is passed to ProductDetailScreen
    Cart: undefined;  // No params for CartScreen
};
