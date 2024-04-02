import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sagar Prajapati Portfolio',
  description: 'Explore my journey, skills, and projects through a dynamic portfolio showcasing my education, expertise, and passion for innovation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <meta name="google-site-verification" content="SYvuOk44jKMoOC5RWEz_bAvtu3v5esBCq6AUu_1JF7s" />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
