
import HeroBanner from './HeroBanner/page'
import MissionVisionStrip from './MissionVisionStrip/page'
import AboutTeaser from './AboutTeaser/page'
import ProgrammeHighlights from './ProgrammeHighlights/page'

import Testimonials from './Testimonials/page'
import CallToAction from './CallToAction/page'


const HomePage = () => {
    return (
        <>
            <HeroBanner />
            <MissionVisionStrip />
            <AboutTeaser />
            <ProgrammeHighlights />
            {/* <LatestNews /> */}
            <Testimonials />
            <CallToAction />
        </>
    )
}

export default HomePage