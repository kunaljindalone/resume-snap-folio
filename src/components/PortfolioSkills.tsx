import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const PortfolioSkills = () => {
  const skills = {
    "Programming Languages": ["Python", "C/C++", "JavaScript", "Java", "SQL"],
    "Web Development": ["ReactJS", "MERN Stack", "HTML/CSS", "Node.js", "Express"],
    "Machine Learning": ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
    "Tools & Technologies": ["Git", "GitHub", "MongoDB", "MySQL", "Bootstrap"],
    "Soft Skills": ["Communication", "Time Management", "Problem Solving", "Fast Learning", "Adaptability"]
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills acquired through academic projects and practical experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary/80 hover:bg-primary/20 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-accent border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Field of Interest
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Machine Learning • Web Development • Deep Learning • Computer Vision • Data Structures & Algorithms
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSkills;