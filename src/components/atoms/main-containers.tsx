import React, { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Main = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn(`main-container h-full overflow-hidden`, className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Main.displayName = 'Main'

const MainContainer = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div className={cn(``, className)} ref={ref} {...props}>
      {children}
    </div>
  )
})

MainContainer.displayName = 'MainContainer'

const MainHost = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(`main-view-container__host`, className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

MainHost.displayName = 'MainHost'

const MainResizeObserver = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        `main-view-container__resize-observer-host observed`,
        className
      )}
      ref={ref}
      {...props}
    >
      <div
        className='main-view-container__resize-observer'
        style={{
          left: 0,
          right: 'auto'
        }}
      />
    </div>
  )
})

MainResizeObserver.displayName = 'MainResizeObserver'

const MainViewport = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(`main-view-container__viewport`, className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

MainViewport.displayName = 'MainViewport'

const MainContent = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(`main-view-container__content`, className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

MainContent.displayName = 'MainContent'

const MainScrollSpacerChild = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(`main-view-container__scroll-spacer-child`, className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

MainScrollSpacerChild.displayName = 'MainScrollSpacerChild'

const MainUnderView = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(`main-view-container__under-main-view`, className)}
      ref={ref}
      {...props}
    />
  )
})

MainUnderView.displayName = 'MainUnderView'

const MainScrollSpacer = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(`main-view-container__scroll-spacer`, className)}
      ref={ref}
      {...props}
    />
  )
})

MainScrollSpacer.displayName = 'MainScrollSpacer'

export {
  Main,
  MainContainer,
  MainContent,
  MainHost,
  MainResizeObserver,
  MainScrollSpacer,
  MainScrollSpacerChild,
  MainUnderView,
  MainViewport
}
