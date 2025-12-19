import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Never Miss Your Medicine Again
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Smart medication tracking with personalized reminders, dosage management, and health insights all in one place.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started Free
              </button>
            </Link>
            <Link to="/features">
              <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-3xl"></div>
            <img
              src="data:image/png;base64,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"
              alt="Medicine tracking illustration"
              className="relative w-64 md:w-80 mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose MediTrack?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Reminders</h3>
              <p className="text-gray-600">Never forget a dose with intelligent, personalized medication reminders.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Health Insights</h3>
              <p className="text-gray-600">Track your medication adherence and get valuable health insights.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure & Private</h3>
              <p className="text-gray-600">Your health data is encrypted and completely private.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who trust MediTrack for their medication management.
            </p>
            <Link to="/signup">
              <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Journey Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;