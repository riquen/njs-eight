import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import { useTheme } from "@src/theme/ThemeProvider";
import * as icons from "@src/components/Icon/svgs/_index";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme()

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x050,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingHorizontal: '32px',
        paddingVertical: '40px',
      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = function FeedHeader() {
  const theme = useTheme()
  const { personal } = useTemplateConfig()

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: '24px',
        paddingBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <Image src={personal.avatar} alt="Imagem de perfil do Henrique Nunes" />
        <Box
          styleSheet={{
            justifyContent: 'space-between',
          }}
        >
          <Box styleSheet={{ flex: 1, justifyContent: 'space-between', display: { xs: 'none', md: 'flex', }, }}>
            <Button fullWidth size="lg">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="lg">Buy me a coffee</Button>
          </Box>
          <Box styleSheet={{ flex: 1, justifyContent: 'space-between', display: { xs: 'flex', md: 'none', }, }}>
            <Button fullWidth size="xs">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xs">Buy me a coffee</Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        {personal.name}
      </Text>
      <Box
        styleSheet={{
          flexDirection: 'row',
          gap: '4px',
        }}
      >
        {Object.keys(personal.socialNetworks).map((key: keyof typeof icons) => {
          if (personal.socialNetworks[key]) {
            return (
              <Link key={key} href={personal.socialNetworks[key]} >
                <Icon name={key} />
              </Link>
            )
          }
          return null
        })}
      </Box>
    </Box >
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
