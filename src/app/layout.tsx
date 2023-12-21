import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderComponent from '@/components/HeaderComponent'
import Drawer from '@/components/Drawer'
import Divider from '@/components/Divider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Drop Ship 2000',
  description: 'Order your stuff here and we will get it to you as soon as possible.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-h-screen overflow-hidden">
          <HeaderComponent />
          <div className="flex">
            <div className="hidden lg:block">
              <Drawer />
            </div>
            <div className="h-screen overflow-x-auto flex-1">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
