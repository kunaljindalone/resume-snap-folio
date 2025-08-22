import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin, Send, Code } from "lucide-react";

const PortfolioContact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kunaljindalone@gmail.com",
      href: "mailto:kunaljindalone@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91-7347415081",
      href: "tel:+917347415081"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jalandhar, Punjab, India",
      href: "https://share.google/QNFf1j8DMfxktRRFO"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Kuna1jindal",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/kunal-jindal-8465891a7/",
      color: "hover:text-blue-500"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/Kunal_Jindal/", 
      color: "hover:text-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-accent border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to start a project together?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to work on challenging projects and learn new technologies. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioContact;
