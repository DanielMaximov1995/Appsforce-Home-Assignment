import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from 'react'
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Appsforce Home Assignment'
}

export interface RootLayoutProps { children: ReactNode }

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={inter.className}
      >
        <Layout>
            {children}
        </Layout>
      </body>
    </html>
  )
};

export default RootLayout