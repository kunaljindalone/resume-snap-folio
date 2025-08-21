import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const PortfolioEducation = () => {
  const education = [
    {
      institution: "Dr. B.R. Ambedkar National Institute of Technology Jalandhar (NIT)",
      degree: "B.Tech, Information Technology",
      period: "2022-2026",
      cgpa: "7.47",
      location: "Jalandhar, Punjab"
    },
    {
      institution: "Innocent Hearts Jalandhar",
      degree: "Class 12th",
      period: "2021",
      percentage: "93.6%",
      location: "Jalandhar, Punjab"
    },
    {
      institution: "St. Manu's Convent School",
      degree: "Class 10th", 
      period: "2019",
      percentage: "87.4%",
      location: "Jalandhar, Punjab"
    }
  ];

  const experience = {
    title: "Intern - Python with Machine Learning",
    company: "Pie Infotech",
    period: "Jan 2025 - July 2025",
    description: "Gained practical experience in Python programming and machine learning algorithms, working on real-world projects and contributing to the development team."
  };

  const certificates = [
    "Machine Learning Specialization",
    "Web Development Bootcamp", 
    "Data Structures and Algorithms",
    "Deep Neural Networks"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and professional experience in technology and software development
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary" />
            Professional Experience
          </h3>
          <Card className="p-6 bg-gradient-accent border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-1">{experience.title}</h4>
                <p className="text-lg text-primary font-medium mb-2">{experience.company}</p>
              </div>
              <Badge variant="secondary" className="w-fit">
                <Calendar className="w-3 h-3 mr-1" />
                {experience.period}
              </Badge>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </Card>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-primary" />
            Academic Background
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-lg text-muted-foreground font-medium mb-2">{edu.degree}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <Badge variant="outline" className="border-primary/30 text-primary mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.period}
                    </Badge>
                    {edu.cgpa && (
                      <Badge variant="secondary">
                        CGPA: {edu.cgpa}
                      </Badge>
                    )}
                    {edu.percentage && (
                      <Badge variant="secondary">
                        {edu.percentage}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary" />
            Certifications
          </h3>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors">
                  <Award className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioEducation;
