# Safe+Sound 🚨

An offline-first first aid guide app built with React Native and Expo, featuring a neobrutalist design system.

## Features

✅ **Offline-First Architecture**

- All first aid guides are bundled locally
- Works without internet connection
- Instant access to critical information

✅ **Comprehensive First Aid Content**

- CPR & Choking relief
- Wound management & bleeding control
- Fractures & sprains
- Poisoning response
- Burns treatment

✅ **Neobrutalist Design System**

- Bold black borders (2px)
- Offset shadows (4-6px)
- Bright color palette
- Rounded corners
- Tactile, 3D appearance

✅ **User-Friendly Features**

- Search guides
- Save favorites
- View recently accessed guides
- Emergency contact numbers
- Quick emergency response tips

## Project Structure

```
safe-and-sound/
├── app/                          # Expo Router screens
│   ├── _layout.jsx              # Root layout
│   ├── index.jsx                # Home screen
│   ├── emergency.jsx            # Emergency screen
│   ├── category/
│   │   └── [id].jsx            # Category details
│   └── guide/
│       └── [id].jsx            # Guide details
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Card.jsx        # Card component
│   │   │   ├── Button.jsx      # Button variants
│   │   │   └── Input.jsx       # Input & Search
│   │   └── layout/
│   │       ├── Header.jsx      # Screen header
│   │       └── BottomNav.jsx   # Bottom navigation
│   ├── screens/
│   │   ├── HomeScreen.jsx      # Main home screen
│   │   ├── CategoryScreen.jsx  # Category view
│   │   ├── GuideScreen.jsx     # Guide details
│   │   └── EmergencyScreen.jsx # Emergency info
│   ├── data/
│   │   └── firstAidData.json   # First aid content
│   └── utils/
│       └── storage.js          # AsyncStorage utilities
├── assets/
│   ├── icons/
│   └── images/
├── app.json                     # Expo config
├── babel.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

1. **Navigate to project directory**

   ```bash
   cd "first aid"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on iOS or Android**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## Design System

### Color Palette

- **Red**: `#ef4444` - CPR & Critical
- **Orange**: `#f97316` - Primary accent
- **Teal**: `#0d9488` - Secondary
- **Yellow**: `#fbbf24` - Warnings
- **Purple**: `#a855f7` - Special
- **Blue**: `#3b82f6` - Info

### Typography

- **Headings**: Bold (700), sizes 28px/18px/16px
- **Body**: Regular (400), 14px/12px
- **Buttons**: Bold (700), 14px

### Components

#### Card

- 2px black border
- 24px border-radius
- 6px offset shadow
- Color variants

#### Button

- Primary (orange)
- Secondary (white)
- Ghost (transparent)
- Sizes: sm, md, lg

#### Input

- 2px black border
- Icon support (left/right)
- Focus state: orange border

## Data Structure

### First Aid Data (firstAidData.json)

```json
{
  "categories": [
    {
      "id": 1,
      "name": "CPR & Choking",
      "icon": "❤️",
      "color": "red",
      "guides": [
        {
          "id": 101,
          "title": "CPR for Adults",
          "steps": [...],
          "duration": "5-10 minutes"
        }
      ]
    }
  ]
}
```

## Storage

### AsyncStorage Keys

- `favorites` - Array of saved guide IDs
- `history` - Recently viewed guides
- `settings` - User preferences

### Storage Methods

```javascript
import { storage } from "./src/utils/storage";

// Favorites
await storage.addFavorite(guideId);
await storage.removeFavorite(guideId);
await storage.getFavorites();
await storage.isFavorite(guideId);

// History
await storage.addToHistory(guideId, title);
await storage.getHistory();
await storage.clearHistory();

// Settings
await storage.getSettings();
await storage.updateSettings(newSettings);

// Clear all
await storage.clearAll();
```

## Navigation

The app uses Expo Router with the following routes:

- `/` - Home screen
- `/category/[id]` - Category details
- `/guide/[id]` - Guide details
- `/emergency` - Emergency information

## Key Features

### Home Screen

- Search functionality
- Recently viewed guides
- All categories with guide counts
- Quick access to all content

### Category Screen

- Filtered guides by category
- Duration and step count
- Color-coded by category

### Guide Screen

- Step-by-step instructions
- Save/unsave guides
- Duration and step info
- Automatic history tracking

### Emergency Screen

- Emergency phone numbers
- Emergency response tips
- When to call 911
- Quick reference information

## Development

### Adding New Guides

Edit `src/data/firstAidData.json`:

```json
{
  "id": 102,
  "title": "New Guide Title",
  "steps": ["Step 1", "Step 2", "Step 3"],
  "duration": "X-Y minutes"
}
```

### Customizing Colors

Edit color values in:

- Component files (e.g., `Button.jsx`, `Card.jsx`)
- First aid data color mappings in screen files

### Adding New Screens

1. Create screen in `src/screens/`
2. Create route file in `app/`
3. Export component from route file
4. Add navigation in `BottomNav.jsx`

## Testing

```bash
npm test
```

## Build

### iOS Build

```bash
eas build --platform ios
```

### Android Build

```bash
eas build --platform android
```

## Performance Optimizations

- Lazy loading of guides
- Efficient AsyncStorage caching
- Memoized components
- FlatList for long lists (can be added)

## Accessibility

- High contrast colors
- Large touch targets (44px+ recommended)
- Clear typography hierarchy
- Descriptive icons with labels

## Browser Support

- iOS 14+
- Android 8+
- Web (modern browsers)

## License

MIT License - See LICENSE file for details

## Support

For issues or feature requests, please contact the development team.

---

**Built with ❤️ for safety and health**
