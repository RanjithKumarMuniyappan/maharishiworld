
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/Home/HomePage'
import AboutUs from './components/AboutUs/page'
import Education from './components/Education/page'
import EarlyChildhoodPage from './components/EarlyChildhoodPage/page'
import SchoolEducationPage from './components/SchoolEducationPage/page'
import HigherEducationPage from './components/HigherEducationPage/page'
import CorporateEducationPage from './components/CorporateEducationPage/page'
import VedicEducationPage from './components/VedicEducationPage/page'
import SkillDevelopmentPage from './components/SkillDevelopmentPage/page'
import HealthcarePage from './components/HealthcarePage/page'
import Movement from './components/Movement/page'
import Media from './components/Media/page'
import TranscendentalMeditation from './components/TranscendentalMeditation/page'
import GoushalaAndEnvironment from './components/GoushalaAndEnvironment/page'
import DonationAndPhilanthropy from './components/DonationAndPhilanthropy/page'
import Sermons from './components/Sermons/page'
import BlogsPage from './components/Blogs/BlogsPage'
import BlogDetailPage from './components/Blogs/BlogDetailPage'

function App() {
  

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/aboutus" element={<AboutUs/>} />

            <Route path="/education" element={<Education />} />
            <Route path="/education/kids" element={<EarlyChildhoodPage />} />
            <Route path="/education/school" element={<SchoolEducationPage />} />
            <Route path="/education/higher" element={<HigherEducationPage />} />
            <Route path="/education/corporate" element={<CorporateEducationPage />} />
            <Route path="/education/vedic-science" element={<VedicEducationPage />} />
            <Route path="/education/skill-development" element={<SkillDevelopmentPage />} />

            <Route path="/healthcare" element={<HealthcarePage />} />
            <Route path="/movement" element={<Movement />  } />
            <Route path="/media" element={<Media/>} />
            <Route path="/tm" element={<TranscendentalMeditation/>} />
            <Route path="/goushala" element={<GoushalaAndEnvironment/>} />
            <Route path="/donate" element={<DonationAndPhilanthropy/>} />
            <Route path="/sermons" element={<Sermons/>} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<BlogDetailPage />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App

