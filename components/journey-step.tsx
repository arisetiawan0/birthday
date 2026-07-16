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
  immersive?: boolean
}

export function JourneyStep({
  id,
  children,
  nextId,
  nextLabel,
  isFinal = false,
  immersive = false,
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
    <section
      id={id}
      className={
        immersive
          ? 'relative flex h-svh flex-col overflow-hidden bg-ink'
          : 'flex min-h-svh flex-col'
      }
      aria-label={`Langkah perjalanan menuju ${nextLabel}`}
    >
      <div
        className={
          immersive
            ? 'flex min-h-0 flex-1 items-stretch [&>section]:w-full'
            : 'flex flex-1 items-center [&>section]:w-full'
        }
      >
        {children}
      </div>
      <div
        className={
          immersive
            ? 'absolute inset-x-0 bottom-0 flex justify-center px-6 pb-5'
            : 'flex shrink-0 justify-center px-6 pb-8 sm:pb-10'
        }
      >
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
    </section>
  )
}
