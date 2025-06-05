
import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-black">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">SA</span>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Syed Raza <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Ali</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Computer Science Student & Full Stack Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              B.Tech in Computer Science & Engineering at Integral University, Lucknow. 
              Passionate about React, Node.js, and building innovative web solutions.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB', 'Material-UI', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-sm hover:bg-emerald-900/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-emerald-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
