'use client'

// import { AuthTables, Tables } from '@/types/database.ds'
import { Session, User } from '@supabase/supabase-js'
import { sub } from 'date-fns'
import { useHydrateAtoms } from 'jotai/utils'

import { useEffect } from 'react'

import { Provider } from 'jotai'
import { useAtom } from 'jotai'

import {
  asyncCurrentUserAtom,
  authSessionAtom,
  authUserAtom
} from '@/lib/store'
import { store } from '@/lib/store'

import {
  subscribeToUsers,
  subscribeToUserUpdate
} from '@/lib/store/client/users'

export function StoreProvider({
  children,
  session,
  user
}: {
  children: React.ReactNode
  session: Session | null
  user: User | null
}) {
  const [authUser, setAuthUser] = useAtom(authUserAtom)
  const [, syncCurrentUser] = useAtom(asyncCurrentUserAtom)

  useHydrateAtoms(
    [
      [authSessionAtom, session],
      [authUserAtom, user]
    ],
    {
      store
    }
  )

  useEffect(() => {
    if (user) {
      setAuthUser(user)
    }
  }, [user, setAuthUser])

  useEffect(() => {
    ;(async () => {
      if (authUser) {
        await syncCurrentUser()
        // subscribeToUserUpdate(async () => {
        //   console.log('syncing user...')
        //   // await syncCurrentUser()
        // })
      }
    })()
  }, [authUser, syncCurrentUser])

  return <Provider store={store}>{children}</Provider>
}
