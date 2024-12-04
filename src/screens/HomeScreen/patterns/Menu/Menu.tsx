import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  const baseSize = '40px'

  return (
    <Box
      styleSheet={{
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '20px',
        paddingVertical: '16px',
        color: theme.colors.neutral.x050,
      }}
    >
      <Button.Base
        styleSheet={{
          borderRadius: '100%',
          width: baseSize,
          height: baseSize,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.primary.x500,
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <Text>
          HN
        </Text>
      </Button.Base>
      <Button.Base
        styleSheet={{
          borderRadius: '100%',
          width: baseSize,
          height: baseSize,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.neutral.x500,
          hover: {
            backgroundColor: theme.colors.neutral.x400,
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600,
          },
        }}
      >
        <Icon name="menu" />
      </Button.Base>
    </Box>
  )
}
