import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './Header'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Seyoung Jeon Blog',
  description:
    'It describes the learning about web development or software development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`relative h-dvh bg-neutral-800 text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header title="Seyoung Jeon" />
        {/* <Link href="/login">로그인</Link> */}
        {children}
      </body>
    </html>
  )
}
