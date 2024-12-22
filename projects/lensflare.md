---
title: "Lensflare"
category: 2
order: 4
props: [CI/CD, SealSDK, Cocoapods, Charts, MVC, Objective-C]
popularity: "• MVVM"
description: "Overlay lens flare"
imageFolder: "lensflare"
imageCount: 4
paragraph: "LensFlare is a project that retrives overlays from the server and users can adds overlays on images and can be save in gallery."
role: "iOS Developer"
time: "02/2024 - 01/2024 - 11 Months"
---

### Project Structure
<strong>LensFlare</strong> project is implemented using the <strong>MVVM</strong> architecture pattern. All the logic is handled within the view model:

• <strong>AppCoordinator</strong>: Main coordinator that initializes and manages child coordinators.<br>
• <strong>LensFlare</strong>: Beginning of the app. Contains AppDelegate, AppRouter, and AppContainer.<br>
• <strong>LensEffectModule</strong>: Creates and manages lens flare effects.<br>
• <strong>ARKitManager</strong>: Manages ARKit sessions and configurations.<br>
• <strong>SceneKitManager</strong>: Manages SceneKit scenes and nodes.<br>
• <strong>CoreMLManager</strong>: Manages CoreML models and predictions.<br>
• <strong>Cache</strong>: Saves the latest data for a given amount of time.<br>
• <strong>Common</strong>: Files or resources that are shared across multiple parts of the project. Such as utility classes, global constants, or extensions.<br>
