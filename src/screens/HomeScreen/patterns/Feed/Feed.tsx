import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>
        Feed
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = function FeedHeader() {
  return (
    <Box>
      <Image src="https://www.github.com/riquen.png" alt="Imagem de perfil do Henrique Nunes" />
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Link href="https://www.github.com/riquen">
        <Icon name="github" />
      </Link>
      <Text>
        Feed Header
      </Text>
    </Box>
  )
}

Feed.Posts = function FeedPosts() {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}
