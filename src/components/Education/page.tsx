
import PageHeader from "../../commonComponents/PageHeader"
import { EducationDescription, EducationTitle } from "../../constants"

import ExploreOurEducationalTiers from "./ExploreOurEducationalTiers/page";




const Education = () => {
  return (
    <div className="bg-mw-cream text-mw-green/90 ">
        <PageHeader title={EducationTitle} description={EducationDescription}/>

        <ExploreOurEducationalTiers/>
    </div>
  )
}

export default Education