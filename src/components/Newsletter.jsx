import { useState } from 'react'

export default function Newsletter({ dark = false }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return setError('Enter your email address.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return setError('Enter a valid email address.')
    setError('')
    setDone(true)
  }

  if (done) {
    return <p className={`font-medium ${dark ? 'text-paper' : 'text-ink'}`}>You&rsquo;re subscribed. Check your inbox.</p>
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2.5 w-full max-w-xs">
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input
        id="nl-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        aria-invalid={!!error}
        className={`w-full px-4 py-2.5 rounded-full text-sm text-ink focus:outline-none ${dark ? 'bg-paper' : 'bg-mist border border-black/10'}`}
      />
      {error && <p className={`text-xs -mt-1 ${dark ? 'text-red-300' : 'text-sale'}`}>{error}</p>}
      <button
        type="submit"
        className={`px-4 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80 ${dark ? 'bg-paper text-ink' : 'bg-ink text-paper'}`}
      >
        Subscribe to Newsletter
      </button>
    </form>
  )
}
