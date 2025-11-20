import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Plan from './components/Plan'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Features />
      <Plan />
      <footer className="relative z-10 border-t border-white/10 bg-white/5 py-8 text-center text-blue-200">
        Designed for Android • Kotlin • Jetpack Compose • Offline-first
      </footer>
    </div>
  )
}

export default App
