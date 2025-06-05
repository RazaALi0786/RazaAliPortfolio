
import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      color: 'text-green-400'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'AWS, Docker, Kubernetes, CI/CD',
      color: 'text-orange-400'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'TensorFlow, PyTorch, OpenAI APIs',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and building scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate fullstack developer with over 5 years of experience building scalable web applications. 
                My journey started with a curiosity about how things work, which led me to explore the endless possibilities of code.
              </p>
              <p className="text-lg leading-relaxed">
                Today, I specialize in modern JavaScript frameworks, cloud architecture, and AI integration. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me contributing to open source projects, writing technical blogs, 
                or exploring the latest in AI and machine learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Leadership', 'Agile Methodology', 'Open Source'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-purple-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <skill.icon className={`h-12 w-12 mx-auto mb-4 ${skill.color}`} />
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Lines of Code', value: '100K+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
