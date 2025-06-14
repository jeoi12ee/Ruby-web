import React, { useState, useEffect } from 'react';
import { Music, Bot, Users, Zap, Play, Pause, Volume2, SkipForward, Heart, Star, ArrowRight, Download, Settings, Headphones, Radio, Disc3, Waves } from 'lucide-react';
import Documentation from './pages/Documentation';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Lofi Hip Hop Mix');
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading time (you can adjust this or remove it if you want instant loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "High Quality Audio",
      description: "Crystal clear 320kbps audio streaming with advanced audio processing"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Smart AI Features",
      description: "Intelligent playlist generation and music recommendations powered by AI"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Server Support",
      description: "Seamlessly manage music across multiple Discord servers simultaneously"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Instant responses and ultra-low latency for the best listening experience"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Live Radio",
      description: "Access thousands of live radio stations from around the world"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Audio Effects",
      description: "Add bass boost, reverb, and other audio effects to enhance your music"
    }
  ];

  const commands = [
    { command: "/play", description: "Play a song or playlist" },
    { command: "/pause", description: "Pause the current track" },
    { command: "/skip", description: "Skip to the next song" },
    { command: "/queue", description: "View the current queue" },
    { command: "/volume", description: "Adjust the volume" },
    { command: "/loop", description: "Loop current song or queue" }
  ];

  const stats = [
    { label: "Servers", value: "100", icon: <Users className="w-6 h-6" /> },
    { label: "Active Users", value: "45.5K", icon: <Bot className="w-6 h-6" /> },
    { label: "Songs Played", value: "2M+", icon: <Music className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Zap className="w-6 h-6" /> }
  ];

  if (currentPage === 'documentation') {
    return <Documentation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/download.png" 
                  alt="Ruby Logo" 
                  className="w-8 h-8 object-contain"
                />
                <div className="absolute inset-0 bg-red-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Ruby
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-red-400 transition-colors">Features</a>
              <a href="#commands" className="hover:text-red-400 transition-colors">Commands</a>
              <a href="#stats" className="hover:text-red-400 transition-colors">Stats</a>
              <button onClick={() => setCurrentPage('documentation')} className="hover:text-red-400 transition-colors">Documentation</button>
              <a href="https://discord.com/oauth2/authorize?client_id=1375849162041720954" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-2 rounded-full hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
                Add to Server
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-pulse">
                  Ruby
                </span>
                <br />
                <span className="text-white">Music Bot</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Transform your Discord server into a premium music experience with Ruby - featuring high-quality audio, 
                smart playlists, and advanced features that your community will love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-red-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <a href="https://discord.com/oauth2/authorize?client_id=1375849162041720954" target="_blank" rel="noopener noreferrer">Add to Discord</a>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-red-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-400/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Headphones className="w-5 h-5" />
                  <a href="https://discord.gg/tfgSdvjb58" target="_blank" rel="noopener noreferrer">Support Server</a>
                </button>
              </div>
            </div>

            {/* 3D Music Player Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl blur-2xl opacity-75 animate-pulse"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25" style={{
                  transform: `perspective(1000px) rotateY(${scrollY * 0.02}deg) rotateX(${scrollY * 0.01}deg)`
                }}>
                  <div className="w-80 h-96 flex flex-col">
                    {/* Album Art */}
                    <div className="relative mb-6">
                      <div className="w-full h-48 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center transform hover:rotate-2 transition-transform duration-300 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" 
                          alt="AI Assistant Art" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                        <Volume2 className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Track Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{currentTrack}</h3>
                      <p className="text-gray-400">By Ruby Bot</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>2:34</span>
                        <span>3:45</span>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center space-x-6">
                      <button className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-full hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-red-500/50"
                      >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </button>
                      <button className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110">
                        <SkipForward className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-400/30">
            <Music className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="absolute bottom-32 right-20 animate-float-delay">
          <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-400/30">
            <img 
              src="/download.png" 
              alt="Ruby Logo" 
              className="w-10 h-10 object-contain opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Ruby's Impact
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by communities worldwide for exceptional music experiences
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-full group-hover:animate-pulse">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create the perfect music experience for your Discord community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl mb-6 group-hover:animate-pulse">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
                Simple Commands
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Easy-to-use slash commands that make controlling your music effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commands.map((cmd, index) => (
              <div key={index} className="group">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-black/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-rose-500/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-rose-600 to-red-600 rounded-full text-sm font-mono">
                      {cmd.command}
                    </div>
                  </div>
                  <p className="text-gray-300">{cmd.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-red-900/50 to-pink-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12 transform hover:scale-105 transition-all duration-500">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to upgrade your server?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 100 Discord servers and 45.5K users already using Ruby for the ultimate music experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-red-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-2">
                <img 
                  src="/download.png" 
                  alt="Ruby Logo" 
                  className="w-5 h-5 object-contain group-hover:animate-bounce"
                />
                <a href="https://discord.com/oauth2/authorize?client_id=1375849162041720954" target="_blank" rel="noopener noreferrer">Add Ruby to Discord</a>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-red-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-400/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Headphones className="w-5 h-5" />
                <a href="https://discord.gg/tfgSdvjb58" target="_blank" rel="noopener noreferrer">Support Server</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Profile Card */}
      <section className="py-8 relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900/70 to-red-900/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
            <div className="flex-shrink-0">
              <div className="relative group">
                <img 
                  src="https://images-ext-1.discordapp.net/external/6XM6DEmA-rwjmgls9tFgzqb2YjDEzuR1aJqBZyKxhPM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1317520928338608148/fa2482ef43cbd73326cc11a1b3c0b3e9.png?format=webp&quality=lossless&width=552&height=552" 
                  alt="Karan Discord Avatar" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-transparent group-hover:shadow-[0_0_40px_10px_rgba(236,72,153,0.6)] group-hover:border-pink-400 transition-all duration-500"
                />
                <span className="absolute inset-0 rounded-full pointer-events-none group-hover:animate-pulse-glow"></span>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="text-lg font-semibold text-white mb-1">Developer</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-2">karan</div>
              <a 
                href="https://discord.com/users/1317520928338608148" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full text-white font-semibold hover:from-indigo-700 hover:to-pink-700 transition-all duration-300 shadow-md"
              >
                View Discord Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/download.png" 
                  alt="Ruby Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold">Ruby</span>
              </div>
              <p className="text-gray-400 mb-4">
                The most advanced music bot for Discord. Bringing high-quality audio and smart features to your community.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors">
                  <Star className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                  <Heart className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">High Quality Audio</li>
                <li className="hover:text-white cursor-pointer transition-colors">AI Recommendations</li>
                <li className="hover:text-white cursor-pointer transition-colors">Live Radio</li>
                <li className="hover:text-white cursor-pointer transition-colors">Audio Effects</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <a href="https://discord.gg/tfgSdvjb58" target="_blank" rel="noopener noreferrer">Discord Server</a>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Bug Reports</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Ruby Music Bot. All rights reserved. Made with ❤️ By Karan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;