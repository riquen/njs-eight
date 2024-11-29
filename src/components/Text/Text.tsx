'use client'

import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
  children?: React.ReactNode;
  variant?: ThemeTypographyVariants
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'li'
  styleSheet?: StyleSheet
}

export default function Text({ children, variant = 'heading1', tag = 'p', styleSheet, ...props }: TextProps) {
  const theme = useTheme()
  const textVariant = theme.typography.variants[variant]

  return (
    <BaseComponent
      $tag={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </BaseComponent>
  )
}
