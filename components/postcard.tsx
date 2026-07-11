import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Kartu pos dengan washi tape — frame visual utama tiap bab. */
export function Postcard({
  children,
  className,
  rotate = '-rotate-1',
  tapeColor = 'bg-gold/80',
}: {
  children: ReactNode
  className?: string
  rotate?: string
  tapeColor?: string
}) {
  return (
    <div
      className={cn(
        'relative rounded-lg border-2 border-border bg-card p-6 shadow-[0_10px_30px_rgba(61,38,69,0.12)] sm:p-10',
        rotate,
        className,
      )}
    >
      {/* Washi tape di atas kartu */}
      <span
        aria-hidden="true"
        className={cn('washi -top-3 left-1/2 -translate-x-1/2 -rotate-3 rounded-sm', tapeColor)}
      />
      {/* Border dalam bergaya kartu pos */}
      <div className="pointer-events-none absolute inset-2 rounded-md border border-dashed border-border" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  )
}

/** Label ala stempel pos / paspor. */
export function Postmark({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-block rounded-full border-2 border-teal px-4 py-1 font-mono text-xs font-bold tracking-widest text-teal',
        className,
      )}
    >
      {children}
    </span>
  )
}
