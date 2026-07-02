import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8 p-6">
      <section className="flex flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-4">
          <img src={heroImg} className="w-32 h-auto" width="170" height="179" alt="" />
          <img src={reactLogo} className="w-16 h-auto" alt="React logo" />
          <img src={viteLogo} className="w-16 h-auto" alt="Vite logo" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl text-red-500 font-bold">Get started</h1>
          <p className="mt-2 text-gray-600">
            Edit <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="w-full max-w-2xl h-px bg-gray-300" />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <svg className="w-8 h-8 text-gray-500 mb-3" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="text-lg font-semibold text-gray-900">Documentation</h2>
          <p className="text-sm text-gray-500 mb-4">Your questions, answered</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                <img className="w-5 h-5" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                <img className="w-5 h-5" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <svg className="w-8 h-8 text-gray-500 mb-3" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="text-lg font-semibold text-gray-900">Connect with us</h2>
          <p className="text-sm text-gray-500 mb-4">Join the Vite community</p>
          <ul className="space-y-2">
            {[
              { href: "https://github.com/vitejs/vite", label: "GitHub", icon: "github-icon" },
              { href: "https://chat.vite.dev/", label: "Discord", icon: "discord-icon" },
              { href: "https://x.com/vite_js", label: "X.com", icon: "x-icon" },
              { href: "https://bsky.app/profile/vite.dev", label: "Bluesky", icon: "bluesky-icon" },
            ].map(({ href, label, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  <svg className="w-5 h-5" role="presentation" aria-hidden="true">
                    <use href={`/icons.svg#${icon}`}></use>
                  </svg>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App
