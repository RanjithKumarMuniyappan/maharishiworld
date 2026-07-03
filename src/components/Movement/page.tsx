import BlissfulWorldPlan from "./BlissfulWorldPlan";
import FinalCTA from "./FinalCTA";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import PeaceMovement from "./PeaceMovement";
import ResearchHighlight from "./ResearchHighlight";
import Testimonials from "./Testimonials";
import PeaceAndCultureInitiatives from "./PeaceAndCultureInitiatives";



const Movement = () => {
  return (
    <div className="bg-mw-cream">
      <HeroSection />
      <IntroSection />
      <BlissfulWorldPlan />
      <PeaceMovement />
      <PeaceAndCultureInitiatives />
      <Testimonials />
      <ResearchHighlight />
      <FinalCTA />
    </div>
  )
}

export default Movement;