'use client'

import { useState, useEffect } from 'react'

const ACCENTS = [
  { hex: '#2F6BFF', name: 'Electric Blue' },
  { hex: '#00D1FF', name: 'Cyan' },
  { hex: '#7C5CFF', name: 'Violet' },
  { hex: '#FF5E3A', name: 'Orange' },
  { hex: '#14E29C', name: 'Mint' },
  { hex: '#F5F5F5', name: 'Mono' },
]

const FONTS = ['Inter Tight', 'Pretendard Variable']

export default function Tweaks() {
  const [enabled, setEnabled] = useState(false)
  const [accent, setAccent] = useState('#2F6BFF')
  const [font, setFont] = useState('Inter Tight')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const initial = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')
      .trim()
    if (initial) setAccent(initial)
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark')

    const onMsg = (e: MessageEvent) => {
      const data = e.data
      if (!data) return
      if (data.type === '__activate_edit_mode') setEnabled(true)
      if (data.type === '__deactivate_edit_mode') setEnabled(false)
    }
    window.addEventListener('message', onMsg)
    window.parent?.postMessage({ type: '__edit_mode_available' }, '*')
    return () => window.removeEventListener('message', onMsg)
  }, [])

  const applyAccent = (hex: string) => {
    setAccent(hex)
    document.documentElement.style.setProperty('--accent', hex)
    window.parent?.postMessage({ type: '__edit_mode_set_keys', edits: { accent: hex } }, '*')
  }

  const applyFont = (f: string) => {
    setFont(f)
    document.documentElement.style.setProperty(
      '--font-en',
      `"${f}", "Pretendard Variable", system-ui, sans-serif`
    )
    window.parent?.postMessage({ type: '__edit_mode_set_keys', edits: { englishFont: f } }, '*')
  }

  const toggleTheme = (t: string) => {
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
    window.parent?.postMessage({ type: '__edit_mode_set_keys', edits: { theme: t } }, '*')
  }

  if (!enabled) return null

  return (
    <div className="tweaks">
      <div className="tweaks__title">TWEAKS</div>

      <div className="tweaks__row">
        <span className="tweaks__label">Theme</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {['dark', 'light'].map((t) => (
            <button
              key={t}
              onClick={() => toggleTheme(t)}
              className="tweaks__select"
              style={{
                fontSize: 10,
                padding: '3px 8px',
                textTransform: 'uppercase',
                letterSpacing: '.1em',
                background: theme === t ? 'var(--accent)' : 'var(--bg)',
                color: theme === t ? '#fff' : 'var(--fg)',
                borderColor: theme === t ? 'var(--accent)' : 'var(--line)',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="tweaks__row">
        <span className="tweaks__label">Accent</span>
        <div className="tweaks__swatches">
          {ACCENTS.map((a) => (
            <button
              key={a.hex}
              className={`tweaks__swatch${accent.toLowerCase() === a.hex.toLowerCase() ? ' active' : ''}`}
              style={{ background: a.hex }}
              title={a.name}
              onClick={() => applyAccent(a.hex)}
            />
          ))}
        </div>
      </div>

      <div className="tweaks__row" style={{ marginBottom: 0 }}>
        <span className="tweaks__label">English</span>
        <select
          className="tweaks__select"
          value={font}
          onChange={(e) => applyFont(e.target.value)}
        >
          {FONTS.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
