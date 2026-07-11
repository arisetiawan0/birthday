'use client'

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { audio } from '@/lib/content'

export type AudioPlayerHandle = {
  play: () => void
}

/**
 * FR7 — Audio player lagu latar.
 * Tombol kecil selalu terlihat di pojok kanan bawah (pause/mute gampang).
 * Play pertama kali dipicu dari tombol CTA di hero (batasan autoplay browser).
 * Kalau file /public/audio/lagu-latar.mp3 belum ada, player menampilkan
 * status "lagu belum dipasang" tanpa merusak halaman.
 */
export const AudioPlayer = forwardRef<AudioPlayerHandle>(function AudioPlayer(_, ref) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current?.play().catch(() => {
        // Autoplay diblokir atau file belum ada — biarkan user tap tombol.
      })
    },
  }))

  const toggle = () => {
    const el = audioRef.current
    if (!el || missing) return
    if (el.paused) {
      el.play().catch(() => setMissing(true))
    } else {
      el.pause()
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={audio.src}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setMissing(true)}
      >
        <track kind="captions" />
      </audio>

      <button
        type="button"
        onClick={toggle}
        aria-label={
          missing
            ? 'Lagu latar belum dipasang'
            : playing
              ? `Jeda lagu ${audio.judulLagu}`
              : `Putar lagu ${audio.judulLagu}`
        }
        title={missing ? 'Taruh file lagu di /public/audio/lagu-latar.mp3' : audio.judulLagu}
        className="fixed bottom-5 right-5 z-50 flex size-12 items-center justify-center rounded-full border-2 border-border bg-card text-ink shadow-[0_6px_16px_rgba(61,38,69,0.2)] transition-transform hover:scale-110 active:scale-95 disabled:opacity-50"
        disabled={missing}
      >
        {missing ? (
          // Ikon musik dicoret — file belum ada
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-5 opacity-50" aria-hidden="true">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
            <path d="M3 3l18 18" />
          </svg>
        ) : playing ? (
          // Ikon pause
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          // Ikon play
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 translate-x-0.5" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  )
})
