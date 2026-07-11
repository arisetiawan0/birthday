'use client'

import { useState } from 'react'
import { bab3 } from '@/lib/content'
import { ScrollReveal } from '@/components/scroll-reveal'

/** Bab 3 — Jadian. Full-color coral dengan "stempel" tanggal besar. */
export function ChapterOfficial() {
  const [stamped, setStamped] = useState(false)

  return (
    <section
      className="relative overflow-hidden bg-primary px-6 py-20 text-primary-foreground sm:py-28"
      aria-labelledby="bab-3"
    >
      {/* Garis tepi ala amplop pos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-[repeating-linear-gradient(45deg,var(--gold)_0_12px,transparent_12px_24px,var(--teal)_24px_36px,transparent_36px_48px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-[repeating-linear-gradient(45deg,var(--gold)_0_12px,transparent_12px_24px,var(--teal)_24px_36px,transparent_36px_48px)]"
      />

      <ScrollReveal
        className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        onVisible={() => setStamped(true)}
      >
        <span className="font-mono text-xs font-bold tracking-widest opacity-90">
          {bab3.nomor} · {bab3.label}
        </span>

        <h2 id="bab-3" className="font-display text-balance text-4xl font-semibold sm:text-6xl">
          {bab3.judul}
        </h2>

        {/* Stempel tanggal besar */}
        <div
          className={`my-2 rounded-lg border-4 border-double border-primary-foreground/90 px-6 py-4 font-mono text-2xl font-bold tracking-widest sm:px-10 sm:text-4xl ${
            stamped ? 'stamp-visible' : 'opacity-0'
          }`}
        >
          {bab3.tanggal}
        </div>

        <p className="max-w-md text-pretty leading-relaxed opacity-95">{bab3.isi}</p>
      </ScrollReveal>
    </section>
  )
}
