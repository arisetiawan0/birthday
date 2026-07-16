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
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 text-center sm:gap-5"
        onVisible={() => setCelebrate(true)}
      >
        <span className="font-mono text-xs font-bold tracking-widest text-gold">
          {bab7.nomor} · {bab7.label} · {bab7.tanggal}
        </span>

        <h2 id="bab-7" className="font-display text-balance text-4xl font-semibold sm:text-5xl">
          {bab7.judul}
        </h2>

        <div className="flex max-w-lg flex-col gap-3 text-pretty text-sm leading-relaxed text-background/85 sm:text-base">
          {bab7.pesan.map((paragraf, i) => (
            <p key={i}>{paragraf}</p>
          ))}
        </div>

        <p className="font-hand text-3xl text-primary sm:text-4xl">{bab7.tandaTangan}</p>
      </ScrollReveal>
    </section>
  )
}
