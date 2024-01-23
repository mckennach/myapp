import Link from 'next/link'

import { AlertCircle, MailCheck } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/atoms/alert'
import { TextDivider } from '@/components/atoms/text-divider'
import { ProviderButtons, RegisterForm } from '@/components/molecules/auth'

export default function Register({
  searchParams
}: {
  searchParams: { message: string }
}) {
  return (
    <div className='text-base-content mx-auto w-full max-w-md space-y-4'>
      <div className='mb-8 space-y-2'>
        <h1 className='text-center text-3xl font-semibold'>Login</h1>

        <p className='text-center text-sm'>
          By continuing, you agree to our{' '}
          <Link
            href='/policies/user-agreement'
            className='text-primary hover:text-primary/70'
          >
            User Agreement
          </Link>{' '}
          and acknowledge that you understand the{' '}
          <Link
            href='/policies/privacy-policy'
            className='text-primary hover:text-primary/70'
          >
            Privacy Policy.
          </Link>
        </p>
      </div>
      <ProviderButtons />
      <TextDivider />
      <RegisterForm />
      {searchParams?.message && (
        <Alert
          className='mt-4'
          variant={
            searchParams?.message === 'Check email to continue sign in process'
              ? 'default'
              : 'destructive'
          }
        >
          {searchParams?.message ===
          'Check email to continue sign in process' ? (
            <MailCheck className='w-4 h-4' />
          ) : (
            <AlertCircle className='w-4 h-4' />
          )}
          <AlertCircle className='w-4 h-4' />
          <AlertTitle>
            {searchParams?.message === 'Check email to continue sign in process'
              ? 'Success!'
              : 'Error'}
          </AlertTitle>
          <AlertDescription>{searchParams.message}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}
