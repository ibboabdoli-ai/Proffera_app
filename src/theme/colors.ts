// Proffera brand design tokens
// Primary palette derived from the dark-navy + accent style on proffera.se

export const colors = {
  // Backgrounds
  background: '#0F172A',       // Deep navy — main screen background
  surface: '#1E293B',          // Card / sheet background
  surfaceAlt: '#162032',       // Slightly lighter surface for list items

  // Brand
  primary: '#3B82F6',          // Blue — CTA buttons, active states
  primaryDark: '#1D4ED8',      // Pressed / darker blue
  primaryMuted: '#1E3A5F',     // Blue tint for highlights

  // Text
  text: '#F1F5F9',             // Main body text (near-white)
  textMuted: '#94A3B8',        // Secondary / caption text
  textPlaceholder: '#475569',  // Input placeholders

  // Border / dividers
  cardBorder: '#334155',       // Card border
  divider: '#1E293B',          // Row separators

  // Status
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  locked: '#475569',           // Låst module color

  // Tab bar
  tabBar: '#0F172A',
  tabBarBorder: '#1E293B',
  tabActive: '#3B82F6',
  tabInactive: '#64748B',
} as const;

export type ColorKey = keyof typeof colors;
