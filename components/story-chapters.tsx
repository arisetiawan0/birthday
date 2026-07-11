import { bab1, bab2, bab5, bab6 } from '@/lib/content'
import { Postcard, Postmark } from '@/components/postcard'
import { ScrollReveal } from '@/components/scroll-reveal'

function ChapterHeading({
  nomor,
  label,
  judul,
}: {
  nomor: string
  label: string
  judul: string
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold tracking-widest text-primary">{nomor}</span>
        <Postmark>{label}</Postmark>
      </div>
      <h2 className="font-display text-balance text-3xl font-semibold text-ink sm:text-4xl">
        {judul}
      </h2>
    </div>
  )
}

/** Bab 1 — Pertemuan */
export function ChapterMeeting() {
  return (
    <section className="px-6 py-16 sm:py-24" aria-labelledby="bab-1">
      <ScrollReveal className="mx-auto max-w-xl">
        <Postcard rotate="-rotate-1" tapeColor="bg-gold/80">
          <span id="bab-1" className="sr-only">{bab1.judul}</span>
          <ChapterHeading nomor={bab1.nomor} label={bab1.label} judul={bab1.judul} />
          <p className="mt-4 leading-relaxed text-muted-foreground">{bab1.isi}</p>
          {bab1.kutipan && (
            <p className="mt-5 font-hand text-2xl text-primary">{bab1.kutipan}</p>
          )}
        </Postcard>
      </ScrollReveal>
    </section>
  )
}

/** Bab 2 — Lost contact & reconnect */
export function ChapterReconnect() {
  return (
    <section className="px-6 py-16 sm:py-24" aria-labelledby="bab-2">
      <ScrollReveal className="mx-auto max-w-xl" delay={100}>
        <Postcard rotate="rotate-1" tapeColor="bg-mint">
          <span id="bab-2" className="sr-only">{bab2.judul}</span>
          <ChapterHeading nomor={bab2.nomor} label={bab2.label} judul={bab2.judul} />
          <p className="mt-4 leading-relaxed text-muted-foreground">{bab2.isi}</p>
          {bab2.kutipan && (
            <p className="mt-5 font-hand text-2xl text-teal">{bab2.kutipan}</p>
          )}
        </Postcard>
      </ScrollReveal>
    </section>
  )
}

/** Bab 5 — Wisuda & pindah (badge list) */
export function ChapterGraduation() {
  return (
    <section className="px-6 py-16 sm:py-24" aria-labelledby="bab-5">
      <ScrollReveal className="mx-auto max-w-xl">
        <Postcard rotate="-rotate-1" tapeColor="bg-gold/80">
          <span id="bab-5" className="sr-only">{bab5.judul}</span>
          <ChapterHeading nomor={bab5.nomor} label={bab5.label} judul={bab5.judul} />
          <p className="mt-4 leading-relaxed text-muted-foreground">{bab5.isi}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {bab5.badges.map((badge, i) => (
              <li
                key={badge}
                className={
                  i % 2 === 0
                    ? 'rounded-full bg-gold px-4 py-1.5 font-mono text-xs font-bold text-gold-foreground'
                    : 'rounded-full bg-teal px-4 py-1.5 font-mono text-xs font-bold text-teal-foreground'
                }
              >
                {badge}
              </li>
            ))}
          </ul>
        </Postcard>
      </ScrollReveal>
    </section>
  )
}

/** Bab 6 — Suka duka (ikon hati) */
export function ChapterUpsAndDowns() {
  return (
    <section className="px-6 py-16 sm:py-24" aria-labelledby="bab-6">
      <ScrollReveal className="mx-auto max-w-xl" delay={100}>
        <Postcard rotate="rotate-1" tapeColor="bg-primary/70">
          <span id="bab-6" className="sr-only">{bab6.judul}</span>
          <div className="flex items-start justify-between gap-4">
            <ChapterHeading nomor={bab6.nomor} label={bab6.label} judul={bab6.judul} />
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animate-pulse-heart mt-1 size-9 shrink-0 text-primary"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">{bab6.isi}</p>
          {bab6.kutipan && (
            <p className="mt-5 font-hand text-2xl text-primary">{bab6.kutipan}</p>
          )}
        </Postcard>
      </ScrollReveal>
    </section>
  )
}
