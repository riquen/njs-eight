import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface BoxProps {
  children: React.ReactNode;
  styleSheet: StyleSheet;
  tag?: string;
}

export default function Box({ children, styleSheet, tag = 'div', ...props }: BoxProps) {
  const Tag = tag;

  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  )
}
