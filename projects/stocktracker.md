---
title: "Stock Tracker"
category: 2
order: 1
props: [Apollo GraphQL, Argument Parser, MVVM-C, Modular, SPM, Combine]
popularity: "• VIPER"
description: "Explore Market Trends"
imageFolder: "stocktracker"
imageCount: 3
paragraph: "StockTracker is an iOS application that tracks stock market data and provides detailed visualizations. The app is built using Swift and employs the MVVM-C (Model-View-ViewModel-Coordinator) architectural pattern. It utilizes GraphQL for data fetching and integrates with various modules to display stock information."
role: "Senior iOS Developer"
time: "02/2024 - 01/2024 - 11 Months"
---

### Project Structure

The project is organized into several packages and modules to maintain a clean and scalable codebase. Here is a breakdown of the main components:

• <strong>ApolloModels</strong>: Contains GraphQL models and related data handling code.<br>
• <strong>Base</strong>: Includes base classes and protocols used across the app..<br>
• <strong>CommonView</strong>: Houses common UI components used throughout the app.<br>
• <strong>Coordinator</strong>: Contains the Coordinator protocol and related classes to handle navigation.<br>
• <strong>Entity</strong>: Contains models that are mapped from Apollo generated models.<br>
• <strong>Extension</strong>: Holds various extensions for different classes and utilities.<br>
• <strong>GraphQLClient</strong>: <br>
• <strong></strong>: Manages GraphQL client setup and configurations.<br>
• <strong>ModelGenerator</strong>:  Uses ArgumentParser for generating models.<br>
• <strong>Modules</strong>:  Shared models that general use in app.<br>
• <strong>StockDetailModule</strong>: Handles the stock detail feature.<br>
• <strong>StockListModule</strong>: Manages the stock list feature.<br>
• <strong>STChart</strong>: Manages chart rendering and related functionalities.<br>