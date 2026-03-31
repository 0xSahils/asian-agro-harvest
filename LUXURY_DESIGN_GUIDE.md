# Luxury Agro-Export Brand Design System

## 🎨 Color Palette (Exact Specifications)

### Primary Colors
- **Deep Forest Green**: `#1B4332` - Primary brand color, used for buttons, headers, main sections
- **Earthy Gold**: `#D4A017` - Accent color, CTAs, highlights, hover states
- **Cream White**: `#FAF7F0` - Background, creates warmth and luxury feel
- **Dark Charcoal**: `#1C1C1C` - Text, headings, deep contrast

### Usage
- **Primary Green**: Navigation, buttons, stats section, footer
- **Gold**: Icons, accents, hover effects, premium highlights
- **Cream**: Backgrounds, cards, clean spaces
- **Charcoal**: All body text, headlines, maximum readability

## 🔤 Typography System

### Fonts
- **Playfair Display**: Headings (h1, h2, h3) - Elegant, luxury, premium feel
- **DM Sans**: Body text, paragraphs, UI elements - Clean, modern, readable

### Sizes & Weights
- **H1**: 48-72px, Playfair Bold (700-900)
- **H2**: 36-48px, Playfair Bold (700)
- **H3**: 24-32px, Playfair Bold (600-700)
- **Body**: 16-18px, DM Sans Regular (400)
- **Small**: 14px, DM Sans Regular (400)

### Usage Classes
```css
.font-playfair  /* For headings */
.font-dm-sans   /* For body text */
```

## ✨ Animation System

### Built-in Animations
1. **Fade In Up** (`fade-in-up`): Elements appear from bottom with fade
2. **Fade In Down** (`fade-in-down`): Elements appear from top
3. **Hover Lift** (`hover-lift`): 8px upward translation on hover
4. **Counter** (automatic): Numbers animate from 0 to target
5. **Parallax** (scroll-based): Subtle depth effect

### Implementation
```tsx
<div className="fade-in-up">Content appears with animation</div>
<div className="hover-lift">Lifts on hover</div>
<div className="fade-in-up" style={{ animationDelay: '0.2s' }}>Delayed animation</div>
```

## 🎯 Component Styling Examples

### Buttons
```tsx
// Primary Button (Green)
<button className="px-8 py-4 bg-primary text-white font-playfair font-bold rounded-lg hover:bg-primary-light transition-all duration-300 hover-lift">
  Click Me
</button>

// Secondary Button (Gold)
<button className="px-8 py-4 bg-accent text-primary font-playfair font-bold rounded-lg hover:bg-accent-light transition-all duration-300 hover-lift">
  Click Me
</button>

// Outline Button (Green Border)
<button className="px-8 py-4 border-2 border-primary text-primary font-playfair font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
  Click Me
</button>
```

### Cards
```tsx
<div className="bg-card rounded-xl p-8 border border-border hover:border-accent hover:shadow-2xl transition-all duration-300 hover-lift">
  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Title</h3>
  <p className="text-muted-foreground font-dm-sans leading-relaxed">Description</p>
</div>
```

### Section Headers
```tsx
<h2 className="text-5xl font-playfair font-bold text-foreground mb-4">Heading</h2>
<p className="text-xl text-muted-foreground font-dm-sans">Subheading</p>
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 640px (Default, hamburger menu)
- **Tablet**: 641px - 1024px (Adjusted layouts)
- **Desktop**: 1025px+ (Full layouts, all features)

### Header
- Mobile: Hamburger menu (visible)
- Tablet: Hamburger menu
- Desktop: Full navigation bar

## 🎪 WhatsApp Button

**Location**: Bottom-right corner, always floating
**Style**: Green (WhatsApp brand color), animated bounce
**Function**: Opens WhatsApp conversation for inquiries
**Contact**: Replace `919876543210` with your WhatsApp number

```tsx
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Page() {
  return (
    <>
      {/* Page content */}
      <WhatsAppButton />
    </>
  );
}
```

## 🖼️ Image Integration

### Generated Images (AI-created)
- `hero-agricultural-landscape.jpg` - Hero section background
- `indian-farmers-harvest.jpg` - About section emotional image
- `modern-warehouse.jpg` - Facilities/logistics
- `quality-testing-lab.jpg` - Quality control section
- `basmati-rice-premium.jpg` - Product showcase
- `indian-spices-collection.jpg` - Product collection
- `global-shipping.jpg` - International shipping
- `organic-farming.jpg` - Sustainable farming
- `certifications-quality.jpg` - Quality assurance

### How to Use Images
```tsx
import Image from 'next/image';

<Image
  src="/images/hero-agricultural-landscape.jpg"
  alt="Agricultural fields"
  fill
  className="object-cover brightness-50"
  priority
/>
```

## 🌈 Dark Mode

Colors automatically adjust for dark mode in `:root.dark` selector:
- Background becomes dark charcoal
- Text becomes cream white
- Borders become dark grey
- All accent colors remain same

## 📊 Luxury Features

1. **Premium Typography**: Playfair Display for elegant headings
2. **Smooth Animations**: Scroll-triggered fade-ins, hover lifts
3. **Emotional Imagery**: AI-generated Indian agricultural photography
4. **Color Sophistication**: Limited, carefully chosen palette
5. **Floating CTA**: Always-available WhatsApp button
6. **Counter Animations**: Dynamic number animations on stats
7. **Parallax Effects**: Depth and dimension on scroll
8. **Hover Interactions**: Lift effects, color transitions

## 🚀 Quick Reference CSS Classes

| Class | Effect |
|-------|--------|
| `.font-playfair` | Playfair Display font |
| `.font-dm-sans` | DM Sans font |
| `.fade-in-up` | Fade in from bottom |
| `.fade-in-down` | Fade in from top |
| `.hover-lift` | Lifts on hover |
| `.bg-primary` | Deep forest green |
| `.bg-accent` | Earthy gold |
| `.text-primary` | Green text |
| `.text-accent` | Gold text |
| `.border-border` | Soft border color |
| `.text-muted-foreground` | Secondary text color |

## 📝 Best Practices

1. **Always use Playfair for headings** - Maintains luxury feel
2. **Use DM Sans for body text** - Ensures readability
3. **Apply fade-in animations to sections** - Creates depth
4. **Use hover-lift on interactive elements** - Enhances UX
5. **Add animation delays** - Stagger animations for elegance
6. **Maintain color consistency** - Use primary/accent from CSS variables
7. **Include WhatsAppButton on all pages** - Accessibility
8. **Use AI images throughout** - Emotional connection

## 🎬 Animation Timings

- **Fade-in duration**: 0.8s ease-out
- **Hover transition**: 0.3s ease
- **Bounce animation**: Continuous, emphasizes urgency
- **Counter speed**: 20ms per increment

---

This design system creates a **luxury, premium agricultural export brand** that combines tradition with modern elegance, emotional storytelling with international professionalism.
