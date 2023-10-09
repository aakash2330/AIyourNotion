import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ConvexClientProvider from './ConvexClientProvider'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      
      <body className={inter.className}>
        <ConvexClientProvider><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >{children}</ThemeProvider></ConvexClientProvider></body>
          <script async src="https://kit.fontawesome.com/d3d3d77401.js"></script>
    </html>
  )
}
