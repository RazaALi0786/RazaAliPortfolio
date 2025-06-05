
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'TypeScript', 'Python', 'TensorFlow', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: '/placeholder-project.jpg',
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Scalable chat app with WebSocket integration, file sharing, and real-time notifications.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'Socket.io', 'Express', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'DevOps Automation Tool',
      description: 'CI/CD pipeline automation tool with Docker containerization and Kubernetes deployment.',
      image: '/placeholder-project.jpg',
      techStack: ['Python', 'Docker', 'Kubernetes', 'AWS'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with team collaboration features and progress tracking.',
      image: '/placeholder-project.jpg',
      techStack: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
