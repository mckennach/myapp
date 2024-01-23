import { cookies } from 'next/headers'

import { Header } from '@/components/organisms/header'
import { MainView } from '@/components/organisms/main'
import { SidebarView } from '@/components/organisms/sidebar'
import { AppView } from '@/components/templates'

const defaultUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase'
}

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  const layout = cookies().get('react-resizable-panels:layout')

  let defaultLayout = [15, 85]
  if (layout) {
    defaultLayout = JSON.parse(layout.value)
  }
  return (
    <>
      <Header />
      <AppView>
        <SidebarView
          side='left'
          order={1}
          collapsible={true}
          collapsedSize={4}
          minSize={15}
          maxSize={15}
          defaultSize={defaultLayout[0]}
          id='Sidebar-Left'
        />

        <MainView defaultSize={defaultLayout[1]} id='MainView' order={2}>
          {children}
        </MainView>
      </AppView>
    </>
  )
}
