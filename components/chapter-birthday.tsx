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
      className="relative flex min-h-full items-center justify-center overflow-hidden bg-ink px-6 py-16 text-background"
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
        className="relative mx-auto max-w-4xl"
        onVisible={() => setCelebrate(true)}
      >
        <div className="relative flex flex-col items-center gap-8 rounded-3xl border border-background/15 bg-background/5 px-6 py-12 text-center shadow-2xl shadow-ink sm:px-12 sm:py-16">
          <div
            className="absolute inset-3 rounded-2xl border border-dashed border-gold/25"
            aria-hidden="true"
          />

          <div className="relative flex items-center gap-4">
            <span className="h-px w-8 bg-gold/60 sm:w-16" aria-hidden="true" />
            <span className="font-mono text-xs font-bold tracking-widest text-gold">
              {bab7.nomor} · {bab7.label} · {bab7.tanggal}
            </span>
            <span className="h-px w-8 bg-gold/60 sm:w-16" aria-hidden="true" />
          </div>

          <h2
            id="bab-7"
            className="relative max-w-3xl font-display text-balance text-4xl font-semibold leading-tight sm:text-6xl"
          >
            {bab7.judul}
          </h2>

          <div className="relative flex max-w-2xl flex-col items-center gap-6 text-pretty leading-relaxed text-background/85">
            <p className="max-w-xl text-lg font-semibold leading-relaxed text-background sm:text-xl">
              {bab7.pesan[0]}
            </p>
            <span className="h-px w-20 bg-primary/70" aria-hidden="true" />
            {bab7.pesan.slice(1).map((paragraf, i) => (
              <p key={i} className="max-w-2xl">
                {paragraf}
              </p>
            ))}
          </div>

          <p className="relative font-hand text-5xl text-primary sm:text-6xl">
            {bab7.tandaTangan}
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
