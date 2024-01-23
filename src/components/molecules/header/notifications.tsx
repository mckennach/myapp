import React from 'react'

import { useAtom } from 'jotai'

import { currentUserAtom } from '@/lib/store'

import { ExternalLink } from 'lucide-react'
import { Bell } from 'lucide-react'

import { Button } from '@/components/atoms/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/atoms/dropdown-menu'

export function Notifications({ ...props }) {
  const [currentUser] = useAtom(currentUserAtom)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='rounded-full h-8 w-8'
          scale={true}
        >
          <Bell size={17} />
        </Button>
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
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
