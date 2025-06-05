
import React from 'react';
import { Code, Database, Globe, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, JavaScript, TypeScript, Material-UI, Tailwind CSS',
      color: 'text-emerald-400'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Express.js, MongoDB, PostgreSQL, GraphQL',
      color: 'text-amber-400'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'REST APIs, JWT, OAuth, Progressive Web Apps, Responsive Design',
      color: 'text-green-400'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Data Structures, Algorithms, System Design, Code Optimization',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Computer Science student passionate about full-stack development and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm currently pursuing B.Tech in Computer Science & Engineering at Integral University, Lucknow, 
                with a strong focus on full-stack web development and modern technologies.
              </p>
              <p className="text-lg leading-relaxed">
                My journey includes hands-on experience through internships at Heimo Software Solutions and Habbo, 
                where I've worked on React applications, Material-UI implementations, and backend development with Node.js.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about creating efficient, scalable solutions and have experience with various projects 
                including chatbots, gaming platforms, and e-commerce applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Collaboration', 'Agile Development', 'Code Quality'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 rounded-lg text-emerald-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-800/50 border-emerald-700/30 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
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
            { label: 'Projects Completed', value: '10+' },
            { label: 'Years Learning', value: '3+' },
            { label: 'Technologies', value: '15+' },
            { label: 'CGPA', value: '8.3' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-2">
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
