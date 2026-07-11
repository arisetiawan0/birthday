import { bab4, site } from '@/lib/content'
import { Postmark } from '@/components/postcard'
import { ScrollReveal } from '@/components/scroll-reveal'

/**
 * Bab 4 — LDR Jogja–Kendari.
 * FR2: pesawat kertas terbang mengikuti jalur SVG putus-putus
 * menggunakan CSS offset-path, looping otomatis.
 */

const FLIGHT_PATH = 'M 30 150 C 150 20, 330 20, 450 150'

export function ChapterLDR() {
  return (
    <section
      className="relative overflow-hidden bg-teal px-6 py-20 text-teal-foreground sm:py-28"
      aria-labelledby="bab-4"
    >
      <ScrollReveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs font-bold tracking-widest opacity-90">
          {bab4.nomor} · {bab4.label}
        </span>

        <h2 id="bab-4" className="font-display text-balance text-4xl font-semibold sm:text-5xl">
          {bab4.judul}
        </h2>

        {/* Peta penerbangan */}
        <div className="relative w-full max-w-lg" role="img" aria-label={`Pesawat kertas terbang dari ${site.kotaAsal} ke ${site.kotaTujuan}`}>
          <svg viewBox="0 0 480 190" className="w-full" aria-hidden="true">
            {/* Jalur putus-putus */}
            <path
              d={FLIGHT_PATH}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
              opacity="0.7"
            />
            {/* Titik kota */}
            <circle cx="30" cy="150" r="7" fill="var(--gold)" />
            <circle cx="450" cy="150" r="7" fill="var(--primary)" />
          </svg>

          {/* Pesawat kertas mengikuti jalur (offset-path) */}
          <div
            aria-hidden="true"
            className="paper-plane absolute inset-0"
            style={{
              offsetPath: `path('${FLIGHT_PATH}')`,
              width: 'fit-content',
              height: 'fit-content',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="var(--background)"
              stroke="var(--ink)"
              strokeWidth="1"
              className="size-7 rotate-45 drop-shadow-md sm:size-9"
            >
              <path d="M22 2 11 13" fill="none" strokeLinecap="round" />
              <path d="M22 2 15 22l-4-9-9-4 20-7z" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Label kota */}
          <div className="mt-1 flex justify-between px-1">
            <Postmark className="border-gold text-gold">{site.kotaAsal.toUpperCase()}</Postmark>
            <span className="font-mono text-xs font-bold tracking-widest opacity-80">{bab4.jarak}</span>
            <Postmark className="border-background text-background">{site.kotaTujuan.toUpperCase()}</Postmark>
          </div>
        </div>

        <p className="max-w-md text-pretty leading-relaxed opacity-95">{bab4.isi}</p>
      </ScrollReveal>
    </section>
  )
}
