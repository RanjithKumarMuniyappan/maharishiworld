import { MISSION_PILLARS } from "../../../constants"


const MissionVisionStrip = () => {
    return (
        <section className="bg-mw-cream py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {MISSION_PILLARS.map((pillar) => (
                        <div key={pillar.title} className="flex flex-col items-center">
                            {/* {pillar.icon} */}
                            <img className="w-16 h-16" src={pillar.icon}/>
                            <h3 className="text-xl font-serif font-bold text-mw-green mt-4">{pillar.title}</h3>
                            <p className="text-mw-green/80 mt-2">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MissionVisionStrip