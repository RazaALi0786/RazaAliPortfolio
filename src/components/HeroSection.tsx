
import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">JD</span>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              John <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Fullstack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Building the future with code, one line at a time. Specialized in React, Node.js, Python, and cutting-edge AI technologies.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-gray-300 text-sm hover:bg-slate-700/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
