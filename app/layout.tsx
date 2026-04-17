// app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zap Web Media Services",
  description: "Zap Web Media Services deliver innovative, high-performance software solutions for businesses of the future.",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-foreground antialiased`}>
        {/* <MouseMoveEffect /> */}
        {children}
      </body>
    </html>
  )
}
