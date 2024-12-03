'use client'

import styled from "styled-components";
import { StyleSheet } from "./StyleSheet";
import { parseStyleSheet } from '@displaykit/responsive_styles'
import { forwardRef } from "react";

interface StyledBaseComponentProps {
  ref: any
  $styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  align-content:flex-start;
  flex-shrink: 0;
  ${({ $styleSheet }) => parseStyleSheet($styleSheet)}
`

interface BaseComponentProps {
  styleSheet?: StyleSheet;
  [key: string]: any;
}

export const BaseComponent = forwardRef<unknown, BaseComponentProps>(({ styleSheet = {}, ...props }, ref) => {
  return (
    <StyledBaseComponent ref={ref} $styleSheet={styleSheet} {...props} />
  )
})
