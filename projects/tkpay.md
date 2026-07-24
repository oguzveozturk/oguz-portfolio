---
title: "TKPay"
category: 1
order: 1
props: [MVVM, Swift Concurrency, SPM, Unit Testing, 3D Secure, VisionKit, Dependency Injection]
subtitle: "OBSS · Turkish Airlines"
popularity: "#11 in Travel"
score: 4.8
rating: "427K Ratings"
description: "Wallet, QR & payments"
imageCount: 6
imageFolder: "tkpay"
paragraph: "TKPay is a payment SDK embedded in the Turkish Airlines and AJet iOS applications, serving millions of users. Built on top of the Miles&Smiles infrastructure, it covers wallet top-up, QR payments, campaigns and KYC. I joined the project as a Senior iOS Developer and built the 3D Secure card payment flow end to end, contributed to the camera-based KYC module with on-device MRZ and passport scanning, and co-designed the SDK's analytics event queue with Keychain-based multi-user token handling."
role: "Senior iOS Developer"
time: "01/2025 - Present"
live: "https://apps.apple.com/tr/app/turkish-airlines-book-flights/id1283414961"
---

### Challenges

Shipping a payment SDK inside two host applications you do not own changes almost every engineering decision. Every dependency is a potential conflict, every megabyte counts, and any crash is attributed to the host app rather than to us. We kept the framework footprint at 12.5 MB and the crash-free rate at 99.5%, backed by 80% unit test coverage across an MVVM architecture with injected network and repository layers.

The 3D Secure flow was the most demanding part: handling redirects, bank timeouts and challenge results reliably while keeping the payment state consistent, all modelled with Swift Concurrency (async/await) instead of nested callbacks.

On the KYC side, on-device MRZ and passport scanning had to work in real-world lighting. I improved OCR reliability with blur detection and multi-frame consensus, so the SDK only accepts a read when several consecutive frames agree — a meaningful drop in false reads without asking the user to try again.
