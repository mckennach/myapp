'use client'

// import
import { ImperativePanelHandle } from 'react-resizable-panels'

import React from 'react'

import {
  Main,
  MainContainer,
  MainContent,
  MainHost,
  MainResizeObserver,
  MainScrollSpacer,
  MainScrollSpacerChild,
  MainUnderView,
  MainViewport
} from '@/atoms/main-containers'
import { ResizablePanel } from '@/atoms/resizable'

import { Header } from './header'

import { PanelProps } from '@/types/ui.ds'

interface MainProps {
  children: React.ReactNode
  className?: string
}

const MainView = React.forwardRef<ImperativePanelHandle, PanelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ResizablePanel ref={ref} className='relative' {...props}>
        <Main>
          <MainContainer className='main-view-container'>
            <MainUnderView />
            <MainHost>
              <MainResizeObserver />
              <MainContainer className='main-view-container__padding'>
                <MainViewport className='overflow-y-scroll'>
                  <MainContent>
                    {/* <MainScrollSpacer /> */}
                    <MainScrollSpacerChild>
                      <main tabIndex={-1} aria-label='Main Content :)'>
                        {children}
                      </main>
                    </MainScrollSpacerChild>
                  </MainContent>
                </MainViewport>
              </MainContainer>
            </MainHost>
          </MainContainer>
        </Main>
      </ResizablePanel>
    )
  }
)

MainView.displayName = 'MainView'

export { MainView }
