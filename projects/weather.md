---
title: "Weather Forecast"
category: 2
order: 2
props: [VIPER, Modular, Unit Testing, Dependency Container, CoreLocation, NSCache]
popularity: "• VIPER"
description: "7 Days Weather Insight"
imageFolder: "weather"
imageCount: 3
paragraph: "A simple case study that shows weather forecast. Users can view the 7-day weather forecast either by searching or by using their location through the OpenWeather API."
---

### Project Structure
 <strong>WeatherForecast</strong> project is implemented using the <strong>VIPER</strong> architecture pattern. All the logic is handled within the presenter:

• <strong>AppCoordinator</strong>: Main coordinator that initializes and manages child coordinators.<br>
• <strong>WeatherForecast</strong>: Beginning of the app. Contains AppDelegate, AppRouter and AppContainer.<br>
• <strong>ForecastSearchModule</strong>: Creates search request via searchbar and lists them.<br>
• <strong>WeatherAPI</strong>: Derived from NetworkService. Contains endpoints and decoder models.<br>
• <strong>NetworkService</strong>: Files or classes related to communicating with an external API. This could include code for making HTTP requests to a web server, parsing responses, and handling any errors that may occur.<br>
• <strong>LocationManager</strong>: Gets the user location and resolves the coordinates of a searched location.<br>
• <strong>Cache</strong>: Saves the latest data for a given amount of time.<br>
• <strong>Common</strong>: Files or resources that are shared across multiple parts of the project. Such as utility classes, global constants or extensions.<br>
