import React from 'react'

export default function Plan() {
  const phases = [
    {
      title: 'Phase 1 — Core Build',
      items: [
        'Floating overlay with WindowManager (draggable, tappable)',
        'Compose chat window toggled by tapping pet',
        'Dummy local AI module for quick replies',
        'Vosk STT + Google TTS integration',
      ],
      weeks: 'Weeks 1–2'
    },
    {
      title: 'Phase 2 — AI Integration',
      items: [
        'Local LLM via Llama.cpp + cloud LLM fallback',
        'Intent utilities: reminders, notes, summaries',
        'Emotion states: idle, happy, sad, thinking (Lottie)'
      ],
      weeks: 'Weeks 3–4'
    },
    {
      title: 'Phase 3 — Personality',
      items: [
        'Pet customization: skins, color, persona',
        'Emotion engine reacting to tone/sentiment',
        'Secure storage: Room + Keystore'
      ],
      weeks: 'Weeks 5–6'
    },
    {
      title: 'Phase 4 — Optimization',
      items: [
        'Smooth animations, low idle battery',
        'Robust offline mode and fallbacks',
        'Internal testing build (APK)'
      ],
      weeks: 'Weeks 7–8'
    }
  ]

  return (
    <section id="plan" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Build Plan</h2>
        <p className="mt-2 text-blue-100/80">Milestones toward a playful, private AI companion</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {phases.map((p, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <span className="rounded-md bg-blue-500/10 px-3 py-1 text-xs text-blue-200">{p.weeks}</span>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-blue-100/90">
              {p.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
