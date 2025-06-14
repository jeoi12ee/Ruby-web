import React from 'react';
import { Music, Bot, Users, Zap, Play, Pause, Volume2, SkipForward, Heart, Star, ArrowRight, Download, Settings, Headphones, Radio, Disc3, Waves, Command, Clock, List, Repeat, Shuffle, Search } from 'lucide-react';

const Documentation = () => {
  const commands = [
    {
      category: "Basic Commands",
      items: [
        { command: "/play", description: "Play a song or playlist", usage: "/play <song name or URL>", example: "/play never gonna give you up" },
        { command: "/pause", description: "Pause the current track", usage: "/pause", example: "/pause" },
        { command: "/resume", description: "Resume playback", usage: "/resume", example: "/resume" },
        { command: "/skip", description: "Skip to the next song", usage: "/skip", example: "/skip" },
        { command: "/stop", description: "Stop playback and clear queue", usage: "/stop", example: "/stop" },
      ]
    },
    {
      category: "Queue Management",
      items: [
        { command: "/queue", description: "View the current queue", usage: "/queue", example: "/queue" },
        { command: "/shuffle", description: "Shuffle the current queue", usage: "/shuffle", example: "/shuffle" },
        { command: "/loop", description: "Loop current song or queue", usage: "/loop [song/queue/off]", example: "/loop queue" },
        { command: "/remove", description: "Remove a song from queue", usage: "/remove <position>", example: "/remove 3" },
      ]
    },
    {
      category: "Audio Control",
      items: [
        { command: "/volume", description: "Adjust the volume", usage: "/volume <0-100>", example: "/volume 80" },
        { command: "/bassboost", description: "Enable/disable bass boost", usage: "/bassboost [on/off]", example: "/bassboost on" },
        { command: "/nightcore", description: "Enable/disable nightcore effect", usage: "/nightcore [on/off]", example: "/nightcore on" },
      ]
    }
  ];

  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "High Quality Audio",
      description: "Experience crystal clear 320kbps audio streaming with advanced audio processing for the best sound quality."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Smart AI Features",
      description: "Get intelligent playlist generation and music recommendations powered by advanced AI algorithms."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Server Support",
      description: "Seamlessly manage music across multiple Discord servers with independent queues and settings."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Enjoy instant responses and ultra-low latency for the best listening experience."
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Live Radio",
      description: "Access thousands of live radio stations from around the world with high-quality streaming."
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Audio Effects",
      description: "Enhance your music with bass boost, reverb, nightcore, and other audio effects."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-400/30">
            <Music className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="absolute top-40 right-32 animate-float-delay">
          <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-400/30">
            <Command className="w-10 h-10 text-pink-400" />
          </div>
        </div>
        <div className="absolute bottom-32 left-40 animate-float">
          <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-rose-400/30">
            <Waves className="w-8 h-8 text-rose-400" />
          </div>
        </div>
        <div className="absolute top-60 left-1/3 animate-float-delay">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-400/30">
            <Bot className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="absolute bottom-40 right-40 animate-float">
          <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-400/30">
            <img 
              src="/download.png" 
              alt="Ruby Logo" 
              className="w-10 h-10 object-contain opacity-80"
            />
          </div>
        </div>
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
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Ruby
                </span>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  Home
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-red-400 transition-colors">Features</a>
              <a href="#commands" className="hover:text-red-400 transition-colors">Commands</a>
              <a href="https://discord.gg/tfgSdvjb58" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">Support Server</a>
              <a href="https://discord.com/oauth2/authorize?client_id=1375849162041720954" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-2 rounded-full hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
                Add to Server
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Ruby
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to know about Ruby - the ultimate Discord music bot for your server.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
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
      <section id="commands" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Commands
            </span>
          </h2>
          <div className="space-y-12">
            {commands.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Command className="w-6 h-6 text-red-400" />
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((cmd, cmdIndex) => (
                    <div key={cmdIndex} className="bg-black/40 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full text-sm font-mono">
                          {cmd.command}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{cmd.description}</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-400">
                          <span className="text-red-400">Usage:</span> {cmd.usage}
                        </p>
                        <p className="text-gray-400">
                          <span className="text-red-400">Example:</span> {cmd.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Quick Setup Guide
            </span>
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Add Ruby to Your Server</h3>
                  <p className="text-gray-300">Click the "Add to Server" button above and select your Discord server. Make sure you have the necessary permissions to add bots.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Configure Permissions</h3>
                  <p className="text-gray-300">Ensure Ruby has the following permissions in your server: View Channels, Send Messages, Embed Links, Connect, Speak, and Use Voice Activity.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Start Playing Music</h3>
                  <p className="text-gray-300">Join a voice channel and use the /play command followed by a song name or URL to start playing music.</p>
                </div>
              </div>
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
                <a href="https://discord.gg/tfgSdvjb58" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors">
                  <Headphones className="w-5 h-5" />
                </a>
                <a href="https://discord.com/oauth2/authorize?client_id=1375849162041720954" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#commands" className="hover:text-white transition-colors">Commands</a></li>
                <li><a href="https://discord.gg/tfgSdvjb58" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Support Server</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://discord.gg/tfgSdvjb58" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord Server</a></li>
                <li><a href="https://discord.com/oauth2/authorize?client_id=1375849162041720954" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Add to Server</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ruby Music Bot. All rights reserved. Made with ❤️ for the Discord community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Documentation; 