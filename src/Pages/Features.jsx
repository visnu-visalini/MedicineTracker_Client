import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: "⏰",
      title: "Smart Reminders",
      description: "Intelligent medication reminders that adapt to your schedule. Never miss a dose with customizable alerts and notifications.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "📊",
      title: "Health Analytics",
      description: "Track your medication adherence with detailed analytics and insights. Monitor your progress over time.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: "💊",
      title: "Medication Management",
      description: "Organize all your medications in one place. Add dosages, frequencies, and special instructions easily.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your health data is encrypted and stored securely. We prioritize your privacy and data protection.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "📱",
      title: "Multi-Device Sync",
      description: "Access your medication schedule from any device. Seamless synchronization across all your devices.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor Integration",
      description: "Share your medication history with healthcare providers. Export reports for medical appointments.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Powerful Features for Better Health
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover how MediTrack makes medication management simple, secure, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            How MediTrack Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Your Medications</h3>
              <p className="text-gray-600">Simply add your medications with dosage information and schedule.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Set Smart Reminders</h3>
              <p className="text-gray-600">Configure personalized reminders that fit your daily routine.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay on Track</h3>
              <p className="text-gray-600">Receive timely notifications and track your medication adherence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Health Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join MediTrack today and experience the difference smart medication management can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Started Free
                </button>
              </Link>
              <Link to="/home">
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  View Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;