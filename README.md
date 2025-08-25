# Garden Sewa
Garden Sewa is a React Native mobile application tailored for plant lovers in Nepal. It connects users with professional gardeners, quality plants, and gardening services, promoting sustainable and eco-friendly gardening practices. The app features a user-friendly interface, seamless navigation, and a range of functionalities to enhance the gardening experience.

## Features
-**Browse Plants**: Explore indoor, outdoor, and rare plants with detailed product information.

-**Gardening Services**: Access professional gardening services with easy booking options.

-**Search and Filter**: Search for plants or services and filter by categories like New, Popular, or Best Seller.

-**Product Details**: View comprehensive details for each plant, including price, rating, and description.

-**Contact Support**: Reach out via a contact form or provided contact information.

-**User Navigation**: Intuitive bottom tab navigation with a floating action button for adding new plants or services.

-**Responsive Design**: Optimized for both iOS and Android devices with a visually appealing UI.

# Tech Stack
-**Framework**: React Native
-**Icons**: React Native Vector Icons (Ionicons, MaterialIcons)
-**Styling**: React Native StyleSheet
-**Components**: Custom reusable components (e.g., ProductCard, SearchBar, ServiceCard)
-**Navigation**: Custom navigation with AppNavigator and BottomTabNavigator

## Dependencies
-@expo/vector-icons
-expo-linear-gradient
-react-native
See `package.json` for full list.

# Project Structure

```
src/
├── assets/               # Images and static assets
│   ├── aboutus.png
│   ├── AppDrawer.png
│   ├── basket.png
│   ├── blue-poppy.png
│   ├── cart.png
│   ├── category.png
│   ├── contact.png
│   ├── flowertulipicon.png
│   ├── GardenSewaLogo.png
│   ├── home.png
│   ├── IndoorDecoration.png
│   ├── locationicon.png
│   ├── plusicon.png
│   ├── pricetag.png
│   ├── search.png
│   └── vishal.png
├── components/           # Reusable UI components
│   ├── BottomTabNavigator.js
│   ├── CarouselIndicator.js
│   ├── Header.js
│   ├── OfferBanner.js
│   ├── PlantCard.js
│   ├── ProductCard.js
│   ├── ReviewCard.js
│   ├── ReviewsSection.js
│   ├── SearchBar.js
│   ├── ServiceCard.js
│   └── ServicesSection.js
├── constants/            # Constants
│   └── colors.js
├── data/                 # Mock data
│   └── mockData.js
├── navigation/           # Navigation setup
│   └── AppNavigator.js
├── screens/              # Screen components
│   ├── AboutUsScreen.js
│   ├── AddNewScreen.js
│   ├── CategoryScreen.js
│   ├── ContactScreen.js
│   ├── HomeScreen.js
│   ├── IndoorPlantsScreen.js
│   ├── OutdoorPlantsScreen.js
│   ├── PlantDetailScreen.js
│   └── RarePlantsScreen.js
└── styles/               # Global styles
    └── globalStyles.js
```

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/sameshbajracharya0337/GardenSewa.git
cd GardenSewa
```

### 2. Install Dependencies
```bash
npm install
```


### 3. Install Expo CLI (if not already installed)
```bash
npm install -g expo-cli
```

### 4. Run the App
```bash
expo start
```
Scan the QR code with the Expo Go app on your iOS or Android device, or run in a simulator/emulator.

## Usage
-Home Screen: View featured plants, services, and reviews with a search bar and promotional banner.
-Category Screen: Browse plant categories (Indoor, Outdoor, Rare) with filtering options.
-Plant Detail Screen: Access detailed information about a selected plant, including price, rating, and tags.
-Add New Screen: Options to add plants, services, request help, or join as a gardener.
-About Us Screen: Learn about Garden Sewa's mission and features.
-Contact Screen: Submit inquiries or view contact information.
-Navigation: Use the bottom tab bar to switch between Home, Category, About, and Contact, with a floating button for adding new content.

# Mock Data
The app uses mock data (src/data/mockData.js) for plants, services, reviews, and images. In a production environment, this data would be replaced with API calls to a backend server.


## Future Enhancements
-Integrate a backend API for dynamic data fetching.
-Implement user authentication and profile management.
-Add cart and checkout functionality.
-Enhance search with advanced filtering and sorting.
-Introduce push notifications for order updates.

# Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request with your changes.
