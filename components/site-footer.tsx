import { footer } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-dashed border-border px-6 py-10 text-center">
      <p className="font-hand text-2xl text-ink">{footer.teks}</p>
      <p className="mt-2 font-mono text-xs tracking-widest text-muted-foreground">
        {footer.tahun} · DIKIRIM VIA POS UDARA
      </p>
    </footer>
  )
}
