'use client'

// Types
import type { Provider } from '@supabase/supabase-js'

import React from 'react'

import { signInWithOAuth } from '@/lib/supabase/auth'
import { createClient } from '@/lib/supabase/client'

import { Button } from '@/components/atoms/button'
import { GithubIcon, GoogleIcon } from '@/components/atoms/icons'

interface ProviderButtonsProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProviderButtons = React.forwardRef<HTMLDivElement, ProviderButtonsProps>(
  ({ ...props }, ref) => {
    const supabase = createClient()
    const handleProviderLogin = async (provider: Provider) => {
      await signInWithOAuth(provider)
    }

    return (
      <div className='flex flex-col gap-2' ref={ref} {...props}>
        <Button
          className='rounded-full'
          onClick={() => handleProviderLogin('google')}
          // className='btn btn-outline relative flex w-full items-center justify-center rounded-full bg-white font-normal text-black hover:bg-white/80'
        >
          <div className='flex items-center justify-center gap-3'>
            <GoogleIcon size='18' />
            <span className='grow overflow-hidden text-ellipsis'>
              Continue with Google
            </span>
          </div>
        </Button>
        <Button
          className='rounded-full'
          onClick={() => handleProviderLogin('github')}
          // className='btn btn-outline relative flex w-full items-center justify-center rounded-full bg-white font-normal text-black hover:bg-white/80'
        >
          <div className='flex items-center justify-center gap-3'>
            <GithubIcon size='18' />
            <span className='grow overflow-hidden text-ellipsis'>
              Continue with Github
            </span>
          </div>
        </Button>
      </div>
    )
  }
)

ProviderButtons.displayName = 'ProviderButtons'

export { ProviderButtons }
