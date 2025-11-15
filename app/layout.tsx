import './globals.css'
import AdSenseScript from './components/AdSenseScript'

export const metadata = {
  title: 'Brazilian Legal Partners | Premier Business Law Experts',
  description: 'Top-tier legal consultancy for international corporations expanding to Brazil. 15+ years expertise in corporate law and compliance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans antialiased">
        <AdSenseScript />
        {children}
      </body>
    </html>
  )
}
