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
  config 
}: { 
  children: React.ReactNode;
  config: ChartConfig;  // Make config required since it's used in the chart
}) {
  return (
    <TooltipProvider>
      <div className="h-[350px] w-full">
        {children}
      </div>
    </TooltipProvider>
  )
}

export function ChartTooltip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
    </Tooltip>
  )
}

interface ChartTooltipContentProps {
  hideLabel?: boolean;
}

export function ChartTooltipContent({ hideLabel }: ChartTooltipContentProps) {
  return (
    <TooltipContent>
      {/* Add your tooltip content here */}
    </TooltipContent>
  )
} 