import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 backdrop-blur">
          New • AI Companion
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          ShimiAI — Your Floating, Emotional AI Companion
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-blue-100/90 sm:text-lg">
          A cute always-on-screen helper that listens, talks, and reacts. Offline-first, privacy-safe, and built with Kotlin + Jetpack Compose.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a href="#features" className="inline-flex items-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
            Explore Features
          </a>
          <a href="#plan" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-blue-100 backdrop-blur transition hover:bg-white/10">
            Build Plan
          </a>
        </div>
      </div>
    </section>
  )
}
