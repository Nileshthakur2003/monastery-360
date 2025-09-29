'use client'

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()

    // Hardcoded credentials by role
    const users = {
      "admin@sikkim.com": { password: "1234", redirect: "/admin/dashboard" },
      "tourist@sikkim.com": { password: "1234", redirect: "/tourist/dashboard" },
      "monk@sikkim.com": { password: "1234", redirect: "/monastery/dashboard" },
      "hotel@sikkim.com": { password: "1234", redirect: "/accomodation/dashboard" },
      "researcher@sikkim.com": { password: "1234", redirect: "/researcher/dashboard" },
      "restaurant@sikkim.com": { password: "1234", redirect: "/restaurant/dashboard" },
      "transport@sikkim.com": { password: "1234", redirect: "/transport/dashboard" },
    }

    if (users[email] && users[email].password === password) {
      // Redirect to role-specific dashboard
      router.push(users[email].redirect)
    } else {
      setError("Incorrect username or password")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-slate-900 px-4">
      <div className="max-w-md w-full border rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-center">Monastery360</h2>
        <h3 className="text-xl font-bold text-center">Log In</h3>
        <p className="text-sm text-slate-600 text-center mt-2">
          Sign in to continue to <span className="font-semibold">Monastery360</span>
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
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

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-emerald-500 text-white py-2 text-sm font-semibold hover:bg-emerald-600"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-slate-600 text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-emerald-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  )
}
