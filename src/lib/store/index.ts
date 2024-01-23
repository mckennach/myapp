import { Session, User } from '@supabase/supabase-js'
import { atomWithStorage } from 'jotai/utils'

import { atom, createStore } from 'jotai'

import { getUserById } from './server/users'

import { Tables } from '@/types/database.ds'

/*
 * Store
 */

export const store = createStore()

/*
 * Current User
 */
export const authSessionAtom = atom<Session | null>(null)
export const authUserAtom = atom<User | null>(null)

export const asyncCurrentUserAtom = atom(null, async (get, set) => {
  const userId = get(authUserAtom)?.id
  if (!userId) return
  const { data, error } = await getUserById(userId)
  if (error) return
  return set(currentUserAtom, data)
})

export const currentUserAtom = atomWithStorage<Tables<'users'> | null>(
  'current-user',
  null
)

export const sideBarLeftWidthAtom = atomWithStorage<number | null>(
  'sidebar-left-width',
  null
)
export const sideBarLeftCollapsedAtom = atomWithStorage(
  'sidebar-left-collapsed',
  false
)
// export const sideBarRightCollapsedAtom = atomWithStorage(
//   'sidebar-right-collapsed',
//   false
// )

// export const forwardRoutesAtom = atom<string[]>([])
// export const previousRoutesAtom = atom<string[]>([])

// export const sidebarSortByAtom = atom<
//   'recents' | 'recently-added' | 'alphabetical' | 'creator'
// >('recents')
// export const sidebarViewAtom = atom<'grid' | 'list' | 'compact'>('list')
// export const sidebarSearchInputAtom = atom<string>('')
// export const fullScreenAtom = atom<boolean>(false)
