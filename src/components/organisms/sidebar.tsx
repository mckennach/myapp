'use client'

import { ImperativePanelHandle } from 'react-resizable-panels'
import { useElementSize } from 'usehooks-ts'

import { useEffect, useRef, useState } from 'react'

import { useAtom } from 'jotai'

// import { Panel } from 'react-resizable-panels'
import { sideBarLeftCollapsedAtom } from '@/lib/store'

import { cn } from '@/lib/utils'

import { ResizableHandle, ResizablePanel } from '@/atoms/resizable'

import { SidebarNavigation } from '../molecules/sidebar/navigation'

import { PanelProps } from '@/types/ui.ds'

interface SidebarProps extends PanelProps {
  side: 'left' | 'right'
  minSize: number
}

interface Panel extends ImperativePanelHandle {}
interface Panel extends HTMLDivElement {}

const SidebarView = ({ className, side, minSize, ...props }: SidebarProps) => {
  const [sideBarLeftCollapsed, setSidebarLeftCollaposed] = useAtom(
    sideBarLeftCollapsedAtom
  )
  const [isResizing, setIsResizing] = useState(false)
  const [squareRef, { width, height }] = useElementSize()
  const panelRef = useRef<ImperativePanelHandle>(null)

  useEffect(() => {
    if (isResizing) {
      setTimeout(() => {
        setIsResizing(false)
      }, 100)
    }
    document.documentElement.style.setProperty(
      '--left-sidebar-width',
      `${width}px`
    )
  }, [isResizing, width])

  useEffect(() => {
    console.log('sidebar', sideBarLeftCollapsed)
    if (sideBarLeftCollapsed) {
      panelRef.current?.collapse()
    } else {
      panelRef.current?.expand()
    }
  }, [sideBarLeftCollapsed, panelRef])

  return (
    <>
      <ResizablePanel
        {...props}
        ref={panelRef}
        minSize={minSize}
        onCollapse={() => setSidebarLeftCollaposed(true)}
        onExpand={() => setSidebarLeftCollaposed(false)}
        onResize={() => setIsResizing(true)}
        className={cn(`overflow-hidden`, className)}
      >
        <aside
          ref={squareRef}
          className={cn(
            `flex h-full flex-col items-center justify-between gap-2 overflow-hidden`
          )}
        >
          {/* <SidebarNavigation /> */}
        </aside>
      </ResizablePanel>
      <ResizableHandle className='mr-1 bg-tinted-higlight hover:bg-tinted-higlight-2' />
    </>
  )
}

SidebarView.displayName = 'SidebarView'

export { SidebarView }
