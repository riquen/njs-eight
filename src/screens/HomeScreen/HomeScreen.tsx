'use client'

import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x400,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Link href="/about">
        Vá para a página Sobre
      </Link>
      <Link colorVariant="accent" href="https://www.google.com.br">
        Ir para o Google
      </Link>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h2" variant="heading1">
          Últimas atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  )
}
