'use client'

import type { ReactNode } from 'react'
import { ArrowDown, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface JourneyStepProps {
  id: string
  children: ReactNode
  nextId: string
  nextLabel: string
  isFinal?: boolean
}

export function JourneyStep({
  id,
  children,
  nextId,
  nextLabel,
  isFinal = false,
}: JourneyStepProps) {
  const goToNextStep = () => {
    document.getElementById(nextId)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
  }

  return (
    <div id={id} className="scroll-mt-4">
      {children}
      <div className="flex justify-center px-6 pb-10 sm:pb-14">
        <Button
          type="button"
          size="lg"
          onClick={goToNextStep}
          aria-label={`${isFinal ? 'Selesaikan perjalanan dan lanjut' : 'Lanjut'} ke ${nextLabel}`}
          className="h-12 rounded-full px-6 font-display text-base shadow-lg transition-transform hover:-translate-y-0.5"
        >
          {isFinal ? <Check data-icon="inline-start" /> : null}
          {isFinal ? 'Selesai' : `Lanjut ke ${nextLabel}`}
          {!isFinal ? <ArrowDown data-icon="inline-end" /> : null}
        </Button>
      </div>
    </div>
  )
}
