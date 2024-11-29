'use client'

import styled from "styled-components";
import { StyleSheet } from "./StyleSheet";
import { parseStyleSheet } from '@displaykit/responsive_styles'

interface StyledBaseComponentProps {
  $styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  align-content:flex-start;
  flex-shrink: 0;
  ${({ $styleSheet }) => parseStyleSheet($styleSheet)}
`

export const BaseComponent = ({ styleSheet = {}, ...props }) => {
  return (
    <StyledBaseComponent $styleSheet={styleSheet} {...props} />
  )
}
