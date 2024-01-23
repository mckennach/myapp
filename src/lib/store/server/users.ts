'use server'

import { RealtimePostgresChangesPayload } from '@supabase/supabase-js'

import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

import { Tables } from '@/types/database.ds'

/*
 ****** User
 */

export const getUsers = async () => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('users').select('*')
    return {
      data,
      error
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const getUserById = async (userId: string) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()
    return {
      data,
      error
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const getUserByFields = async (fields: Tables<'users'>) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .match(fields)
      .single()
    return {
      data,
      error
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const createUser = async (fields: Tables<'users'>) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('users').insert(fields)
    return {
      data,
      error
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const updateUser = async (userId: string, fields: Tables<'users'>) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase
      .from('users')
      .update(fields)
      .eq('id', userId)
    return {
      data,
      error
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const upsertUser = async (fields: Tables<'users'>) => {
  'use server'

  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('users').upsert(fields)
    return {
      data,
      error
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const deleteUser = async (userId: string) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase
      .from('users')
      .delete()
      .eq('id', userId)
    return {
      data,
      error
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const deleteUsers = async (userIds: string[]) => {
  'use server'

  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase
      .from('users')
      .delete()
      .in('id', userIds)
    return {
      data,
      error
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const subscribeToUsers = async (
  callback: (
    payload: RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  ) => void
) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    return supabase
      .channel('realtime:users')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'users' },
        (payload) => {
          callback(payload)
        }
      )
      .subscribe()
  } catch (error) {
    return error
  }
}

export const subscribeToUserInsert = async (
  callback: (
    payload: RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  ) => void
) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    return supabase
      .channel('realtime:users-insert')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'users' },
        (payload) => {
          callback(payload)
        }
      )
      .subscribe()
  } catch (error) {
    return error
  }
}

export const subscribeToUserUpdate = async (
  callback: (
    payload: RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  ) => void
) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    return supabase
      .channel('realtime:users-update')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'users' },
        (payload) => {
          callback(payload)
        }
      )
      .subscribe()
  } catch (error) {
    return error
  }
}

export const subscribeToUserDelete = async (
  callback: (
    payload: RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  ) => void
) => {
  'use server'
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    return supabase
      .channel('realtime:users-delete')
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'users' },
        (payload) => {
          callback(payload)
        }
      )
      .subscribe()
  } catch (error) {
    return error
  }
}

/*
 ****** User Roles
 */
