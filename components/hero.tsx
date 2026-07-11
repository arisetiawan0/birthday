'use client'

import { hero, site } from '@/lib/content'
import { Postmark } from '@/components/postcard'

function PaperPlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  )
}

export function Hero({ onStart }: { onStart: () => void }) {
  return (
    <header className="paper-texture relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Floating shapes */}
      <span
        aria-hidden="true"
        className="animate-float-slow absolute top-[12%] left-[8%] size-5 rounded-full bg-gold/70 [--r:10deg]"
      />
      <span
        aria-hidden="true"
        className="animate-float-slow absolute top-[22%] right-[12%] size-4 rounded-full bg-mint [--r:-6deg] [animation-delay:1.2s]"
      />
      <span
        aria-hidden="true"
        className="animate-float-slow absolute bottom-[24%] left-[16%] size-3 rounded-full bg-primary/60 [animation-delay:0.6s]"
      />
      <PaperPlaneIcon className="animate-float-slow absolute top-[16%] right-[22%] size-8 text-teal [--r:-12deg] [animation-delay:2s]" />
      <PaperPlaneIcon className="animate-float-slow absolute bottom-[28%] right-[10%] size-6 text-primary/70 [--r:18deg] [animation-delay:0.9s]" />

      <div className="relative flex max-w-2xl flex-col items-center gap-6">
        <Postmark className="stamp-visible">POS UDARA · {site.tanggalUltah}</Postmark>

        <p className="font-hand text-2xl text-teal sm:text-3xl">{hero.label.toLowerCase()}</p>

        <h1 className="font-display text-balance text-5xl font-semibold leading-tight text-ink sm:text-7xl">
          {hero.judul}
        </h1>

        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground sm:text-lg">
          {hero.subjudul}
        </p>

        <button
          type="button"
          onClick={onStart}
          className="mt-2 rounded-full bg-primary px-8 py-3.5 font-display text-lg font-medium text-primary-foreground shadow-[0_8px_20px_rgba(255,107,93,0.4)] transition-transform hover:scale-105 active:scale-95"
        >
          {hero.cta}
        </button>

        <div className="animate-bob mt-6 text-muted-foreground" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-6">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  )
}
