import type React from "react"
import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata = {
  title: "Hassan Mehmood |AI-Driven MERN-Stack Developer | Computer Science Student",
  description: "Data Science Enthusiast, MERN Stack Developer, and Cloud Computing Specialist",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'