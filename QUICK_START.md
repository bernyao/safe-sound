# Safe+Sound - Quick Start Guide 🚀

## Installation (5 minutes)

### Step 1: Install Dependencies

```bash
cd "first aid"
npm install
```

### Step 2: Start Development Server

```bash
npm start
```

You'll see a QR code in the terminal.

### Step 3: Run on Your Device

**Option A: iOS Simulator**

```bash
npm run ios
```

**Option B: Android Emulator**

```bash
npm run android
```

**Option C: Web Browser**

```bash
npm run web
```

**Option D: Expo Go App**

- Download "Expo Go" from App Store/Play Store
- Scan the QR code from `npm start`

---

## App Overview

### 🏠 Home Screen

- **Search** first aid guides by name
- **Browse** all 5 emergency categories
- **View** recently accessed guides
- **Color-coded** categories for quick identification

### 📂 Category Screen

- **See all guides** in a category
- **Quick info** - duration and step count
- **Color matching** for visual consistency

### 📖 Guide Screen

- **Step-by-step instructions** with numbers
- **Save guides** to favorites (❤️)
- **Duration info** for each guide
- **Automatic history** tracking

### 🚨 Emergency Screen

- **Emergency numbers** - tap to call
- **When to call 911** checklist
- **Response tips** with icons
- **Quick reference** for critical situations

---

## Features Overview

### ✅ Offline-First

- Works completely without internet
- All data stored locally
- Perfect for emergencies

### ✅ Favorites System

- Save important guides
- Quick access to saved items
- Persistent storage

### ✅ History Tracking

- Automatically saves recently viewed
- Last 20 guides stored
- Helps you find guides again quickly

### ✅ Neobrutalist Design

- Bold black borders
- Bright colors
- Tactile feel
- Professional appearance

---

## Emergency Content (10+ Guides)

### ❤️ CPR & Choking (Red)

- CPR for Adults
- Heimlich Maneuver (Choking Relief)

### 🩹 Wounds & Bleeding (Orange)

- Control Severe Bleeding
- Treat Minor Cuts & Scrapes

### 🦴 Broken Bones (Teal)

- Treat Fractures & Sprains

### ☠️ Poisoning (Purple)

- Poison Control Response

### 🔥 Burns (Yellow)

- Treat Burns

---

## Project File Structure

```
Safe+Sound/
├── app/                    # Routes (Expo Router)
│   ├── index.jsx          # Home screen
│   ├── emergency.jsx      # Emergency screen
│   ├── category/[id].jsx  # Category details
│   └── guide/[id].jsx     # Guide details
│
├── src/                    # Source code
│   ├── components/        # Reusable UI
│   │   ├── ui/           # UI components (Card, Button, Input)
│   │   └── layout/       # Layout (Header, BottomNav)
│   ├── screens/          # Screen components
│   ├── data/             # firstAidData.json
│   └── utils/            # storage.js
│
├── assets/               # Icons & images
├── package.json          # Dependencies
└── app.json              # Expo config
```

---

## Common Commands

### Development

```bash
npm start              # Start dev server
npm run ios           # Run on iOS
npm run android       # Run on Android
npm run web           # Run on web
npm test              # Run tests
```

### Building

```bash
eas build --platform ios      # Build for iOS
eas build --platform android  # Build for Android
```

---

## Customization

### Change App Name

Edit `app.json`:

```json
{
  "expo": {
    "name": "Safe+Sound"
  }
}
```

### Add New Emergency Guide

Edit `src/data/firstAidData.json`:

```json
{
  "id": 102,
  "title": "New Guide",
  "steps": ["Step 1", "Step 2"],
  "duration": "5-10 minutes"
}
```

### Change Colors

Each component can use:

- `variant="red"`
- `variant="orange"`
- `variant="teal"`
- `variant="yellow"`
- `variant="purple"`
- `variant="blue"`
- `variant="white"`

---

## Troubleshooting

### App Won't Start

```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm start
```

### Port Already in Use

```bash
# Use different port
npm start -- --port 19001
```

### Emulator Issues

```bash
# Restart emulator and Expo
# Then run: npm start
```

### Storage Not Working

- Check device permissions
- Ensure AsyncStorage is installed: `npm install @react-native-async-storage/async-storage`

---

## Design System Colors

| Color  | Hex     | Use              |
| ------ | ------- | ---------------- |
| Red    | #ef4444 | CPR, Critical    |
| Orange | #f97316 | Primary, Buttons |
| Teal   | #0d9488 | Secondary        |
| Yellow | #fbbf24 | Warnings         |
| Purple | #a855f7 | Special          |
| Blue   | #3b82f6 | Info             |
| Black  | #000000 | Borders          |
| White  | #ffffff | Cards            |
| Amber  | #fef3c7 | Background       |

---

## Key Components

### Card

```jsx
<Card variant="orange">
  <Text>Content here</Text>
</Card>
```

### Button

```jsx
<Button variant="primary" onPress={() => {}}>
  Click Me
</Button>
```

### Input

```jsx
<Input placeholder="Search..." value={query} onChangeText={setQuery} />
```

---

## Getting Help

1. Check `README.md` for detailed docs
2. Review component files in `src/components/`
3. Check Expo documentation: https://docs.expo.dev
4. React Native docs: https://reactnative.dev

---

## Next Steps

1. **Explore the app** - Run it and navigate through screens
2. **Add content** - Modify guides in `firstAidData.json`
3. **Customize design** - Adjust colors and styles
4. **Build for production** - Use EAS to create builds
5. **Deploy** - Distribute through App Store/Play Store

---

**Safe+Sound is ready to help! Start exploring now.** 🚨

Run: `npm start`
