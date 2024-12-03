import { Theme, ThemeColorsVariants } from "@src/theme/theme";

export type Variant = 'contained' | 'outlined' | 'ghost'

function createVariant(theme: Theme, colorVariant: ThemeColorsVariants) {
  return {
    contained: {
      backgroundColor: theme.colors[colorVariant].x500,
      color: theme.colors.neutral.x050,
      hover: {
        backgroundColor: theme.colors[colorVariant].x400,
      },
      focus: {
        backgroundColor: theme.colors[colorVariant].x600,
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.colors[colorVariant].x400}`,
      color: theme.colors[colorVariant].x500,
      hover: {
        backgroundColor: theme.colors[colorVariant].x050,
      },
      focus: {
        backgroundColor: theme.colors[colorVariant].x100,
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors[colorVariant].x500,
      hover: {
        backgroundColor: theme.colors[colorVariant].x050,
      },
      focus: {
        backgroundColor: theme.colors[colorVariant].x100,
      },
    },
  }
}

export function colorVariantBy(theme: Theme, colorVariant: ThemeColorsVariants, variant: Variant) {
  return createVariant(theme, colorVariant)[variant]
}
