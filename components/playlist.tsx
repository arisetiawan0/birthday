import { playlist } from '@/lib/content'
import { ScrollReveal } from '@/components/scroll-reveal'

const ACCENTS = ['bg-primary', 'bg-gold', 'bg-teal'] as const
const ACCENT_TEXT = ['text-primary-foreground', 'text-gold-foreground', 'text-teal-foreground'] as const

/** Bagian 9 — Rekomendasi lagu dengan alasan singkat. */
export function Playlist() {
  return (
    <section className="px-6 py-16 sm:py-24" aria-labelledby="playlist">
      <div className="mx-auto max-w-xl">
        <ScrollReveal className="mb-10 text-center">
          <p className="font-hand text-3xl text-primary">dengerin ini ya</p>
          <h2 id="playlist" className="font-display text-balance text-3xl font-semibold text-ink sm:text-4xl">
            {playlist.judul}
          </h2>
          <p className="mt-2 text-muted-foreground">{playlist.subjudul}</p>
        </ScrollReveal>

        <ol className="flex flex-col gap-4">
          {playlist.lagu.map((lagu, i) => (
            <li key={lagu.judul}>
              <ScrollReveal delay={i * 120}>
                <div className="flex items-center gap-4 rounded-xl border-2 border-border bg-card p-4 shadow-[0_4px_14px_rgba(61,38,69,0.08)]">
                  {/* Nomor track ala vinyl */}
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full font-mono text-lg font-bold ${ACCENTS[i % 3]} ${ACCENT_TEXT[i % 3]}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-medium text-ink">
                      {lagu.judul}
                    </h3>
                    <p className="font-mono text-xs tracking-wide text-muted-foreground">
                      {lagu.artis}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {lagu.alasan}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
