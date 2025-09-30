'use client'

import { useState } from "react"
import Link from "next/link"
import {
  CheckCircle2, Calendar, Users, MapPin, Mail, User,
  Minus, Plus, Phone, Star
} from "lucide-react"

export default function BookPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    monastery: "",
    date: "",
    guests: 1,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleGuestChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      guests: type === "plus" ? prev.guests + 1 : Math.max(1, prev.guests - 1),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setStep(4)
    setTimeout(() => {
      setFormData({ name: "", email: "", monastery: "", date: "", guests: 1 })
      setSubmitted(false)
      setStep(1)
    }, 5000)
  }

  // Mock Tour Guides Data
  const tourGuides = [
    {
      id: 1,
      name: "Tenzing Bhutia",
      expertise: "Rumtek & Pemayangtse",
      rating: 4.8,
      contact: "+91 9876543210",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      name: "Pema Sherpa",
      expertise: "Tashiding & Local Villages",
      rating: 4.6,
      contact: "+91 9988776655",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 3,
      name: "Sonam Lepcha",
      expertise: "History & Architecture Specialist",
      rating: 4.9,
      contact: "+91 9123456789",
      image: "https://i.pravatar.cc/150?img=47",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-900">
      {/* HERO */}
      <section className="py-10 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-700">Book Your Monastery Visit</h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Plan your guided cultural journey across the monasteries of Sikkim. 
          Follow the steps below to secure your visit.
        </p>
      </section>

      {/* PROGRESS STEPPER */}
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 mb-10">
        {["Details", "Preferences", "Review", "Done"].map((label, idx) => (
          <div key={idx} className="flex flex-col items-center text-sm">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold 
                ${step > idx ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700"}`}
            >
              {idx + 1}
            </div>
            <span className="mt-2">{label}</span>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
        {/* Booking Form */}
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-lg bg-white">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Details */}
                {step === 1 && (
                  <>
                    <h2 className="text-xl font-semibold mb-2">Your Details</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium">
                          <User className="w-4 h-4 text-emerald-600" /> Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-emerald-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium">
                          <Mail className="w-4 h-4 text-emerald-600" /> Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-emerald-500"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-full font-semibold hover:bg-emerald-700 transition"
                    >
                      Next → Preferences
                    </button>
                  </>
                )}

                {/* Step 2: Preferences */}
                {step === 2 && (
                  <>
                    <h2 className="text-xl font-semibold mb-2">Visit Preferences</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium">
                          <MapPin className="w-4 h-4 text-emerald-600" /> Choose Monastery
                        </label>
                        <select
                          name="monastery"
                          value={formData.monastery}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-emerald-500"
                          required
                        >
                          <option value="">Select one...</option>
                          <option value="Rumtek">Rumtek Monastery</option>
                          <option value="Pemayangtse">Pemayangtse Monastery</option>
                          <option value="Tashiding">Tashiding Monastery</option>
                        </select>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium">
                          <Calendar className="w-4 h-4 text-emerald-600" /> Date of Visit
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-emerald-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium">
                          <Users className="w-4 h-4 text-emerald-600" /> Guests
                        </label>
                        <div className="flex items-center gap-3 mt-1">
                          <button
                            type="button"
                            onClick={() => handleGuestChange("minus")}
                            className="w-8 h-8 rounded-full border flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold">{formData.guests}</span>
                          <button
                            type="button"
                            onClick={() => handleGuestChange("plus")}
                            className="w-8 h-8 rounded-full border flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-2 border rounded-full hover:bg-slate-100 transition"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
                      >
                        Next → Review
                      </button>
                    </div>
                  </>
                )}

                {/* Step 3: Review */}
                {step === 3 && (
                  <>
                    <h2 className="text-xl font-semibold mb-2">Review Your Booking</h2>
                    <div className="bg-slate-50 rounded-lg p-4 space-y-2 text-sm">
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Monastery:</strong> {formData.monastery}</p>
                      <p><strong>Date:</strong> {formData.date}</p>
                      <p><strong>Guests:</strong> {formData.guests}</p>
                    </div>

                    <div className="flex justify-between mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-2 border rounded-full hover:bg-slate-100 transition"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </>
                )}
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                <h3 className="mt-4 text-xl font-semibold">Booking Confirmed!</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Thank you for booking. We’ve sent you an email with all details.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Booking Guide */}
        <aside className="rounded-2xl border border-slate-200 p-6 bg-emerald-50 shadow-sm">
          <h3 className="font-semibold text-lg mb-3">Booking Guide</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
            <li>Enter your personal details.</li>
            <li>Select monastery, date & number of guests.</li>
            <li>Review your information.</li>
            <li>Confirm to complete booking.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-600">
            All bookings are subject to monastery timings & availability.
          </p>
        </aside>
      </section>
{/* TOUR GUIDES */}
<section className="max-w-6xl mx-auto px-4 py-14">
  <h2 className="text-2xl font-bold text-emerald-700 text-center">Meet Our Tour Guides</h2>
  <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">
    Our certified local guides will enrich your monastery visit with authentic stories, history, and cultural insights.
  </p>

  <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {tourGuides.map((guide) => (
      <div
        key={guide.id}
        className="rounded-2xl border border-slate-200 bg-white shadow hover:shadow-md transition p-5"
      >
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-semibold text-lg">{guide.name}</h3>
          <p className="text-sm text-slate-600">{guide.expertise}</p>
          <div className="flex items-center gap-1 mt-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(guide.rating) ? "fill-amber-500" : "fill-slate-300"}`}
              />
            ))}
            <span className="text-xs text-slate-500 ml-1">{guide.rating}</span>
          </div>
          <a
            href={`tel:${guide.contact}`}
            className="mt-2 flex items-center gap-2 text-sm text-emerald-600 hover:underline"
          >
            <Phone className="w-4 h-4" /> {guide.contact}
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between text-xs md:text-sm text-slate-500">
          <div>Monastery360 — A Cultural Journey</div>
          <Link href="/" className="hover:underline">← Back to Home</Link>
        </div>
      </footer>
    </main>
  )
}
