'use client'
import styled from "styled-components";
import { StyleSheet } from '@src/theme/StyleSheet'
import { parseStyleSheet } from '@displaykit/responsive_styles'

interface StyledBaseComponentProps {
  $styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  ${({ $styleSheet }) => parseStyleSheet($styleSheet)}
`

export const BaseComponent = ({ styleSheet, ...props }) => {
  return (
    <StyledBaseComponent $styleSheet={styleSheet} {...props} />
  )
}

BaseComponent.defaultProps = {
  $styleSheet: {},
}
