import { Button } from "@/components/ui/button";
import link from 'react-router-dom';
import { Github, Linkedin, Code, Mail, ExternalLink } from "lucide-react";

const PortfolioHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-secondary border-4 border-primary/30 shadow-glow flex items-center justify-center">
            <Code className="w-16 h-16 text-primary" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Kunal Jindal
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            B.Tech IT Student & Full-Stack Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about Machine Learning, Web Development, and Computer Vision. 
            Building impactful solutions with modern technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => {
                const contactSection = document.getElementById('contact_me');
                contactSection.scrollIntoView();
              }}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
            <a href='./KunalJindalResume_21_Aug2025.pdf' target="_blank">
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
            >
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View Resume
            </Button>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/Kuna1jindal", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kunal-jindal-8465891a7/", label: "LinkedIn" },
              { icon: Code, href: "https://leetcode.com/u/Kunal_Jindal/", label: "LeetCode" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
