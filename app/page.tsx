"use client"

import { useState } from "react"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Email submitted:", email)
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold">IM</span>
              </div>
              <span className="text-2xl font-bold">InterviewMaster</span>
            </div>
            <span className="border-2 border-black px-3 py-1 rounded-full text-sm font-semibold">
              Coming Soon
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Master Your Next
            <span className="block text-gray-600">Interview</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered interview preparation with industry-standard grading methods. Practice with confidence, get
            detailed feedback, and land your dream job.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Get Early Access</h3>
            <p className="text-gray-600 mb-4">Be the first to know when we launch</p>
            
            {!isSubscribed ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-black outline-none"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-semibold"
                >
                  Notify Me at Launch
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="text-green-600 text-4xl mb-2">✓</div>
                <p className="text-green-600 font-semibold">Thanks! We'll notify you when we launch.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why InterviewMaster?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-black rounded-lg p-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Feedback</h3>
              <p className="text-gray-600">
                Get detailed analysis using STAR method, competency-based, and technical assessment frameworks.
              </p>
            </div>

            <div className="border-2 border-black rounded-lg p-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry-Standard Methods</h3>
              <p className="text-gray-600">
                Practice with the same evaluation methods used by top companies and professional recruiters.
              </p>
            </div>

            <div className="border-2 border-black rounded-lg p-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Practice</h3>
              <p className="text-gray-600">
                Tailored questions based on your target role, with progress tracking and performance analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">IM</span>
              </div>
              <span className="font-bold">InterviewMaster</span>
            </div>
            <div className="text-sm text-gray-600">© 2024 InterviewMaster. Master your interviews with AI.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
