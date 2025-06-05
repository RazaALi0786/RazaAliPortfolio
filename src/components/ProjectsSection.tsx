
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'MERN SAAS A.I. Chatbot: A Journey of Exploration',
      description: 'A comprehensive AI chatbot platform built with MERN stack, featuring backend brilliance with Node.js and Express.js, intelligent conversations using OpenAI API, and secure user authentication.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'JWT'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Pokémon Gaming Platform Valorant',
      description: 'A gaming platform featuring Pokemon-themed experiences with effective development, state management, and component lifecycles using React and TypeScript.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'TypeScript', 'JavaScript', 'CSS'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'E-Commerce BackEnd: An Authenticated Authorization System',
      description: 'Robust backend system for e-commerce applications with secure authentication, user management, and comprehensive API endpoints.',
      image: '/placeholder-project.jpg',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'User Management System',
      description: 'A complete user management solution with authentication, authorization, user registration, and role-based access control.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Frontend React Applications',
      description: 'Multiple frontend applications showcasing React best practices, component reusability, and modern UI/UX design patterns.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my full-stack development skills and passion for innovation
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
