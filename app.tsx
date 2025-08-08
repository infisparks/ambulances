import React from 'react';
import { Shield, Phone, Heart, Zap, AlertTriangle, MapPin, Clock, Users, CheckCircle, Star, ArrowRight, Car, Bike, Droplets, Mic, Bell, Waves, Cpu, Volume2, Send, Play, TrendingUp, Award, Target } from 'lucide-react';

function App() {
  const problemStats = [
    {
      number: "1.5L+",
      label: "Annual Deaths",
      description: "People die in road accidents annually in India",
      color: "text-red-600"
    },
    {
      number: "60%",
      label: "Preventable Deaths",
      description: "Deaths caused by delayed medical response",
      color: "text-orange-600"
    },
    {
      number: "15min",
      label: "Critical Window",
      description: "Average time lost due to delayed emergency calls",
      color: "text-blue-600"
    }
  ];

  const problemReasons = [
    {
      title: "Ambulance Arrives Late",
      description: "Emergency services take too long to reach accident sites",
      icon: "🚑"
    },
    {
      title: "Hospital Too Far",
      description: "Remote locations with limited access to medical facilities",
      icon: "🏥"
    },
    {
      title: "Bystander Fear",
      description: "People hesitate to call emergency due to legal complications",
      icon: "😶"
    }
  ];

  const features = [
    {
      title: "Manual SOS Button",
      description: "Instant emergency activation with a single press. Immediately alerts emergency services, hospitals, and family members with your exact location.",
      image: "sensors/3.png"
    },
    {
      title: "Voice Command System",
      description: "Say 'Help Help Help' to activate emergency response when physical interaction isn't possible. Advanced voice recognition works even in noisy environments.",
      image: "/sensors/2.png"
    },
    {
      title: "Automatic Airbag Sensor",
      description: "Automatically detects airbag deployment and triggers emergency protocols instantly. No manual intervention required during critical moments.",
      image: "sensors/5.png"
    },
    {
      title: "Impact Detection System",
      description: "Four-corner impact sensors detect crashes from any angle. Advanced algorithms distinguish between accidents and normal driving conditions.",
      image: "/sensors/1.png"
    },
    {
      title: "Water Submersion Alert",
      description: "Specialized water sensors detect vehicle submersion and activate drowning emergency protocols. Critical for water-related accidents.",
      image: "sensors/4.png"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Detection",
      description: "Multiple detection methods including manual button, voice commands, impact sensors, airbag deployment, or water submersion",
      details: "Advanced AI algorithms process sensor data in real-time",
      image: "/help/1.png"
    },
    {
      step: "02", 
      title: "Alert Processing",
      description: "Instant alert processing with GPS location, vehicle details, and severity assessment sent to emergency network",
      details: "Sub-second response time with encrypted data transmission",
      image: "/help/2.png"
    },
    {
      step: "03",
      title: "Emergency Dispatch",
      description: "Simultaneous alerts to hospitals, emergency services, and family members with live location tracking",
      details: "24/7 monitoring center coordinates immediate response",
      image: "/help/3.png"
    },
    {
      step: "04",
      title: "Response & Rescue",
      description: "Nearest emergency responders dispatched with full accident details and real-time communication established",
      details: "Average response time reduced by 70% with InfiCare",
      image: "/help/4.png"
    }
  ];

  const products = [
    {
      title: "Button System",
      subtitle: "Manual Emergency Activation",
      description: "One-touch emergency activation system for immediate help. Perfect for conscious victims who can manually trigger alerts.",
      features: ["One-touch activation", "GPS location sharing", "Instant family alerts", "24/7 monitoring"],
      price: "₹2,999",
      image: "/sensors/3.png",
      badge: "Most Popular"
    },
    {
      title: "Voice Command",
      subtitle: "Hands-Free Emergency",
      description: "Advanced voice recognition system that activates on keywords 'Help Help Help'. Works even when physical interaction is impossible.",
      features: ["Voice recognition", "Multiple languages", "Noise filtering", "Offline capability"],
      price: "₹4,999",
      image: "/sensors/2.png",
      badge: "Smart Choice"
    },
    {
      title: "Airbag Sensor",
      subtitle: "Automatic Crash Detection",
      description: "Automatically detects airbag deployment and triggers emergency response. No manual action required during accidents.",
      features: ["Auto airbag detection", "Instant activation", "Crash severity analysis", "Emergency protocols"],
      price: "₹6,999",
      image: "/sensors/5.png",
      badge: "Advanced"
    },
    {
      title: "Impact Sensor",
      subtitle: "360° Crash Protection",
      description: "Four-corner impact sensors provide comprehensive crash detection from any angle. Advanced algorithms prevent false alarms.",
      features: ["4-corner sensors", "360° detection", "Impact analysis", "Smart algorithms"],
      price: "₹8,999",
      image: "/sensors/1.png",
      badge: "Professional"
    },
    {
      title: "Water Sensor",
      subtitle: "Submersion Emergency Alert",
      description: "Specialized water detection system for drowning emergencies. Activates immediately when vehicle enters water.",
      features: ["Water detection", "Submersion alerts", "Depth monitoring", "Drowning protocols"],
      price: "₹5,999",
      image: "/sensors/4.png",
      badge: "Life Saver"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => window.location.href = '/'}
            >
              <img src="/logo.png" alt="InfiCare Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-gray-900">InfiCare</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-gray-600 hover:text-[#1800ad] transition-colors font-medium">Problem</a>
              <a href="#features" className="text-gray-600 hover:text-[#1800ad] transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-[#1800ad] transition-colors font-medium">How It Works</a>
              <a href="#products" className="text-gray-600 hover:text-[#1800ad] transition-colors font-medium">Products</a>
            </nav>
            
            <button className="bg-[#1800ad] hover:bg-[#1400a0] text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              View Products
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-red-100 to-orange-100 text-red-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Because Every Life Matters
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  InfiCare
                  <span className="block text-3xl md:text-4xl font-medium text-gray-600 mt-2">
                    Smart Emergency Response System
                  </span>
                </h1>
                <div className="bg-gradient-to-r from-[#1800ad] to-purple-600 bg-clip-text text-transparent">
                  <p className="text-2xl md:text-3xl font-bold">
                    Every Second Counts. Every Life Matters.
                  </p>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Revolutionary emergency response system that automatically detects vehicle accidents and instantly connects you to emergency services, hospitals, and loved ones when every second matters most.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#1800ad] hover:bg-[#1400a0] text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105">
                  Save Lives Now
                  <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-[#1800ad] text-[#1800ad] hover:bg-[#1800ad] hover:text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg">
                  <Play className="inline w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-100 via-white to-blue-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <img 
                    src="/sos.jpeg" 
                    alt="InfiCare Emergency Device" 
                    className="w-full h-auto object-contain rounded-xl" 
                    style={{ maxHeight: '400px' }} 
                  />
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">24/7 Active</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-semibold text-gray-700">Life Saver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-100 text-red-700 font-semibold">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Critical Emergency: Delayed Response Kills
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              The Problem We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              It's not just the crash that kills — delay in medical help causes preventable deaths. 
              In India, precious minutes are lost when emergency response is delayed.
            </p>
          </div>
          
          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {problemStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300">
                <div className={`text-5xl font-bold mb-3 ${stat.color}`}>{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Why Delays Happen */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Delays Happen</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {problemReasons.map((reason, index) => (
                <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                  <div className="text-6xl mb-4">{reason.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900">{reason.title}</h4>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <div className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-2xl font-bold text-xl">
                <Clock className="w-6 h-6 mr-3" />
                Seconds Matter — Delay = Death
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold">
              <Zap className="w-5 h-5 mr-2" />
              Advanced Safety Technology
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Multiple Detection Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Five different ways to detect emergencies and trigger instant response. 
              Because every situation is different, and every life matters.
            </p>
          </div>
          
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
                    <Target className="w-4 h-4 mr-2" />
                    Detection Method {index + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{feature.description}</p>
                  <button className="bg-[#1800ad] hover:bg-[#1400a0] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
                    <img 
                      src={feature.image || "/placeholder.svg"} 
                      alt={feature.title}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-700 font-semibold">
              <TrendingUp className="w-5 h-5 mr-2" />
              Proven Emergency Response Process
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              How InfiCare Saves Lives
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From detection to rescue in under 60 seconds. Our automated process ensures 
              help reaches you faster than ever before.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1800ad] to-purple-600 rounded-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {howItWorks.map((step, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center relative ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-[#1800ad] flex items-center justify-center font-bold text-[#1800ad] text-lg shadow-xl hidden lg:flex z-10">
                    {step.step}
                  </div>
                  
                  <div className={`bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ${index % 2 === 1 ? 'lg:col-start-2 lg:ml-8' : 'lg:mr-8'}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#1800ad] text-white rounded-xl flex items-center justify-center font-bold text-lg lg:hidden">
                          {step.step}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                      <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4">
                        <p className="text-sm font-semibold text-purple-700">{step.details}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
                      <img 
                        src={step.image}
                        alt={`Step ${index + 1}: ${step.title}`}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-orange-100 text-orange-700 font-semibold">
              <Award className="w-5 h-5 mr-2" />
              Professional Emergency Solutions
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect emergency response system for your vehicle. 
              Each product is designed to save lives in different emergency scenarios.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#1800ad] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.badge}
                  </div>
                </div>
                
                <div className="space-y-6 pt-4">
                  {/* Product Image */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img 
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-48 object-contain rounded-xl"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                      <p className="text-lg text-[#1800ad] font-semibold">{product.subtitle}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pricing */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold text-gray-900">{product.price}</div>
                      <div className="text-sm text-gray-500">One-time purchase + Installation</div>
                      <button className="w-full bg-[#1800ad] hover:bg-[#1400a0] text-white py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl group-hover:scale-105">
                        Order Now
                        <ArrowRight className="inline w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                {/* <img src="/logo.png" alt="InfiCare Logo" className="h-10 w-auto" /> */}
                <span className="text-2xl font-bold">InfiCare</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Because Every Life Matters. Advanced emergency response system protecting lives across India with cutting-edge detection technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Product</h4>
              <div className="space-y-3">
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Emergency Systems</div>
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Detection Methods</div>
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Response Process</div>
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Installation</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <div className="space-y-3">
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Emergency Help</div>
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Technical Support</div>
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Warranty</div>
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Service Centers</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Emergency Contact</h4>
              <div className="space-y-3">
                <div className="text-gray-400">24/7 Emergency Hotline:</div>
                <div className="text-white font-bold text-xl">+91 99583 99157</div>
                <div className="text-gray-400">Every Second Counts</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 InfiCare. All rights reserved. Every Second Counts. Every Life Matters.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;