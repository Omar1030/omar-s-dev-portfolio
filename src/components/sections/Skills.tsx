import { Code2, Database, Wrench, Boxes } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "text-primary",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "Angular",
        "React",
      ],
    },
    {
      title: "Backend",
      icon: Database,
      color: "text-secondary",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "REST API",
        "GraphQL",
        "JWT",
        "Authentication",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-accent",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Linux",
        "MongoDB Atlas",
        "Windsurf",
        "VS Code",
        "npm",
      ],
    },
    {
      title: "Architecture",
      icon: Boxes,
      color: "text-primary",
      skills: [
        "MVC Pattern",
        "Clean Code",
        "RESTful Design",
        "Microservices",
        "Agile",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to build modern web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="border-2 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
