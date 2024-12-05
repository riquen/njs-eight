import Box from "@src/components/Box/Box";

export default function Background() {
  const imageUrl = 'https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

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
