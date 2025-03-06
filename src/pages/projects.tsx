import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard with interactive maps and detailed weather forecasts using multiple APIs.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      technologies: ["React", "D3.js", "OpenWeather API", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.h1 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto space-x-2">
                <Button variant="outline" size="sm">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}