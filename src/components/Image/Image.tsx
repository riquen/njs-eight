import { BaseComponent } from "@src/theme/BaseComponent"
import { StyleSheet } from "@src/theme/StyleSheet";

interface ImageProps {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}

export default function Image({ src, alt, styleSheet, ...props }: ImageProps) {
  return (
    <BaseComponent
      as="img"
      src={src}
      alt={alt}
      styleSheet={{
        width: {
          xs: '100px',
          md: '128px',
        },
        height: {
          xs: '100px',
          md: '128px',
        },
        borderRadius: '100%',
        ...styleSheet
      }}
      {...props}
    />
  )
}
