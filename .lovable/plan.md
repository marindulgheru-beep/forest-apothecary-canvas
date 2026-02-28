

## Plan: Add SVG World Tree to Navbar and Hero

### 1. Create `src/components/WorldTree.tsx`
A reusable SVG component with a `size` prop (default 220). Draws a bare-branch botanical tree using stroke-only paths in `#8FAF7E`. The tree will have a trunk splitting into 3-4 main branches with smaller offshoots — minimal line-art style, no fill. Apply a CSS class for the sway animation.

### 2. Add sway keyframes to `tailwind.config.ts`
Add two keyframe animations:
- `sway`: rotate(-1.5deg) to rotate(1.5deg), transform-origin bottom center
- Two animation utilities: `animate-sway` (6s, ease-in-out, infinite, alternate) and `animate-sway-slow` (9s, same params but subtler)

### 3. Update `Navigation.tsx`
Replace the plain "World Tree Herbals®" text with a flex row containing:
- `<WorldTree size={32} className="animate-sway-slow" />` 
- The existing text logo beside it

### 4. Update `HeroSection.tsx`
Insert the large tree centered above the headline inside the stagger container:
- `<WorldTree size={220} className="animate-sway" />` as the first child with `motion.div` wrapper using the `fadeUp` variant, plus `mx-auto mb-6`

