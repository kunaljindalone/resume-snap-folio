import PortfolioHero from "./PortfolioHero";
import PortfolioSkills from "./PortfolioSkills";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioEducation from "./PortfolioEducation";
import PortfolioContact from "./PortfolioContact";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <PortfolioSkills />
      <PortfolioProjects />
      <PortfolioEducation />
      <PortfolioContact />
    </div>
  );
};

export default Portfolio;