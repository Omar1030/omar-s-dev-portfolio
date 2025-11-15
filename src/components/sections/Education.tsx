import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      title: "Bachelor of Managament Information System - English Section",
      company: "Faculty of Business, Alexandria University",
      period: "2019 - 2023",
      description: ["Developed 15+ web applications for clients using Angular and Node.js", "Implemented RESTful APIs and database designs for various projects", "Collaborated with designers to create responsive, user-friendly interfaces", "Maintained code quality through testing and code reviews"],
    },
    {
      title: "Full Stack Web Development (MERN) - Intern",
      company: "Information Technology Institute - ITI",
      period: "July 2025 - Decemper 2025",
      description: ["Built REST APIs using Node.js and Express for enterprise applications", "Worked with MongoDB for database design and optimization", "Implemented authentication and authorization using JWT", "Participated in agile development sprints and code reviews"],
    },
    {
      title: "Frontend Developer Intern",
      company: "National Technology Institute - NTI",
      period: "May 2025 - July 2025",
      description: ["Developed responsive websites using Angular and React", "Collaborated with UX/UI designers to implement pixel-perfect designs", "Optimized web applications for maximum speed and scalability", "Maintained and updated existing client websites"],
    },
    // {
    //   title: "Web Development Student",
    //   company: "Self-Learning & Online Courses",
    //   period: "2021 - 2022",
    //   description: ["Completed comprehensive courses in Angular, Node.js, and MongoDB", "Built personal projects to practice full-stack development", "Learned clean code principles and MVC architecture", "Contributed to open-source projects on GitHub"],
    // },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and key milestones in software development</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((exp, index) => (
            <Card key={exp.title} className="border-2 card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground/70">{exp.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground sm:ml-auto">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              {/* <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
