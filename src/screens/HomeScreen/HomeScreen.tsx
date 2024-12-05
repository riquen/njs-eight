'use client'

import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import type { Post } from "@src/services/posts/PostsService";

interface HomeScreenProps {
  posts: Post[];
}

export default function HomeScreen({ posts }: HomeScreenProps) {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x050,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={posts} />
      </Feed>
      <Footer />
    </Box>
  )
}
