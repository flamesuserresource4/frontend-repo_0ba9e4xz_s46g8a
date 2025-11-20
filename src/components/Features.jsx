import React from 'react'
import { Mic, MessageSquare, Volume2, Bot, Wand2, Heart, Sparkles, Settings } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Floating Pet Overlay',
    desc: 'Lives above other apps using a safe, battery-friendly overlay. Drag, tap, long-press for options.'
  },
  {
    icon: MessageSquare,
    title: 'Chat Window',
    desc: 'Clean Compose UI with text + voice chat, quick actions, and emotion-aware responses.'
  },
  {
    icon: Mic,
    title: 'Offline STT',
    desc: 'Uses Vosk for fully offline speech-to-text. Whisper small optional. No internet required.'
  },
  {
    icon: Volume2,
    title: 'Natural TTS',
    desc: 'Google TTS fallback with expressive settings. Speaks replies with warmth and clarity.'
  },
  {
    icon: Wand2,
    title: 'Hybrid AI',
    desc: 'Local Llama.cpp for fast, private replies; cloud LLM for deep tasks when available.'
  },
  {
    icon: Heart,
    title: 'Emotions & Personality',
    desc: 'Idle, happy, sad, thinking states via Lottie/sprites. Reacts to tone and context.'
  },
  {
    icon: Sparkles,
    title: 'Utilities',
    desc: 'Reminders, notes, summaries, time info, and quick actions — all private by default.'
  },
  {
    icon: Settings,
    title: 'Customization',
    desc: 'Skins, color, and persona. Stores preferences securely with Room + Keystore.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Core Capabilities</h2>
        <p className="mt-3 text-blue-100/80">Designed for privacy, presence, and playful utility</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-300 group-hover:bg-blue-500/20">
              <f.icon size={22} />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-white">{f.title}</h3>
            <p className="text-sm text-blue-100/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
