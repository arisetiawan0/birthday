import { galeri } from '@/lib/content'
import { ScrollReveal } from '@/components/scroll-reveal'

const ROTATIONS = [
  '-rotate-1',
  'rotate-1',
  'rotate-2',
  '-rotate-2',
  'rotate-1',
  '-rotate-1',
]

const PORTRAIT_INDICES = new Set([4, 7, 10, 13])

/** FR4 — Galeri polaroid. Foto dan caption dikelola di lib/content.ts */
export function Gallery() {
  return (
    <section className="paper-texture overflow-hidden px-4 py-16 sm:px-6 sm:py-24" aria-labelledby="galeri">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <span className="mb-4 h-1 w-12 rounded-full bg-primary" aria-hidden="true" />
          <p className="font-hand text-3xl text-teal">kenangan kita</p>
          <h2 id="galeri" className="font-display text-balance text-4xl font-semibold text-ink sm:text-5xl">
            {galeri.judul}
          </h2>
          <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {galeri.subjudul}
          </p>
        </ScrollReveal>

        <ul className="grid auto-flow-dense grid-cols-2 items-start gap-4 sm:grid-cols-4 sm:gap-6">
          {galeri.foto.map((foto, i) => {
            const isFeatured = i === 0
            const isWide = i === 5 || i === 11
            const isPortrait = PORTRAIT_INDICES.has(i)
            const itemClass = isFeatured
              ? 'col-span-2 row-span-2'
              : isWide
                ? 'col-span-2'
                : ''

            return (
              <li key={foto.src} className={itemClass}>
                <ScrollReveal delay={(i % 4) * 80}>
                  <figure
                    className={`group relative border border-border bg-card p-2 pb-1 shadow-[0_8px_24px_rgba(61,38,69,0.12)] transition duration-300 hover:scale-[1.02] hover:rotate-0 hover:shadow-[0_14px_32px_rgba(61,38,69,0.18)] sm:p-3 sm:pb-2 ${ROTATIONS[i % ROTATIONS.length]}`}
                  >
                    <span
                      className="absolute left-1/2 top-0 h-5 w-16 -translate-x-1/2 -translate-y-1/2 rotate-1 bg-gold/70 shadow-sm sm:h-6 sm:w-20"
                      aria-hidden="true"
                    />
                    <div className="overflow-hidden rounded-sm bg-muted">
                      <img
                        src={foto.src || '/placeholder.svg'}
                        alt={foto.caption}
                        className={
                          isFeatured
                            ? 'aspect-[16/10] w-full object-contain'
                            : isWide
                              ? 'aspect-[16/9] w-full object-cover'
                              : isPortrait
                                ? 'aspect-[4/5] w-full object-cover'
                                : 'aspect-square w-full object-cover'
                        }
                        loading={isFeatured ? 'eager' : 'lazy'}
                      />
                    </div>
                    <figcaption className={`px-1 py-3 text-center font-hand leading-tight text-ink ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
                      {foto.caption}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              </li>
            )
          })}
        </ul>

        <ScrollReveal className="mt-14 flex items-center justify-center gap-4 text-center sm:mt-20">
          <span className="h-px w-12 bg-border sm:w-24" aria-hidden="true" />
          <p className="font-hand text-2xl text-primary">dan masih banyak cerita lainnya</p>
          <span className="h-px w-12 bg-border sm:w-24" aria-hidden="true" />
        </ScrollReveal>
      </div>
    </section>
  )
}
