---
title: "Stock Tracker"
category: 2
order: 1
props: [CI/CD, SealSDK, Cocoapods, Charts, MVC, Objective-C]
popularity: "• VIPER"
description: "Explore Market Trends"
imageFolder: "stocktracker"
imageCount: 3
paragraph: "StockTracker is an iOS application that tracks stock market data and provides detailed visualizations. The app is built using Swift and employs the MVVM-C (Model-View-ViewModel-Coordinator) architectural pattern. It utilizes GraphQL for data fetching and integrates with various modules to display stock information."
role: "Senior iOS Developer"
time: "02/2024 - 01/2024 - 11 Months"
---

### Project Structure

This project is implemented using the <strong>MVVM</strong> architecture pattern. All the logic is handled within the view model:

• <strong>AppCoordinator</strong>: Main coordinator that initializes and manages child coordinators.<br>
• <strong>StockTracker</strong>: Beginning of the app. Contains AppDelegate, AppRouter, and AppContainer.<br>
• <strong>StockSearchModule</strong>: Creates search requests via search bar and lists them.<br>
• <strong>StocksAPI</strong>: Derived from NetworkService. Contains endpoints and decoder models.<br>
• <strong>NetworkService</strong>: Files or classes related to communicating with an external API. This could include code for making HTTP requests to a web server, parsing responses, and handling any errors that may occur.<br>
• <strong>LocationManager</strong>: Can get user location and find the coordinates of the written location.<br>
• <strong>Cache</strong>: Saves the latest data for a given amount of time.<br>
• <strong>Common</strong>: Files or resources that are shared across multiple parts of the project. Such as utility classes, global constants, or extensions.<br>