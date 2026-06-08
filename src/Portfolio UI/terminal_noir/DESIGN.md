---
name: Terminal Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bdcaba'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#879485'
  outline-variant: '#3e4a3d'
  surface-tint: '#62df7d'
  primary: '#62df7d'
  on-primary: '#003914'
  primary-container: '#1ca64d'
  on-primary-container: '#003111'
  inverse-primary: '#006e2d'
  secondary: '#c0c7d3'
  on-secondary: '#2a313b'
  secondary-container: '#404752'
  on-secondary-container: '#afb5c2'
  tertiary: '#ffb2bf'
  on-tertiary: '#660027'
  tertiary-container: '#ec6284'
  on-tertiary-container: '#5a0022'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7ffc97'
  primary-fixed-dim: '#62df7d'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#dce3f0'
  secondary-fixed-dim: '#c0c7d3'
  on-secondary-fixed: '#151c25'
  on-secondary-fixed-variant: '#404752'
  tertiary-fixed: '#ffd9de'
  tertiary-fixed-dim: '#ffb2bf'
  on-tertiary-fixed: '#3f0016'
  on-tertiary-fixed-variant: '#8a143c'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  surface-pitch: '#0A0A0A'
  surface-elevated: '#171717'
  border-subtle: '#262626'
  terminal-green: '#16A34A'
  text-muted: '#9CA3AF'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-base:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 120px
---

## Brand & Style
The design system is engineered for the high-performance developer, balancing the raw utility of a terminal with the refined aesthetics of a modern creative suite. It targets a professional tech audience, evoking feelings of precision, architectural integrity, and technical mastery.

The visual direction is **Modern Technical Minimalism**. It utilizes a "Void" background strategy to minimize visual noise, allowing code snippets and project showcases to take center stage. The style leverages sharp contrasts, monochromatic foundations with a singular "Success" accent, and a rigorous adherence to a grid-based information hierarchy.

## Colors
The palette is rooted in a "Deep Dark" philosophy. The primary background is absolute black (`#000000`), creating a boundless canvas where elements appear to float. 

- **Success Green:** Used sparingly for actionable items, status indicators, and highlights, echoing the classic terminal "compiled successfully" state.
- **Grayscale Tier:** Neutrals are strictly tiered to create depth without relying on shadows. Surfaces use `#0A0A0A` for containers and `#171717` for interactive cards.
- **Accents:** Borders should use low-opacity whites or the `border-subtle` hex to maintain a crisp, blueprint-like structure.

## Typography
Typography is the primary vehicle for the "technical" feel of the design system. 

1.  **Space Grotesk (Headlines):** Its geometric, slightly eccentric letterforms provide a futuristic flair. Use tight letter spacing for large display text.
2.  **Hanken Grotesk (Body):** A highly legible, contemporary sans-serif that ensures long-form descriptions (like project case studies) remain readable.
3.  **JetBrains Mono (Labels/UI):** This monospaced font is used for secondary data, tags, and code blocks to reinforce the student’s BSIT background and developer identity.

All text should adhere strictly to a grayscale hierarchy: Pure White for titles, `text-muted` for body, and 50% opacity for metadata.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Content is centered within a 1200px container on desktop, while margins are fluid on smaller screens. 

- **Grid:** A 12-column system is used for project galleries, while a 2-column asymmetric split (33% / 66%) is preferred for "About" and "Experience" sections.
- **Rhythm:** An 8px base unit governs all padding and margins. Section spacing is aggressive (120px+) to ensure the "Minimalist" brand attribute is felt through significant whitespace (or "blackspace").
- **Mobile:** Elements stack vertically with a consistent 16px horizontal margin. Navigation transitions to a full-screen overlay to maintain the clean aesthetic.

## Elevation & Depth
In a pure black environment, traditional shadows are ineffective. This design system uses **Tonal Layering** and **Stroke Definition** to create depth:

- **Layers:** The base is `#000000`. Cards sit at `#0A0A0A`. Hover states elevate to `#171717`.
- **Borders:** Use 1px solid strokes for all containers. Default borders should be `border-subtle` (`#262626`). Interactive elements transition to a white or green stroke on focus/hover.
- **Glow:** Subtle, low-opacity radial gradients (Green, 5% opacity) may be placed behind key CTA buttons to create a "digital aura" without breaking the flat aesthetic.

## Shapes
Shapes are disciplined and functional. The `Soft` (0.25rem) setting ensures that while the design feels modern, it retains a "hard-tech" edge. 

- **Buttons & Inputs:** Use the standard 4px radius. 
- **Cards:** 8px (`rounded-lg`) is the maximum allowed radius to maintain the architectural feel.
- **Dividers:** Horizontal lines should be 1px thin, using the `border-subtle` color, often used to separate list items in a resume or skill section.

## Components
- **Buttons:** Primary buttons are solid `terminal-green` with black text. Secondary buttons are ghost-style (1px border-subtle) with white text. Hover states should involve a slight horizontal shift or a change in border brightness.
- **Cards:** Project cards use a "no-border" look on the grid, revealing a subtle `#171717` background and 1px border only on hover.
- **Chips/Tags:** Use `JetBrains Mono` in all-caps. Styling should be a dark gray background with muted text, resembling terminal tags or metadata.
- **Input Fields:** Bottom-border only or very subtle 1px outlines. Focus state must use the `terminal-green` for the cursor and border.
- **Progress/Skills:** Use thin "Terminal Bars" (linear progress) in green to visualize technical proficiency levels.
- **Lists:** Experience items should be connected by a vertical 1px line (timeline style), emphasizing a linear professional progression.