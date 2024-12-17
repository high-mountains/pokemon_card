'use client'

import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

export function ChartContainer({ 
  children, 
}: { 
  children: React.ReactNode;
  config?: ChartConfig;  // Make config optional
}) {
  return (
    <div className="h-[350px] w-full">
      {children}
    </div>
  )
}

export function ChartTooltip({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
}

export function ChartTooltipContent() {
  return (
    <TooltipContent>
    </TooltipContent>
  )
} 