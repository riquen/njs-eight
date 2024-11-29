import GlobalStyle from "@src/theme/GlobalStyle"
import ThemeProvider from "@src/theme/ThemeProvider"
import StyledComponentsRegistry from "lib/registry"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <html className={`${poppins.variable}`}>
        <body>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html >
    </ThemeProvider>
  )
}
