'use client'

import { useEffect } from 'react'

import Link from 'next/link'

import { useAtom } from 'jotai'

import { authSessionAtom, authUserAtom, currentUserAtom } from '@/lib/store'

import { cn } from '@/lib/utils'

import { Button, buttonVariants } from '@/atoms/button'

import { Logo } from '../atoms/icons'
import { Notifications } from '../molecules/header/notifications'
import { SearchBar } from '../molecules/header/search-bar'
import { UserDropdown } from '../molecules/header/user-dropdown'

export function Header() {
  const [currentUser] = useAtom(currentUserAtom)
  const [session] = useAtom(authSessionAtom)

  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <header className='header flex justify-center w-full h-12 bg-card border-none border-b-foreground/10'>
      <nav className='flex items-center justify-between container w-full text-sm'>
        <div className='flex-1'>
          <Link href='/'>
            <Logo submark={true} />
          </Link>
        </div>

        <SearchBar className='flex-1' />

        <div className='flex gap-2 items-center justify-end flex-1'>
          {session ? (
            <>
              <Notifications />
              <UserDropdown />
            </>
          ) : (
            <>
              <Link
                className={cn(
                  buttonVariants({
                    variant: 'default',
                    size: 'sm',
                    className: 'rounded-full'
                  })
                )}
                href='/register'
              >
                Signup
              </Link>
              <Link
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className: 'rounded-full'
                  })
                )}
                href='/login'
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
