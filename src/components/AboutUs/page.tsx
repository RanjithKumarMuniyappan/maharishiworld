
import JoinUs from '../../commonComponents/JoinUs'
import PageHeader from '../../commonComponents/PageHeader'
import { AboutUsDescription, AboutUsTitle } from '../../constants'
import OurFounders from './OurFounders/page'
import OurImpact from './OurImpact/page'
import OurMission from './OurMission/page'
import OurPhilosophy from './OurPhilosophy/page'
import OurStory from './OurStory/page'

const AboutUs = () => {
  return (
    <div className="bg-mw-cream text-mw-green/90 ">
        <PageHeader title={AboutUsTitle} description={AboutUsDescription}/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">

            <OurStory/>
            <OurFounders/>
            <OurPhilosophy/>
            <OurMission/>
            <OurImpact/>

            <JoinUs/>

        </div>
    </div>
  )
}

export default AboutUs