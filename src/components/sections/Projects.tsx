import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Spotly",
      description: "A fullstack web app for managing events with user authentication, event creation, and bookings.",
      tech: ["Nextjs", "Nodejs", "Express", "MongoDB"],
      liveUrl: "https://spotly-clinet.vercel.app/",
      githubUrl: "https://github.com/saied-ebrahim/Spotly-API",
    },
    {
      title: "REST API",
      description: "A REST API built with Node.js and Express, using MongoDB as the database",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "MVC"],
      githubUrl: "https://github.com/Omar-Abdelmoaty-10/REST-API",
    },
    {
      title: "E-commerce",
      description: "A scalable React e-commerce frontend with component-driven design, Redux state, and API-ready hooks.",
      tech: ["React", "Redux", "TailwindCSS"],
      liveUrl: "https://shop-co-iota-sage.vercel.app/",
      githubUrl: "https://github.com/Omar-Abdelmoaty-10/SHOP.CO",
    },
    {
      title: "Responsive Landing Page",
      description: "A fully responsive landing page with modern design, smooth animations, and mobile-first layout",
      tech: ["HTML", "CSS", "Bootstrap"],
      liveUrl: "https://anon-liard.vercel.app/",
      githubUrl: "https://github.com/Omar-Abdelmoaty-10/Anon",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Here are some of my recent projects showcasing my skills in full-stack development</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.title} className="border-2 card-hover group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
