'use-client'

import Home from "./page"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Home>
          {children}
        </Home>
      </body>
    </html>
  )
}
