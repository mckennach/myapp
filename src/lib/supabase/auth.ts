'use server'

import { Provider } from '@supabase/supabase-js'

import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

import { LoginProps, RegisterFormData } from '@/components/molecules/auth'

export const signIn = async (formData: LoginProps) => {
  'use server'
  const { email, password } = formData || {}
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    return redirect('/login?message=Could not authenticate user')

    // return redirect('/login?message=Could not authenticate user')
  }
  return redirect('/')

  // return redirect('/')
}

export const signUp = async (formData: RegisterFormData) => {
  'use server'

  const origin = headers().get('origin')
  const { email, password, name, username } = formData || {}
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        name,
        username
      }
    }
  })

  if (error) {
    return redirect('/register?message=Could not authenticate user')

    // return redirect('/register?message=Could not authenticate user')
  }
  return redirect('/register?message=Check email to continue sign in process')

  // return redirect('/register?message=Check email to continue sign in process')
}

export const signInWithOAuth = async (provider: Provider) => {
  'use server'
  console.log(provider)
  const origin = headers().get('origin')
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  console.log(origin)
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback?provider=1`
    }
  })

  if (data && data?.url) {
    return redirect(data.url)
  }

  if (error) {
    return redirect('/register?message=Could not authenticate user')
  }
}

export const signOut = async () => {
  'use server'

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  await supabase.auth.signOut()
  return redirect('/login')
}
