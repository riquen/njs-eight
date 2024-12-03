'use client'

import NextLink from 'next/link'
import Text from '../Text/Text';
import { forwardRef } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { ThemeColorsVariants, ThemeTypographyVariants } from '@src/theme/theme';
import { useTheme } from '@src/theme/ThemeProvider';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet
  variant?: ThemeTypographyVariants
  colorVariant?: ThemeColorsVariants
  colorVariantEnabled?: boolean
}

const Link = forwardRef(({ href, children, colorVariant = 'primary', styleSheet, colorVariantEnabled = true, ...props }: LinkProps, ref) => {
  const theme = useTheme()
  const isExternalLink = href.startsWith('http')

  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600,
    }
  }

  const linkProps = {
    ref,
    href,
    tag: 'a',
    children,
    styleSheet: {
      textDecoration: 'none',
      outline: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.hover.color,
        }
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
    },
    ...props,
  }

  if (isExternalLink) return (
    <Text
      {...{
        target: '_blank',
        ...linkProps,
      }}
    />
  )

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Text {...linkProps} />
    </NextLink>
  )
})

export default Link
