import { cookies } from 'next/headers'

import { createClient } from '@/lib/supabase/server'

import AuthButton from '@/components/ui/AuthButton'
import ConnectSupabaseSteps from '@/components/ui/ConnectSupabaseSteps'
import DeployButton from '@/components/ui/DeployButton'
import Header from '@/components/ui/Header'
import SignUpUserSteps from '@/components/ui/SignUpUserSteps'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className='flex flex-col items-center flex-1 w-full gap-20'>
      <nav className='flex justify-center w-full h-16 border-b border-b-foreground/10'>
        <div className='flex items-center justify-between w-full max-w-4xl p-3 text-sm'>
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className='flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-fade-up'>
        <Header />
        <main className='flex flex-col flex-1 gap-6'>
          <h2 className='mb-4 text-4xl font-bold'>Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div>

      <footer className='flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10'>
        <p>
          Powered by{' '}
          <a
            href='https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs'
            target='_blank'
            className='font-bold hover:underline'
            rel='noreferrer'
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  )
}
