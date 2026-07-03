import SectionTitle from "../../../commonComponents/SectionTitle"


const OurImpact = () => {
  return (
    <section>
      <SectionTitle>Our Impact</SectionTitle>
      <ul className="max-w-4xl mx-auto space-y-4 text-lg">
        <li className="flex items-start">
          <span className="text-mw-gold mr-3 mt-1">&#10003;</span>
          <div>
            <strong className="font-semibold text-mw-green">Education:</strong>
            Maharishi World administers a network of schools and colleges across India, ranging from <em>Maharishi Kids Home</em> preschools to the nationally acclaimed <em>Maharishi Vidya Mandir</em> schools and internationally recognised universities such as the <em>Maharishi Mahesh Yogi Vedic University and Maharishi University of Management & Technology.</em> These institutions serve over <strong className="font-semibold text-mw-green">150,000 students</strong> and employ thousands of educators committed to consciousness-based teaching.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-mw-gold mr-3 mt-1">&#10003;</span>
          <div>
            <strong className="font-semibold text-mw-green">Healthcare:</strong>
            {/* The <em>Maharishi Vedic Health Centre </em>and the <em>Multispeciality Ayurveda Health Awareness program </em>bring benefits of Indian authentic health science– Ayurveda and modern wellness practices to thousands of health seekers each year, focusing on prevention oriented health care and natural healing. */}
            The Maharishi Vedic Health Centre and the Multispeciality Ayurveda Health Awareness program bring Ayurveda and modern wellness practices to thousands of patients each year, focusing on prevention, natural healing and holistic health.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-mw-gold mr-3 mt-1">&#10003;</span>
          <div>
            <strong className="font-semibold text-mw-green">Peace & Culture:</strong>
            Programmes like the <em>Maharishi World Peace Movement, Maharishi Ideal India Campaign, Vedic Life Training Program</em> and the <em>Bliss Residency </em>cultivate inner peace and collective coherence, while the <em>Maharishi Vedic Cultural Centre </em>and <em>Maharishi Smarak</em> preserve and celebrate Vedic heritage.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-mw-gold mr-3 mt-1">&#10003;</span>
          <div><strong className="font-semibold text-mw-green">Media & Outreach:</strong>
            Through platforms such as the <em>Maharishi Digital Media House, Mahamedia News Service, Ramraj TV </em>and <em>Maharishi’s Programmes in India</em>, we disseminate life supporting teachings, news and cultural content to a global audience.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-mw-gold mr-3 mt-1">&#10003;</span>
          <div>
            <strong className="font-semibold text-mw-green">Environment & Social Services:</strong>
            Initiatives like the <em>Maharishi Gaushala & Prashikshan Kendra (Maharishi Dairy and Training Centre), Maharishi Nursery and Vedic Greens </em>encourage sustainable agriculture and animal welfare, empowering rural communities through training of farmers and rural citizens.
          </div>
        </li>
      </ul>
    </section>
  )
}

export default OurImpact