import GlobalStyle from "@src/theme/GlobalStyle"
import ThemeProvider from "@src/theme/ThemeProvider"
import StyledComponentsRegistry from "lib/registry"
import { Poppins } from 'next/font/google'
import { Metadata } from "next";
import { withTemplateConfig } from "@src/services/template/withTemplateConfig";
import { TemplateConfigProvider } from "@src/services/template/TemplateConfigContext";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await withTemplateConfig()

  return {
    title: site.title,
    description: site.description,
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const templateConfig = await withTemplateConfig()

  return (
    <ThemeProvider>
      <GlobalStyle />
      <html className={`${poppins.variable}`}>
        <body>
          <StyledComponentsRegistry>
            <TemplateConfigProvider value={templateConfig}>
              {children}
            </TemplateConfigProvider>
          </StyledComponentsRegistry>
        </body>
      </html >
    </ThemeProvider>
  )
}
