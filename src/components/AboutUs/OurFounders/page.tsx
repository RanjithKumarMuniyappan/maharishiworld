import SectionTitle from "../../../commonComponents/SectionTitle"


const OurFounders = () => {
  return (
    <section>
          <SectionTitle>Our Founders</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img src="images/aboutus/Mahesh yogi.webp" alt="Maharishi Mahesh Yogi" className="w-full sm:w-40 h-auto sm:h-48 object-cover rounded-lg shadow-lg flex-shrink-0"/>
              <div>
                {/* <h3 className="text-2xl font-serif font-bold text-mw-green">His Holiness Maharishi Mahesh Yogi (1918 – 2008)</h3> */}
                <h3 className="text-2xl font-serif font-bold text-mw-green">His Holiness Maharishi Mahesh Yogi (1917 – 2008)</h3>
                <div className="mt-4 space-y-4 leading-relaxed">
                  {/* <p>Maharishi Mahesh Yogi was a physicist-turned-sage who devoted his life to spreading the benefits of meditation and Vedic science. In the mid-20th century he revived <strong className="font-semibold text-mw-green">Transcendental Meditation</strong>, a simple, natural technique that allows the mind to effortlessly transcend thought and settle into a state of deep inner silence. Under his guidance, TM was adopted by millions, including students, artists, scientists and world leaders. Maharishi also elaborated a comprehensive system of <strong className="font-semibold text-mw-green">Maharishi Vedic Science</strong>, which integrates ancient wisdom with modern scientific understanding. He believed that the true purpose of education is to develop the full potential of the individual and that a peaceful, prosperous society grows when its members enjoy inner fulfilment.</p> */}
                  <p>Maharishi Mahesh Yogi was a one of the greatest son and saint of India, known as "Himalaya Putra" who devoted his life to spreading the benefits of Indian system of Yoga, Meditation and Vedic science with its practical technologies. In the mid-20th century he introduced Transcendental Meditation, a simple, natural and effortless technique that allows the mind to transcend thought and settle into a state of deep inner silence. Under his guidance, TM was adopted by millions, including students, artists, scientists and world leaders. Maharishi also elaborated a comprehensive system of Maharishi Vedic Science, which integrates ancient wisdom with modern scientific understanding. He believed that the true purpose of education is to develop the full potential of the individual and that a peaceful, prosperous society grows when its members enjoy inner fulfilment.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img src="images/aboutus/Girish.webp" alt="Brahmachari Girish Ji" className="w-full sm:w-40 h-auto sm:h-48 object-cover rounded-lg shadow-lg flex-shrink-0"/>
              <div>
                <h3 className="text-2xl font-serif font-bold text-mw-green">Brahmachari Girish Ji</h3>
                <div className="mt-4 space-y-4 leading-relaxed">
                  <p>The stewardship of Maharishi’s legacy in India rests with Brahmachari Girish Ji. A long-time disciple and collaborator of Maharishi Mahesh Yogi, Girish Ji has tirelessly worked to expand the reach of consciousness-based education and humanitarian initiatives. Under his leadership, Maharishi World administers more than 160 educational institutions and numerous social programmes. Over 500,000 students have been trained in Vedic and modern disciplines, and around 150,000 are currently enrolled across the network. Girish Ji’s vision combines spiritual insight with practical wisdom, ensuring that each programme not only preserves Vedic tradition but also meets contemporary societal needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default OurFounders