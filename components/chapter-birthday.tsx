'use client'

import { useState } from 'react'
import { bab7 } from '@/lib/content'
import { ScrollReveal } from '@/components/scroll-reveal'

const CONFETTI_COLORS = ['#FF6B5D', '#FFC145', '#8FD9C4', '#1A8FA3', '#FFF6E9']
const CONFETTI_COUNT = 40
const BALLOON_COLORS = ['#FF6B5D', '#FFC145', '#8FD9C4']

/**
 * Bab 7 — Hari ini (28 Juli).
 * FR3: confetti + balon otomatis muncul saat section terlihat di layar.
 */
export function ChapterBirthday() {
  const [celebrate, setCelebrate] = useState(false)

  return (
    <section
      className="relative flex min-h-full items-center overflow-hidden bg-ink px-6 py-10 text-background sm:py-12"
      aria-labelledby="bab-7"
    >
      {/* Confetti */}
      {celebrate && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
            <span
              key={`c-${i}`}
              className="confetti-piece absolute top-0 block rounded-[2px]"
              style={{
                left: `${(i * 97) % 100}%`,
                width: i % 3 === 0 ? '10px' : '7px',
                height: i % 2 === 0 ? '14px' : '9px',
                backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                ['--dur' as string]: `${3.5 + (i % 5) * 0.8}s`,
                ['--delay' as string]: `${(i % 10) * 0.45}s`,
              }}
            />
          ))}
          {/* Balon */}
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={`b-${i}`}
              className="balloon absolute bottom-0 block"
              style={{
                left: `${8 + i * 16}%`,
                ['--dur' as string]: `${10 + i * 2}s`,
                ['--delay' as string]: `${i * 1.4}s`,
              }}
            >
              <svg viewBox="0 0 40 60" className="w-9 sm:w-12">
                <ellipse cx="20" cy="18" rx="14" ry="17" fill={BALLOON_COLORS[i % 3]} />
                <path d="M20 35 q-3 8 2 14 q4 6 -1 10" stroke={BALLOON_COLORS[i % 3]} strokeWidth="1.5" fill="none" opacity="0.7" />
                <path d="M17 36 l3 -2 l3 2 l-3 3 z" fill={BALLOON_COLORS[i % 3]} />
              </svg>
            </span>
          ))}
        </div>
      )}

      <ScrollReveal
        className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        onVisible={() => setCelebrate(true)}
      >
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <span className="font-mono text-xs font-bold tracking-widest text-gold">
            {bab7.nomor} · {bab7.label} · {bab7.tanggal}
          </span>

          <h2
            id="bab-7"
            className="max-w-lg font-display text-balance text-5xl font-semibold leading-tight sm:text-6xl"
          >
            {bab7.judul}
          </h2>

          <div className="h-1 w-20 rounded-full bg-primary" aria-hidden="true" />
          <p className="max-w-md text-pretty text-base leading-relaxed text-background/80 sm:text-lg">
            {bab7.pesan[0]}
          </p>
        </div>

        <div className="flex flex-col gap-5 border-l-2 border-gold/50 pl-6 sm:pl-8">
          <div className="flex flex-col gap-4 text-pretty text-base leading-relaxed text-background/85 sm:text-lg">
            {bab7.pesan.slice(1).map((paragraf, i) => (
              <p key={i}>{paragraf}</p>
            ))}
          </div>

          <p className="self-end pr-6 font-hand text-4xl text-primary sm:text-5xl">
            {bab7.tandaTangan}
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
