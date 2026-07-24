---
title: "Lensflare"
category: 2
order: 4
props: [CoreData, Caching, MVVM, ImageIO, vImage, CoreGraphics]
popularity: "• MVVM"
description: "Overlay lens flare"
imageFolder: "lensflare"
imageCount: 4
paragraph: "LensFlare retrieves lens flare overlays from a server, lets the user composite them onto their own photos, and saves the result back to the gallery. Overlays are cached locally so the app stays usable offline."
---

### Project Structure
<strong>LensFlare</strong> project is implemented using the <strong>MVVM</strong> architecture pattern. All the logic is handled within the view model:

• <strong>AppCoordinator</strong>: Main coordinator that initializes and manages child coordinators.<br>
• <strong>LensFlare</strong>: Beginning of the app. Contains AppDelegate, AppRouter, and AppContainer.<br>
• <strong>LensEffectModule</strong>: Creates and manages lens flare effects.<br>
• <strong>ImageProcessor</strong>: Composites the overlay onto the source image using ImageIO, vImage and CoreGraphics.<br>
• <strong>OverlayStore</strong>: Persists downloaded overlays and their metadata with CoreData.<br>
• <strong>PhotoLibraryService</strong>: Handles export permissions and writing the final image to the gallery.<br>
• <strong>Cache</strong>: Saves the latest data for a given amount of time.<br>
• <strong>Common</strong>: Files or resources that are shared across multiple parts of the project. Such as utility classes, global constants, or extensions.<br>
