import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
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
