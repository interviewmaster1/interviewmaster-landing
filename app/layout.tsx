import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InterviewMaster - Master Your Next Interview',
  description: 'AI-powered interview preparation with industry-standard grading methods.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
