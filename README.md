# React Product Catalog
## Overview
The React Product Catalog is a fully functional web application that allows users to browse, shop, and manage their favorite products. Built using React and Next.js, this project features a shopping cart, a favorites page, and various product categories, all while adhering to modern web development practices.

## Features
- Responsive Design: The application is optimized for both desktop and mobile devices, providing a seamless user experience.
- Dynamic Routing: Utilizes React Router and Next.js for efficient client-side navigation and server-side rendering.
- Data Management: Implements state management using React Context or Redux to manage shopping cart and favorites functionalities.
- Product Catalog: Displays a wide range of products organized into categories: Phones, Tablets, and Accessories, complete with sorting and pagination features.
- Product Details Page: Provides detailed information about each product, including available colors and capacities.
- Shopping Cart Functionality: Users can add, remove, and adjust quantities of products in their cart, with total amounts calculated automatically.
- Favorites Page: Users can save products to their favorites for easy access later.
- Local Storage: Both cart items and favorite products are saved to localStorage, ensuring persistence across sessions.

## Project Setup

Clone the repository:
`git clone <repository-url>
cd <repository-directory>`

Install dependencies:
`npm install`

Run the application:
`npm start`

## Development Tools:
- ESLint for code linting
- Prettier for code formatting
- Husky for managing git hooks
- Auto-deployment configuration

## Project Structure
The project follows a modular structure:
`src/
├── components/            # Shared components
│   ├── ComponentName/
│   │   ├── index.ts
│   │   ├── ComponentName.tsx
│   │   └── ComponentName.module.scss
│   └── ...
├── modules/              # Per-page modules
│   ├── HomePage/
│   │   └── components/
│   ├── CartPage/
│   ├── FavoritesPage/
│   └── ...
└── ...`

## Key Components
- HomePage: Displays the main product catalog, including sliders for featured products and categories.
- CartPage: Allows users to view and manage items in their cart.
- FavoritesPage: Shows a list of favorite products.
- ProductDetailsPage: Contains detailed information about selected products, including the ability to select options and view tech specs.

## Installation of Dependencies
Make sure to run the following command to install the necessary packages:
`npm install`

## Usage
- Visit the home page to view the product catalog.
- Navigate to product categories using the header links.
- Use the shopping cart icon to view and manage items in your cart.
- Save products to favorites by clicking the heart icon on product cards.
  
## Future Enhancements
- Implement checkout functionality.
- Improve user authentication and user profiles.
- Enhance product filtering and sorting options.
