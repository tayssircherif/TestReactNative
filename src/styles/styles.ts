import { StyleSheet } from 'react-native';
import { SIZES } from '../constants/sizes';

import { COLORS } from '../constants/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';



// Styles for the Product List Screen
export const productListStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding,
        backgroundColor: '#fff',
    },

    totalItemsText: {
        fontSize: SIZES.fontSizeTitle,
        marginTop: 10,
        color: COLORS.textColor,
    },
    productInfo: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,

    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: COLORS.heartColorActive,
    },
    productCard: {
        padding: SIZES.padding / 2,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        marginBottom: SIZES.padding,
        position: 'relative',  // Ensure this container allows absolute positioning
    },
    imageContainer: {
        position: 'relative',  // Ensure relative positioning for button placement
        width: SIZES.imageWidth,  // Define fixed width for the image container
        height: SIZES.imageHeight,  // Define fixed height for the image container
        marginBottom: 10,
        marginRight: 20,   // Space between image and product details
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',  // Ensure the image scales correctly
    },

    heartIcon: {
        marginRight: 5,  // Reduced margin between heart and text
    },
    cartInfo: {
        alignItems: 'center',
        marginBottom: SIZES.padding,
    },
    goToCartButton: {
        backgroundColor: 'transparent',  // Transparent background
        borderColor: COLORS.clickbutton,  // Button border color
        borderWidth: 1,  // Border width
        borderRadius: 20,    // Green button background
        // Rounded corners for the button
        paddingVertical: 5,  // Vertical padding
        paddingHorizontal: 20,  // Horizontal padding
        alignItems: 'center',  // Center the button content
        justifyContent: 'center',  // Center text
        marginTop: 20,
        shadowColor: '#000',  // Shadow color
        shadowOffset: { width: 0, height: 2 },  // Shadow offset for depth effect
        shadowOpacity: 0.25,  // Shadow opacity
        shadowRadius: 3.84,  // Blur radius for shadow
        // Elevation for Android shadow
    },
    goToCartText: {
        color: COLORS.heartColorActive,  // White text
        fontSize: SIZES.fontSizeTitle,  // Font size for the button text
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // Bold text
    },
    containerDetail: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    productImageDetail: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',  // Center the image horizontally
        marginBottom: 20,
    },

    productCategory: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 10,
        color: '#777',
    },
    productDescription: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
        color: '#555',
    },

    containerCart: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    emptyCartText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
        color: '#888',
    },
    cartButton: {
        position: 'absolute',  // Positioning the button over the image
        top: 10,  // Top-right corner
        right: 10,
        padding: 8,  // Padding for button
        backgroundColor: 'transparent',  // Transparent background
        borderColor: COLORS.secondary,  // Button border color
        borderWidth: 1,  // Border width
        borderRadius: 20,  // Rounded corners
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,  // Ensure the button is above the image
    },

    productImageCart: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
    },

    productQuantity: {
        fontSize: 16,
        color: '#777',
    },
    productTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    quantityControls: {
        flexDirection: 'row',
        marginTop: 10,
    },
    controlButton: {
        padding: 10,
        backgroundColor: COLORS.heartColorActive,
        borderRadius: 5,
        marginRight: 10,
    },
    controlButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    discountedPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.heartColorActive,
        marginVertical: 10,
    },
    checkoutWarning: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    },
    checkoutButton: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    activeButton: {
        backgroundColor: COLORS.heartColorActive,
    },
    disabledButton: {
        backgroundColor: '#999',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 16,
        elevation: 3,  // Add shadow for Android
        shadowColor: '#000',  // Add shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    searchBar: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
        marginLeft: 8,
    },
    searchIcon: {
        marginLeft: 5,
    },
});
