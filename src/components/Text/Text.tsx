'use client'

import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import { forwardRef } from "react";

interface TextProps {
  children?: React.ReactNode;
  variant?: ThemeTypographyVariants
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'li' | string
  styleSheet?: StyleSheet
  ref: any
}

const Text = forwardRef(({ children, variant = 'body2', tag = 'p', styleSheet, ...props }: TextProps, ref) => {
  const theme = useTheme()
  const textVariant = theme.typography.variants[variant]

  return (
    <BaseComponent
      ref={ref}
      as={tag}
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
})

export default Text
