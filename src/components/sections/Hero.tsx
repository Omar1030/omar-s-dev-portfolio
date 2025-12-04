import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-secondary/10 to-background -z-10" />

      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Omar Abdelmoaty</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6">Full-Stack Developer</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Node.js Developer. I architect and deliver secure, fast RESTful APIs and manage diverse data NoSQL to ensure optimal backend performance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2" asChild>
              <a href="/omar-abdelmoaty-CV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
