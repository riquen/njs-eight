import Box from "@src/components/Box/Box";

export default function Background() {
  const imageUrl = 'https://picsum.photos/800/400'

  return (
    <Box
      styleSheet={{
        width: '100%',
        height: '400px',
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
