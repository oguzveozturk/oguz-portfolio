---
title: "Stock Tracker"
category: 2
order: 1
props: [CI/CD, SealSDK, Cocoapods, Charts, MVC, Objective-C]
popularity: "• Modular • VIPER"
description: "Explore Market Trends"
imageFolder: "stocktracker"
imageCount: 3
paragraph: "StockTracker is an iOS application that tracks stock market data and provides detailed visualizations. The app is built using Swift and employs the MVVM-C (Model-View-ViewModel-Coordinator) architectural pattern. It utilizes GraphQL for data fetching and integrates with various modules to display stock information."
role: "Senior iOS Developer"
time: "02/2024 - 01/2024 - 11 Months"
---

### Project Structure

The project is organized into several packages and modules to maintain a clean and scalable codebase. Here is a breakdown of the main components:

- **AppCoordinator**: Main coordinator that initializes and manages child coordinators.

- **ApolloModels**: Contains GraphQL models and related data handling code.

- **Base**: Includes base classes and protocols used across the app.

- **CommonView**: Houses common UI components used throughout the app.

- **Coordinator**: Contains the Coordinator protocol and related classes to handle navigation.

- **Entity**: Contains models that are mapped from Apollo generated models.

- **Extension**: Holds various extensions for different classes and utilities.

- **GraphQLClient**: Manages GraphQL client setup and configurations.

- **ModelGenerator**: Contains tools and scripts for generating models.

- **Modules**: Includes the main feature modules of the app.

- **StockDetailModule**: Handles the stock detail feature.

- **StockListModule**: Manages the stock list feature.

- **STChart**: Manages chart rendering and related functionalities.

- **UIExtension**: Contains extensions for UIKit components.