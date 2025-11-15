import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-2xl bg-muted flex items-center justify-center">
                  <User className="w-32 h-32 text-primary" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="border-2 card-hover">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Full-Stack Developer</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">I'm a passionate junior full-stack developer specializing in building modern web applications with Angular and Node.js. With a strong foundation in both frontend and backend technologies, I create scalable, secure, and user-friendly solutions.</p>
                <p className="text-muted-foreground leading-relaxed">My expertise includes working with MongoDB, Express, REST APIs, and implementing clean code principles following MVC architecture. I'm constantly learning and adapting to new technologies to deliver the best results.</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              {/* <Card className="border-2 card-hover text-center">
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-primary mb-1">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card> */}
              {/* <Card className="border-2 card-hover text-center">
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card> */}
              {/* <Card className="border-2 card-hover text-center">
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-accent mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
