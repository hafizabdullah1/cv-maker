import React from 'react'
import HomePage from './Screens/HomePage'
import { Routes, Route } from 'react-router-dom'
import BasicInfo from './Screens/BasicInfo'
import ContactInfo from './Screens/ContactInfo'
import Footer from './Components/Footer'
import ExperienceInfo from './Screens/ExperienceInfo'
import CompletionProfile from './Screens/CompletionProfile'
import SignInScreen from './Screens/SignInScreen'
import ReviewProfile from './Screens/ReviewProfile'
import User from './Screens/User'
import CvPdf from './Components/CvPdf'
import PDFDownload from './Components/PDFDownload'


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/SignIn' element={<SignInScreen />} />
        <Route path='/basic_info' element={<BasicInfo />} />
        <Route path='/contact_info' element={<ContactInfo />} />
        <Route path='/experience' element={<ExperienceInfo />} />
        <Route path='/completion' element={<CompletionProfile />} />
        <Route path='/review_profile' element={<ReviewProfile />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/cv' element={<PDFDownload/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
