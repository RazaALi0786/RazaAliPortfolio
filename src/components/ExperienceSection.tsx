
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Frontend Intern',
      company: 'Heimo Software Solutions',
      location: 'Remote',
      period: 'Jan 2025 - Jul 2025',
      description: 'Working on frontend development using React and Material-UI. Gained hands-on experience in QA processes, duo testing, and team collaboration.',
      achievements: [
        'Developed responsive React components with Material-UI',
        'Participated in QA processes and duo testing methodologies',
        'Collaborated effectively with development team',
        'Enhanced skills in modern frontend technologies'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote', 
      period: 'Jul 2024 - Oct 2024',
      description: 'Developed and maintained various client projects using React, Node.js, and modern web technologies.',
      achievements: [
        'Built complete frontend solutions from scratch',
        'Integrated APIs and improved site performance', 
        'Delivered projects on time and within budget',
        'Maintained high code quality standards'
      ]
    },
    {
      title: 'Frontend Intern',
      company: 'Habbo',
      location: 'Remote',
      period: 'Jul 2024 - Oct 2024', 
      description: 'Worked on Next.js applications, Postman for API testing, and implemented various features using modern JavaScript frameworks.',
      achievements: [
        'Developed features using Next.js and React',
        'Conducted API testing using Postman',
        'Implemented responsive designs with SASS and Figma',
        'Gained experience in full-stack development workflow'
      ]
    },
    {
      title: 'Robotics Intern',
      company: 'Integral University',
      location: 'Lucknow, India',
      period: 'Mar 2024 - Apr 2024',
      description: 'Worked on obstacle detection using Raspberry Pi, video sensors and control algorithms.',
      achievements: [
        'Implemented obstacle detection algorithms',
        'Programmed Raspberry Pi for sensor integration',
        'Developed control systems for robotic applications',
        'Gained hands-on experience with IoT technologies'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My internships and work experience in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-emerald-400 to-amber-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full border-4 border-black z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="bg-slate-800/50 border-emerald-700/30 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-lg text-emerald-400 font-semibold">{exp.company}</p>
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
                              <span className="text-emerald-400 mr-2">•</span>
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
