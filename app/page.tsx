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
import { JourneyStep } from '@/components/journey-step'

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
        <JourneyStep id="step-bab-1" nextId="step-bab-2" nextLabel="Bab 2">
          <ChapterMeeting />
        </JourneyStep>
        <JourneyStep id="step-bab-2" nextId="step-bab-3" nextLabel="Bab 3">
          <ChapterReconnect />
        </JourneyStep>
        <JourneyStep id="step-bab-3" nextId="step-bab-4" nextLabel="Bab 4">
          <ChapterOfficial />
        </JourneyStep>
        <JourneyStep id="step-bab-4" nextId="step-bab-5" nextLabel="Bab 5">
          <ChapterLDR />
        </JourneyStep>
        <JourneyStep id="step-bab-5" nextId="step-bab-6" nextLabel="Bab 6">
          <ChapterGraduation />
        </JourneyStep>
        <JourneyStep id="step-bab-6" nextId="step-bab-7" nextLabel="Bab 7">
          <ChapterUpsAndDowns />
        </JourneyStep>
        <JourneyStep
          id="step-bab-7"
          nextId="step-gallery"
          nextLabel="Galeri Kenangan"
          immersive
        >
          <ChapterBirthday />
        </JourneyStep>
        <JourneyStep id="step-gallery" nextId="step-playlist" nextLabel="Playlist">
          <Gallery />
        </JourneyStep>
        <JourneyStep
          id="step-playlist"
          nextId="journey-end"
          nextLabel="akhir perjalanan"
          isFinal
        >
          <Playlist />
        </JourneyStep>
      </main>

      <div id="journey-end" className="scroll-mt-4">
        <SiteFooter />
      </div>
      <AudioPlayer ref={audioRef} />
    </>
  )
}
