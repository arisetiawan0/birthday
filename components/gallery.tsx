import { galeri } from '@/lib/content'
import { ScrollReveal } from '@/components/scroll-reveal'

const ROTATIONS = [
  '-rotate-2',
  'rotate-1',
  'rotate-2',
  '-rotate-1',
  'rotate-1',
  '-rotate-2',
  '-rotate-1',
  'rotate-2',
]

/** FR4 — Galeri polaroid, 8 slot. Ganti foto di lib/content.ts */
export function Gallery() {
  return (
    <section className="paper-texture px-6 py-16 sm:py-24" aria-labelledby="galeri">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal className="mb-10 text-center">
          <p className="font-hand text-3xl text-teal">kenangan kita</p>
          <h2 id="galeri" className="font-display text-balance text-3xl font-semibold text-ink sm:text-4xl">
            {galeri.judul}
          </h2>
          <p className="mt-2 text-muted-foreground">{galeri.subjudul}</p>
        </ScrollReveal>

        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
          {galeri.foto.map((foto, i) => {
            const isFeatured = i === 0
            return (
              <li key={foto.src} className={isFeatured ? 'col-span-2 row-span-2' : ''}>
                <ScrollReveal delay={(i % 4) * 100}>
                  <figure
                    className={`bg-card border border-border p-2 pb-1 shadow-[0_6px_18px_rgba(61,38,69,0.14)] transition-transform duration-300 hover:scale-105 hover:rotate-0 ${ROTATIONS[i % ROTATIONS.length]}`}
                  >
                    {isFeatured ? (
                      <div className="relative w-full overflow-hidden rounded-sm bg-black">
                        <img
                          src={foto.src}
                          alt={foto.caption}
                          className="w-full object-contain"
                          style={{ maxHeight: '520px' }}
                          loading="eager"
                        />
                      </div>
                    ) : (
                      <img
                        src={foto.src || '/placeholder.svg'}
                        alt={foto.caption}
                        className="aspect-square w-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <figcaption className={`py-2 text-center font-hand text-ink ${isFeatured ? 'text-xl' : 'text-lg'}`}>
                      {foto.caption}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
