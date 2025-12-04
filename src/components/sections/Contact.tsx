import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:omarabdelmoaty816@gmail.com",
      displayText: "omarabdelmoaty816@gmail.com",
      color: "text-primary",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Omar1030",
      displayText: "github.com/Omar1030",
      color: "text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/omarabdelmoaty816/",
      displayText: "linkedin.com/in/omarabdelmoaty816",
      color: "text-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 card-hover animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-2 card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className={`p-2 rounded-lg bg-background`}>
                      <link.icon className={`w-6 h-6 ${link.color}`} />
                    </div>
                    <div>
                      <div className="font-medium">{link.label}</div>
                      <div className="text-sm text-muted-foreground">{link.displayText}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 card-hover">
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">Looking for a dedicated backend developer? Let's discuss how I can help bring your project to life!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
