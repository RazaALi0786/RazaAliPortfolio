
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, image, techStack, githubUrl, liveUrl, featured = false }: ProjectCardProps) => {
  return (
    <Card className={`group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className={`${featured ? 'h-64' : 'h-48'} bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center`}>
          <span className="text-white text-lg font-semibold">Project Preview</span>
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>

      <CardHeader>
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-slate-700 text-gray-300 hover:bg-slate-600">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <Github className="h-4 w-4 mr-2" />
          Source
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <ExternalLink className="h-4 w-4 mr-2" />
          Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
