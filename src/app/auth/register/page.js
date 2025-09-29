'use client'

import Link from "next/link"
import { useState } from "react"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("tourist") // default role

  const handleSignup = (e) => {
    e.preventDefault()
    console.log("Signup with:", { name, email, password, role })
    // TODO: Hook up signup logic
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-slate-900 px-4">
      <div className="max-w-md w-full border rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-center">Monastery360</h2>
        <h3 className="text-xl font-bold text-center">Create Account</h3>
        <p className="text-sm text-slate-600 text-center mt-2">
          Join <span className="font-semibold">Monastery360</span> and explore digitally preserved heritage
        </p>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full rounded-full border px-4 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-full border px-4 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full rounded-full border px-4 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
          />

          {/* Role dropdown */}
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            className="w-full rounded-full border px-4 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500 bg-white"
            required
          >
            <option value="tourist">Tourist</option>
            <option value="monk">Monk / Monastery Head</option>
            <option value="researcher">Researcher / Student</option>
            <option value="restaurant">Restaurant & Hotel</option>
            <option value="transport">Transportation Service</option>
          </select>

          <button
            type="submit"
            className="w-full rounded-full bg-emerald-500 text-white py-2 text-sm font-semibold hover:bg-emerald-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-slate-600 text-center mt-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-emerald-600 hover:underline">
            Log in
          </Link>
        </p>
        <p className="text-sm text-slate-600 text-center mt-2">
          <Link href="/" className="text-emerald-600 hover:underline">
            Back to Monastery360
          </Link>
        </p>
      </div>
    </main>
  )
}
