import React from 'react'

import { useAtom } from 'jotai'

import { currentUserAtom } from '@/lib/store'

import { signOut } from '@/lib/supabase/auth'

import { ExternalLink } from 'lucide-react'
import { User } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/atoms/dropdown-menu'
import { UserAvatar } from '@/atoms/user-avatar'

export function UserDropdown({ ...props }) {
  const [currentUser] = useAtom(currentUserAtom)
  console.log(currentUser)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          src={currentUser?.avatar_url ? currentUser?.avatar_url : undefined}
          alt={
            currentUser?.display_name ? currentUser?.display_name : undefined
          }
          name={currentUser?.display_name || ''}
          icon='user'
          size='sm'
          scale={true}
          className='h-8 w-8 rounded-full'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' side='bottom' hideWhenDetached={true}>
        <DropdownMenuItem>
          Account
          <DropdownMenuShortcut>
            <ExternalLink size={15} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={async () => signOut()}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
