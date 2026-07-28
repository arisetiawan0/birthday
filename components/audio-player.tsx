'use client'

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { audio, playlist } from '@/lib/content'

export type AudioPlayerHandle = {
  play: () => void
}

export const AudioPlayer = forwardRef<AudioPlayerHandle>(function AudioPlayer(_, ref) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)

  const tracks = playlist.lagu
  const currentTrack = tracks[trackIndex]

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current?.play().catch(() => {})
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

  const nextTrack = () => {
    const el = audioRef.current
    const next = (trackIndex + 1) % tracks.length
    setTrackIndex(next)
    setMissing(false)
    if (el) {
      el.pause()
      el.load()
      el.play().catch(() => {})
    }
  }

  const prevTrack = () => {
    const el = audioRef.current
    const prev = (trackIndex - 1 + tracks.length) % tracks.length
    setTrackIndex(prev)
    setMissing(false)
    if (el) {
      el.pause()
      el.load()
      el.play().catch(() => {})
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack?.src ?? audio.src}
        loop={false}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setMissing(true)}
        onEnded={nextTrack}
      >
        <track kind="captions" />
      </audio>

      {/* Player bar — pojok kanan bawah */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 shadow-[0_6px_20px_rgba(61,38,69,0.18)]">
        {/* Info lagu */}
        {!missing && (
          <div className="hidden max-w-[140px] flex-col sm:flex">
            <span className="truncate font-display text-xs font-semibold leading-tight text-ink">
              {currentTrack?.judul ?? audio.judulLagu}
            </span>
            <span className="truncate font-mono text-[10px] text-muted-foreground">
              {currentTrack?.artis}
            </span>
          </div>
        )}

        {/* Prev */}
        <button
          type="button"
          onClick={prevTrack}
          aria-label="Lagu sebelumnya"
          disabled={missing}
          className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition hover:text-ink disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
            <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
          </svg>
        </button>

        {/* Play / Pause */}
        <button
          type="button"
          onClick={toggle}
          aria-label={
            missing
              ? 'Lagu tidak tersedia'
              : playing
                ? `Jeda ${currentTrack?.judul}`
                : `Putar ${currentTrack?.judul}`
          }
          disabled={missing}
          className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow transition hover:scale-105 active:scale-95 disabled:opacity-40"
        >
          {missing ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4 opacity-60" aria-hidden="true">
              <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /><path d="M3 3l18 18" />
            </svg>
          ) : playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 translate-x-0.5" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextTrack}
          aria-label="Lagu berikutnya"
          disabled={missing}
          className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition hover:text-ink disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
            <path d="M6 18l8.5-6L6 6v12zm2.5-6 8.5 6V6z" />
          </svg>
        </button>
      </div>
    </>
  )
})
