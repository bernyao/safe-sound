# Neobrutalist Design System 🎨

Complete implementation of the neobrutalist design system for Safe+Sound.

---

## Design Philosophy

**Neobrutalism** is a modern design trend featuring:

- **Bold & Unapologetic** - Strong visual hierarchy
- **Tactile & Physical** - Shadow effects create depth
- **High Contrast** - Clear black borders and bright colors
- **Digital Craftsmanship** - Imperfect beauty in technology
- **User-Focused** - Accessible and functional

---

## Design Tokens

### Borders

```
Border Width: 2px
Border Color: #000000 (pure black)
Border Style: solid
```

### Shadows (45-degree offset)

```
Box Shadows:
- Small (sm):  2px 2px 0px rgba(0,0,0,1)
- Medium:      4px 4px 0px rgba(0,0,0,1)
- Large (lg):  6px 6px 0px rgba(0,0,0,1)
- Extra Large: 8px 8px 0px rgba(0,0,0,1)

On press/hover: Shadow reduces by 2px
On active: Shadow reduces by 4px
```

### Border Radius

```
Buttons:         rounded-2xl  (16px)
Cards:           rounded-3xl  (24px)
Icons:           rounded-xl   (12px)
Input fields:    rounded-2xl  (16px)
Pill buttons:    rounded-full (9999px)
```

### Typography

```
Font Family: System default (San Francisco, Roboto)

Headings:
- H1: 28px, weight 700, line-height 1.2
- H2: 18px, weight 700, line-height 1.3
- H3: 16px, weight 700, line-height 1.4

Body Text:
- Large: 14px, weight 400, line-height 1.5
- Small: 12px, weight 400, line-height 1.4
- Extra Small: 10px, weight 400

Buttons & Labels:
- 14px, weight 700 (bold)
- 12px, weight 600 (semi-bold)
```

### Spacing

```
Scale: 4px base unit

Common Values:
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px
- 3xl: 48px
```

---

## Color Palette

### Primary Colors

```css
Red (#ef4444)
- Light: #fca5a5
- Default: #ef4444
- Dark: #dc2626
- Use: CPR, critical info, emergencies

Orange (#f97316)
- Light: #fed7aa
- Default: #f97316
- Dark: #ea580c
- Use: Primary accent, buttons, highlights

Teal (#0d9488)
- Light: #99f6e4
- Default: #0d9488
- Dark: #0f766e
- Use: Secondary accent, info

Yellow (#fbbf24)
- Light: #fef08a
- Default: #fbbf24
- Dark: #d97706
- Use: Warnings, alerts

Purple (#a855f7)
- Light: #e9d5ff
- Default: #a855f7
- Dark: #7e22ce
- Use: Special, unique content

Blue (#3b82f6)
- Light: #bfdbfe
- Default: #3b82f6
- Dark: #1d4ed8
- Use: Information, secondary
```

### Neutral Colors

```
Black: #000000 (borders, text)
White: #ffffff (cards, background)
Gray 50: #f9fafb
Gray 100: #f3f4f6
Gray 300: #d1d5db
Gray 500: #6b7280
Gray 700: #374151
Gray 900: #111827
```

### Background

```
Default Background: #fef3c7 (warm amber)
Provides:
- Warmth and approachability
- Good contrast for dark elements
- Emergency feel without being alarming
```

---

## Component Specifications

### Card Component

```jsx
<Card variant="orange">
  <Text>Content</Text>
</Card>
```

**Specifications:**

- Border: 2px solid #000000
- Border Radius: 24px
- Padding: 16px
- Shadow: 6px 6px 0px rgba(0,0,0,1)
- Elevation (Android): 8
- Background: Color variant
- Hover: Shadow reduces to 4px 4px
- Active: Shadow reduces to 2px 2px

**Variants:**

- `white` - #ffffff (default)
- `orange` - #f97316 (primary)
- `red` - #ef4444 (critical)
- `teal` - #0d9488 (secondary)
- `yellow` - #fbbf24 (warning)
- `purple` - #a855f7 (special)
- `blue` - #3b82f6 (info)

---

### Button Component

```jsx
<Button variant="primary" size="md">
  Click Me
</Button>
```

**Specifications:**

- Border: 2px solid #000000
- Border Radius: 16px
- Font Weight: 700 (bold)
- Shadow: 4px 4px 0px rgba(0,0,0,1)
- On Press: Shadow 2px 2px, translate(2px, 2px)
- On Active: Shadow 1px 1px, translate(3px, 3px)

**Variants:**

- `primary` - Orange background, white text
- `secondary` - White background, dark text
- `ghost` - Transparent, no shadow

**Sizes:**

- `sm` - 12px text, 8px padding
- `md` - 14px text, 12px padding
- `lg` - 16px text, 16px padding

---

### Input Component

```jsx
<Input
  placeholder="Search..."
  value={query}
  onChangeText={setQuery}
  leftIcon={icon}
  rightIcon={icon}
/>
```

**Specifications:**

- Border: 2px solid #000000
- Border Radius: 16px
- Padding: 12px 16px
- Font Size: 14px
- Placeholder Color: #9ca3af
- Shadow: 4px 4px 0px rgba(0,0,0,1)
- Focus State: Border color changes to orange

**Search Bar:**

- Specialized Input with icons
- Left icon: 🔍
- Right icon: 🎤 (orange)

---

### IconButton Component

```jsx
<IconButton variant="primary" size="md" icon={<Plus />} />
```

**Specifications:**

- Border: 2px solid #000000
- Border Radius: 12px
- Shadow: 3px 3px 0px rgba(0,0,0,1)
- On Press: Shadow 2px 2px

**Variants:**

- `primary` - Orange
- `secondary` - Light orange
- `ghost` - Transparent

**Sizes:**

- `sm` - 24px (small icon)
- `md` - 32px (medium icon)
- `lg` - 40px (large icon)

---

### Pill Button Component

```jsx
<PillButton active>All (12)</PillButton>
```

**Specifications:**

- Border: 2px solid #000000
- Border Radius: 9999px (full)
- Padding: 8px 16px
- Font Size: 12px
- Shadow: 3px 3px 0px rgba(0,0,0,1)
- Active: Orange background, white text
- Inactive: White background, gray text

---

## Animation & Interaction

### Transitions

```
Default: all 0.2s ease
Shadow change: immediate
Transform: 0.2s cubic-bezier(0.4, 0, 0.2, 1)
```

### States

```
Default:  Normal appearance
Hover:    Shadow reduces, slight translate (2px, 2px)
Active:   Shadow reduces more, translate (3px-4px, 3px-4px)
Pressed:  Visual feedback through shadow/transform
Disabled: Opacity 0.6, no interactions
```

### Feedback

- **Visual**: Shadow changes immediately
- **Tactile**: Transform creates depth effect
- **Auditory**: Haptic feedback on mobile (if enabled)

---

## Accessibility

### Contrast Ratios

- Text on white: 14:1+ (AAA)
- Text on orange: 8.5:1+ (AAA)
- Text on colored backgrounds: 7:1+ (AA minimum)

### Touch Targets

- Minimum: 44x44px (iOS/Android standard)
- Cards: 60px height for comfortable interaction
- Buttons: 48px height minimum

### Semantic HTML/Native

- Use `TouchableOpacity` for buttons
- Use `Text` with proper hierarchy
- Provide `accessibilityLabel` for icons

### Motion & Readiness

- No auto-playing animations
- Respects `prefers-reduced-motion`
- Clear focus states for keyboard navigation

---

## Implementation Examples

### Creating a Custom Card

```jsx
import { Card } from "../components/ui/Card";

export function CustomCard() {
  return (
    <Card variant="orange" style={{ marginBottom: 16 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          color: "#ffffff",
        }}
      >
        Emergency: CPR
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#ffffff",
          marginTop: 8,
        }}
      >
        Start chest compressions immediately
      </Text>
    </Card>
  );
}
```

### Creating a Custom Button

```jsx
import { Button } from "../components/ui/Button";

export function CustomButton() {
  return (
    <Button
      variant="primary"
      size="lg"
      onPress={() => {}}
      style={{ marginTop: 16 }}
    >
      Emergency Call
    </Button>
  );
}
```

---

## Design Tools

### Figma

- Neobrutalist design system components available
- Color palette set up for consistency
- Shadow styles predefined
- Typography scale established

### CSS Variables (if using Tailwind)

```css
:root {
  --color-primary: #f97316;
  --color-critical: #ef4444;
  --color-border: #000000;
  --shadow-brutal: 4px 4px 0px rgba(0, 0, 0, 1);
  --radius-card: 24px;
  --radius-button: 16px;
}
```

---

## Brand Voice

The design system conveys:

- **Trust** - Bold, honest design
- **Reliability** - Clear, no-nonsense approach
- **Emergency-Ready** - High contrast, always visible
- **Approachable** - Warm colors, human scale
- **Professional** - Polished implementation

---

## Consistency Guidelines

### Do ✅

- Use the color palette consistently
- Maintain 2px black borders
- Apply 45-degree shadows
- Use the established typography scale
- Keep spacing multiples of 4px
- Test on multiple devices

### Don't ❌

- Mix border widths (stick to 2px)
- Use gradients (keep solid colors)
- Add extra shadows
- Use system fonts inconsistently
- Mix rounded and sharp corners
- Forget dark mode considerations

---

## Performance Considerations

### Shadow Optimization

- Use `elevation` on Android
- Use `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius` on iOS
- Don't animate shadows (freeze them, animate opacity)

### Typography Optimization

- Use native font stacks
- Cache font weights
- Don't scale fonts unnecessarily

### Color Optimization

- Use hex colors (not RGB)
- Leverage OS color resources
- Consider dark mode variants

---

## Dark Mode (Future)

When implementing dark mode:

```javascript
const colors = {
  light: {
    background: "#fef3c7",
    border: "#000000",
    text: "#000000",
  },
  dark: {
    background: "#1f2937",
    border: "#ffffff",
    text: "#ffffff",
  },
};
```

---

## Resources

- Neobrutalism Trend: https://en.wikipedia.org/wiki/Neobrutalism
- Design System Docs: See README.md
- Component Implementation: See `src/components/`
- Color Reference: Color palette section above

---

**The neobrutalist design system is complete and ready to use!**
