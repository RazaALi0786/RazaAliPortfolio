
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">&lt;Dev/&gt;</h3>
            <p className="text-gray-400 text-sm">
              Fullstack Developer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience', 'Blog', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Technologies</h4>
            <div className="space-y-2">
              {['React', 'Next.js', 'TypeScript', 'Python', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="block text-gray-400 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by John Doe © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
