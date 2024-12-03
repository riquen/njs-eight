import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";
import Text from "../Text/Text";
import { useRef } from "react";
import { useRipple } from "react-use-ripple";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/navigation";

const StyledButton = styled(Text) <any>``

export interface ButtonBaseProps {
  children: React.ReactNode
  href?: string
  textVariant?: ThemeTypographyVariants
  styleSheet?: StyleSheet
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ButtonBase({
  children,
  href,
  textVariant,
  styleSheet,
  ...props
}: ButtonBaseProps) {
  const ref = useRef()
  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255,255,255,0.3)'
  })
  const router = useRouter()
  const isLink = !!href
  const Tag = isLink ? 'a' : 'button'

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isLink) {
      event.preventDefault()
      router.push(href)
      return
    }
    return props.onClick?.(event)
  }

  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      href={href}
      styleSheet={{
        backgroundColor: 'transparent',
        border: 'none',
        color: 'inherit',
        outline: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        ...styleSheet
      }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
