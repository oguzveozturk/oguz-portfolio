---
title: "State of Flights"
category: 2
order: 3
props: [VIPER, Modular, SPM, Unit Testing, Programmatic UI]
popularity: "• VIPER"
description: "Preview latest flights"
imageFolder: "flights"
imageCount: 3
paragraph: "The user can drag the map to view active flights from opensky API. By clicking on the aircraft, they can obtain the ICAO24 code and origin country information. The flights can be filtered by origin country using the list at the bottom of the screen."
role: "iOS Developer"
time: "02/2024 - 01/2024 - 11 Months"
---

### Project Structure

<strong>StateOfFlights</strong> project is implemented using the <strong>VIPER</strong> architecture pattern. All the logic is handled within the controller:

• <strong>StateOfFlights</strong>: Beginning of the app. Contains AppDelegate, AppRouter, and AppContainer.<br>
• <strong>FlightsMap</strong>: A draggable map displaying the real-time status of flights.<br>
• <strong>CountrySelector</strong>: Built with UISheetPresentationController. The table below the screen allows the user to select the origin country.<br>
• <strong>FlightAPI</strong>: Files or classes related to communicating with an external API. This could include code for making HTTP requests to a web server, parsing responses, and handling any errors that may occur.<br>
• <strong>CommonViews</strong>: Reusable UI elements.<br>
• <strong>Common</strong>: Files or resources that are shared across multiple parts of the project, such as utility classes, global constants, or extensions.<br>
