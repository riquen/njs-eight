import { ThemeColorsVariants } from "@src/theme/theme";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase"
import { colorVariantBy, Variant } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  colorVariant?: ThemeColorsVariants
  variant?: Variant
  size?: ButtonSize
}

export default function Button({ children, fullWidth = false, colorVariant = 'primary', variant = 'contained', size = 'md', styleSheet }: ButtonProps) {
  const theme = useTheme()
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...(fullWidth && { alignSelf: 'initial' }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  )
}

Button.Base = ButtonBase
