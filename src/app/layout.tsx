import { StoreProvider, ThemeProvider } from '@/context'
import { GeistSans } from 'geist/font/sans'

import { cookies } from 'next/headers'

import { createClient } from '@/lib/supabase/server'

// import AuthButton from '@/components/AuthButton'
import { Toaster } from '@/components/atoms/sonner'
import { TooltipProvider } from '@/components/atoms/tooltip'

import '@/styles/globals.output.css'

const defaultUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Chrap',
  description: 'Chrap is a simple, fast, and secure music app.'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: session, error: sessionError } =
    await supabase.auth.getSession()
  const { data: user, error: userError } = await supabase.auth.getUser()

  return (
    <html lang='en' className={GeistSans.className} suppressHydrationWarning>
      <StoreProvider
        session={session ? session?.session : null}
        user={user ? user?.user : null}
      >
        <body className='bg-background text-foreground'>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
          >
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </StoreProvider>
    </html>
  )
}
