import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
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
      <Button colorVariant="positive" variant="contained" size='xs'>
        Success
      </Button>
      <Button colorVariant="warning" variant="ghost" size="sm">
        Alert
      </Button>
      <Button colorVariant="negative" variant="outlined">
        Error
      </Button>
      <Button colorVariant="primary" variant="contained" size="lg">
        Large
      </Button>
      <Button.Base>
        <Image src="https://www.github.com/riquen.png" alt="Imagem de perfil do Henrique Nunes" />
      </Button.Base>
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
