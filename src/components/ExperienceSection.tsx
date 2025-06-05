
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on critical projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Integrated payment systems handling $1M+ in transactions',
        'Optimized database queries improving performance by 50%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive user interfaces and interactive web experiences. Worked closely with designers to implement pixel-perfect designs.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Improved user engagement metrics by 35% through UX improvements',
        'Established component library used across all projects'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'CodeCraft Inc',
      location: 'New York, NY',
      period: '2018 - 2019',
      description: 'Started my professional journey working on various web development projects. Gained experience in modern frameworks and development best practices.',
      achievements: [
        'Contributed to 10+ open source projects',
        'Completed comprehensive training in full-stack development',
        'Received "Rising Star" award for exceptional performance'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My career progression and key achievements in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-lg text-purple-400 font-semibold">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
