---
title: "Weather Forecast"
category: 2
order: 2
props: [VIPER, Modular, Unit Testing, Dependency Container, CoreLocation, NSCache]
popularity: "• VIPER"
description: "7-Day Weather Forecast"
imageFolder: "weather"
imageCount: 3
paragraph: "A case study that displays a 7-day weather forecast. Users can search for a city or use their current location, with data from the OpenWeather API."
---

### Project Structure
 <strong>WeatherForecast</strong> project is implemented using the <strong>VIPER</strong> architecture pattern. All the logic is handled within the presenter:

• <strong>AppCoordinator</strong>: Main coordinator that initializes and manages child coordinators.<br>
• <strong>WeatherForecast</strong>: Beginning of the app. Contains AppDelegate, AppRouter and AppContainer.<br>
• <strong>ForecastSearchModule</strong>: Creates search request via searchbar and lists them.<br>
• <strong>WeatherAPI</strong>: Derived from NetworkService. Contains endpoints and decoder models.<br>
• <strong>NetworkService</strong>: Handles communication with external APIs — building requests, parsing responses and handling errors.<br>
• <strong>LocationManager</strong>: Gets the user location and resolves the coordinates of a searched location.<br>
• <strong>Cache</strong>: Saves the latest data for a given amount of time.<br>
• <strong>Common</strong>: Files and resources shared across the project, such as utility classes, global constants and extensions.<br>
