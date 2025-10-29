import React, { useState, useEffect } from 'react'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route} from 'react-router-dom'
import Contactus from './pages/Contactus.jsx' 
import Service from './pages/Services.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import B2B from './pages/subHome/B2B.jsx'
import B2C from './pages/subHome/B2C.jsx'

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading or data fetch
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0d0d21]">
        {/* Tailwind Spinner */}
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <> 
   <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/b2b' element={<B2B/>} />
    <Route path='/b2c' element={<B2C/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/contact-us' element={<Contactus/>} />
    <Route path='/services' element={<Service/>} />
    <Route path='/terms' element={<TermsAndConditions/>} />
    <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
   </Routes>
 
       
    </>
  )
}

export default App
