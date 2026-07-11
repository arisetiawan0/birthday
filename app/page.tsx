'use client'

import { useRef } from 'react'
import { Hero } from '@/components/hero'
import {
  ChapterMeeting,
  ChapterReconnect,
  ChapterGraduation,
  ChapterUpsAndDowns,
} from '@/components/story-chapters'
import { ChapterOfficial } from '@/components/chapter-official'
import { ChapterLDR } from '@/components/chapter-ldr'
import { ChapterBirthday } from '@/components/chapter-birthday'
import { Gallery } from '@/components/gallery'
import { Playlist } from '@/components/playlist'
import { SiteFooter } from '@/components/site-footer'
import { AudioPlayer, type AudioPlayerHandle } from '@/components/audio-player'

export default function Page() {
  const audioRef = useRef<AudioPlayerHandle>(null)
  const storyRef = useRef<HTMLDivElement>(null)

  // Tap pertama di hero = izin autoplay dari browser → mulai lagu + scroll ke bab 1
  const handleStart = () => {
    audioRef.current?.play()
    storyRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero onStart={handleStart} />

      <main ref={storyRef}>
        <ChapterMeeting />
        <ChapterReconnect />
        <ChapterOfficial />
        <ChapterLDR />
        <ChapterGraduation />
        <ChapterUpsAndDowns />
        <ChapterBirthday />
        <Gallery />
        <Playlist />
      </main>

      <SiteFooter />
      <AudioPlayer ref={audioRef} />
    </>
  )
}
