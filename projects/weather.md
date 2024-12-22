---
title: "Weather Forecast"
category: 2
order: 2
props: [CI/CD, SealSDK, Cocoapods, Charts, MVC, Objective-C]
popularity: "• VIPER"
description: "8 Days Weather Insight"
imageFolder: "weather"
imageCount: 3
paragraph: "A simple case study that shows weather forecast. Users can view the 7-day weather forecast either by searching or by using their location through the OpenWeather API.

"
role: "iOS Developer"
time: "02/2024 - 01/2024 - 11 Months"
---

### Project Structure
 <strong>WeatherForecast</strong> project is implemented using the <strong>VIPER</strong> architecture pattern. All the logic is handled within the presenter:

• <strong>AppCoordinator</strong>: Main coordinator that initializes and manages child coordinators.<br>
• <strong>WeatherForecast</strong>: Begining of the app.Contains AppDelegate, AppRouter and AppContainer.<br>
• <strong>ForecastSearchModule</strong>: Creates search request via searchbar and lists them.<br>
• <strong>WeatherAPI</strong>: Derived from NetworkService. Contains endpoints and decoder models.<br>
• <strong>NetworkService</strong>: Files or classes related to communicating with an external API. This could include code for making HTTP requests to a web server, parsing responses, and handling any errors that may occur.<br>
• <strong>LocationManager</strong>: Can gets user location and finds the coordinates of the written location.<br>
• <strong>Cache</strong>: Saves the latest datas for given amount of time.<br>
• <strong>Common</strong>: Files or resources that are shared across multiple parts of the project. Such as utility classes, global constants or extensions.<br>
