E-Commerce App - TayssirCherif

Merci pour le test et l'opportunité d'explorer ce projet. Ce fichier README contient trois explications principales sur la structure du projet, les meilleures pratiques suivies, et les technologies utilisées, y compris l'utilisation d'Expo pour faciliter le développement.



Les fonctionnalités que j'ai dévlopper dans l'application :
#### User Story 1

> As a customer, I want to view a list of products so that I can choose what to buy.

- Fetch and display a list of products from the Fake Store API (`https://fakestoreapi.com/products`).
- Each product should show at least the image, name, and price, with an "Add to Cart" button or functionality.

#### User Story 2 (Variations)

> As a customer, I want to interact with a shopping cart to manage my product selections.

Implement ONE of the following cart variations. If no specific variation has been assigned to you, you may choose ONE from the list below:

**a) Standard Cart:**

> As a customer, I want to add products to my shopping cart and view the cart so that I can manage my selections before checkout.

- Implement a shopping cart where users can add products, view selected items, adjust quantities, and remove items from the cart.

**b) Limited Quantity Cart:**

> As a customer, I want to add products to my shopping cart with a maximum quantity limit, so that I can comply with purchasing restrictions.

- Implement a shopping cart where users can add products up to a maximum quantity (e.g., 5 items total in the cart), view selected items, and remove items from the cart.

**c) Discount Cart:**

> As a customer, I want to add products to my shopping cart and see a simple discount applied, so that I can understand my potential savings.

- Implement a shopping cart where users can add products, view selected items, and see a fixed discount (e.g., 10% off) applied if the total exceeds a certain amount.

**d) Persistent Cart:**

> As a customer, I want my shopping cart to persist when I refresh the page, so that I don't lose my selections accidentally.

- Implement a shopping cart that saves its state in local storage, allowing the cart to persist when the page is refreshed.

**e) Minimum Order Cart:**

> As a customer, I want to know if my cart meets a minimum order value, so that I can adjust my selection to qualify for checkout.

- Implement a shopping cart that indicates whether a minimum order value (e.g., $50) has been reached, enabling or disabling a "Proceed to Checkout" button accordingly.



2-Meilleures pratiques suivies que j'ai fait dans cette application

Architecture modulaire :

L'application est divisée en composants réutilisables et bien structurés, garantissant une séparation claire des responsabilités. Les composants UI et la logique métier sont séparés.
Gestion centralisée de l'état avec Redux :

Redux est utilisé pour gérer l'état global de l'application (panier, produits, etc.). Chaque fonctionnalité est gérée dans des "slices" séparés, ce qui facilite la maintenance et l'extensibilité.
TypeScript :

Utilisation de TypeScript pour des types stricts, assurant une meilleure gestion des erreurs, une documentation automatique, et des prévisions plus précises du comportement de l'application.
Navigation entre écrans :

Utilisation de React Navigation pour gérer la navigation entre les différentes sections de l'application (produits, panier, détails du produit).
Notifications utilisateur :

Intégration de la bibliothèque react-native-toast-message pour des notifications en temps réel, informant l'utilisateur des actions telles que l'ajout d'articles au panier ou des limitations.
Responsivité :

L'application est conçue pour être responsive, s'adaptant à plusieurs tailles d'écran. L'accent a été mis sur la réactivité pour que l'application fonctionne sur smartphone et sur une version desktop.
Optimisation des performances :

L'optimisation des rendus inutiles a été effectuée pour améliorer les performances globales, notamment via la mémorisation des composants et la gestion efficace du rendu avec Redux.
Code propre et maintenable :

Utilisation d'outils tels qu'ESLint et Prettier pour garantir la qualité et la cohérence du code. Les commits suivent une convention stricte pour faciliter le suivi des changements.

Expo : Utilisé pour simplifier le processus de développement.


3-Explication de la structure
Components : Les composants réutilisables, comme les cartes produits et les éléments du panier, sont placés ici.
Screens : Chaque écran principal de l'application (Liste de produits, Détails du produit, Panier) est isolé dans ce dossier.
Store : La gestion de l'état avec Redux est centralisée dans le dossier store, où chaque slice (comme cartSlice et productSlice) gère une fonctionnalité spécifique.
Navigation : Ce dossier contient toute la configuration de la navigation entre les écrans.
Styles : Fichier unique pour la gestion des styles de l'application, garantissant une cohérence dans le design.
Utils : Fonctions utilitaires telles que le formatage des prix.
Tests : Contient les tests unitaires et d'intégration pour vérifier la stabilité du code.

3-Technologies utilisées
React Native : Framework utilisé pour le développement mobile.
Redux & Redux Toolkit : Gestion de l'état global de l'application.
TypeScript : Superset de JavaScript pour une meilleure gestion des types.
React Navigation : Pour la navigation entre les écrans.
Toast Notifications : Pour afficher des notifications utilisateurs.
ESLint & Prettier : Outils de linters et de formattage de code.
Jest : Utilisé pour les tests unitaires.