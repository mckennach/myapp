import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form'

import { cn } from '@/lib/utils'

import { Search } from 'lucide-react'

import { Button } from '@/components/atoms/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/atoms/form'
import { Input } from '@/components/atoms/input'

interface SearchProps {
  query: ''
}
interface SearchBarProps extends React.HTMLAttributes<HTMLFormElement> {}

const SearchBar = React.forwardRef<HTMLFormElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    const methods = useForm<SearchProps>({
      defaultValues: {
        query: ''
      }
    })
    const {
      register,
      handleSubmit,
      resetField,
      control,
      formState: { errors }
    } = methods

    const onSubmit: SubmitHandler<SearchProps> = async (formData) => {
      console.log(formData)
    }

    return (
      <FormProvider {...methods}>
        <form ref={ref} {...props} className={cn(`w-full`, className)}>
          <FormField
            control={methods.control}
            name='query'
            render={() => (
              <FormItem className='relative space-y-0'>
                <FormLabel className='sr-only'>Email</FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      'pl-9',
                      'rounded-full bg-tinted-base !mt-0 h-8'
                    )}
                    type='email'
                    placeholder='Search'
                    {...register('query', {
                      required: true
                    })}
                  />
                </FormControl>
                <Search
                  className='absolute top-1/2 left-3 transform -translate-y-1/2 text-subdued'
                  size={18}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </FormProvider>
    )
  }
)

SearchBar.displayName = 'SearchBar'

export { SearchBar }
