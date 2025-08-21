import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

const PortfolioProjects = () => {
  const projects = [
    {
      title: "Sentiment Analysis and Summary Generation",
      period: "2024-25",
      description: "A web-based application that extracts YouTube comments, predicts sentiment using an SVM model, and generates a summary using Hugging Face. Features user behavior detection and Dirichlet Allocation model.",
      technologies: ["Python", "SVM", "Hugging Face", "Web Development", "Machine Learning"],
      highlights: [
        "Developed backend using Flask and implemented SVM for sentiment classification",
        "Achieved over 80% accuracy",
        "Integrated Facebook BART model with LDA to generate abstractive summaries"
      ]
    },
    {
      title: "LetsChat - Full-Stack Chat Application",
      period: "2024-25", 
      description: "Developing a full-stack YouTube comment sentiment analysis and summarization tool with real-time processing capabilities.",
      technologies: ["React.js", "MongoDB", "Express", "Node.js", "HTML", "Bootstrap"],
      highlights: [
        "Integrated Facebook BART model with LDA for content-based sentiment extraction",
        "Tools & technologies used: React.js, Mongo db, Express, Node.js HTML, Bootstrap"
      ]
    },
    {
      title: "Computer Vision Project",
      period: "2025",
      description: "Gained hands-on experience in OpenCV and real-time image processing with various computer vision applications.",
      technologies: ["Python", "OpenCV", "Image Processing", "Real-time Processing"],
      highlights: [
        "Mini-projects: Color detection, face recognition, image classification",
        "Empty/occupied parking detection and Blurring security system implementation"
      ]
    },
    {
      title: "News Website",
      period: "2023",
      description: "A dynamic news platform where users can view daily news and filter based on their interests with API integration.",
      technologies: ["React.js", "MongoDB", "Express", "Node.js", "HTML", "Bootstrap"],
      highlights: [
        "Uses news API to load news and user can filter news based on their interest",
        "Tools & technologies used: React.js, Mongo db, Express, Node.js HTML, Bootstrap"
      ]
    },
    {
      title: "Notes Application",
      period: "2023",
      description: "A secure note-taking application with user authentication and basic editing functionality.",
      technologies: ["React.js", "MongoDB", "Express", "Node.js", "HTML", "Bootstrap"],
      highlights: [
        "Used to create notes and provides basic editing functionality",
        "It creates a user profile for secure login and provides security to users"
      ]
    },
    {
      title: "Housing Price Prediction",
      period: "2023",
      description: "Machine learning model to predict apartment prices using user-provided details with high accuracy.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Machine Learning"],
      highlights: [
        "A user can predict the price of apartment by giving some basic details",
        "Tools & technologies used: Python, Scikit Learn, Pandas, Numpy, Matplotlib, TensorFlow"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, machine learning, and computer vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.period}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;