import dynamicIconImports from 'lucide-react/dynamicIconImports'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useAtom } from 'jotai'

import { sideBarLeftCollapsedAtom } from '@/lib/store'

import { cn } from '@/lib/utils'

import { AudioLines, Home, MessageCircleMore } from 'lucide-react'

import { Button, buttonVariants } from '@/components/atoms/button'

import { Icon } from '@/atoms/icons'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/atoms/tooltip'

interface SidebarNavigation {
  title: string
  icon: keyof typeof dynamicIconImports | null
  items: SidebarNavigationItems[]
}

interface SidebarNavigationItems {
  title: string
  href: string
  description: string
  icon: keyof typeof dynamicIconImports
}

const sidebarNavigation: SidebarNavigation[] = [
  {
    title: '',
    icon: null,
    items: [
      {
        title: 'Home',
        href: '/',
        description: 'Home',
        icon: 'home'
      },
      {
        title: 'Explore',
        href: '/explore',
        description: 'Explore',
        icon: 'search'
      },
      {
        title: 'Discuss',
        href: '/message-circle-more',
        description: 'A place to chat',
        icon: 'message-circle-more'
      }
    ]
  },
  {
    title: 'Your Library',
    icon: 'library',
    items: [
      {
        title: 'Sounds',
        href: '/sounds',
        description: 'Users saved sounds',
        icon: 'audio-lines'
      },
      {
        title: 'Liked',
        href: '/liked',
        description: 'Users liked sounds',
        icon: 'heart'
      }
    ]
  }
]

export function SidebarNavigation({ ...props }) {
  const pathname = usePathname()
  const [sideBarLeftCollapsed, setSidebarLeftCollaposed] = useAtom(
    sideBarLeftCollapsedAtom
  )
  return (
    <nav className='w-full mt-6 px-2'>
      <ul className='space-y-4'>
        {sideBarLeftCollapsed ? (
          <>
            {sidebarNavigation.map((nav, index) => (
              <li key={index}>
                {nav?.icon && (
                  <Button
                    variant='ghost'
                    size='sm'
                    className='justify-center w-full px-0'
                  >
                    <Icon name={nav.icon} className='w-4 h-4' />
                  </Button>
                )}
                <ul className='space-y-1'>
                  {nav.items.map((item, index) => (
                    <li key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                                className:
                                  'h-7 flex justify-center items-center py-1 gap-2 text-xs font-medium rounded-md'
                              }),
                              pathname === item.href && 'bg-tinted-higlight-2'
                            )}
                          >
                            <Icon
                              name={item.icon}
                              className={cn(
                                'flex-shrink-0 w-4 h-4 text-gray-400'
                              )}
                            />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                          {item.description}
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </>
        ) : (
          <>
            {sidebarNavigation.map((nav, index) => (
              <li key={index}>
                <h3 className='text-2xs pl-2 font-bold text-subdued'>
                  {nav.title}
                </h3>
                <ul className='mt-2 space-y-0'>
                  {nav.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                            className:
                              'h-7 flex justify-start items-center py-1 gap-2 text-xs font-medium rounded-md'
                          }),
                          pathname === item.href && 'bg-tinted-higlight-2'
                        )}
                      >
                        <Icon
                          name={item.icon}
                          className={cn('flex-shrink-0 w-4 h-4 text-gray-400')}
                        />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  )
}
