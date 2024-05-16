import React from 'react'
import SignUp from '../Components/SignUp'
import UserProfiles from '../Components/UserProfiles'
import JobSeekers from '../Components/JobSeekers'
import Employer from '../Components/Employer'
import Explore from '../Components/Explore'
import ContactUs from '../Components/ContactUs'
import NavBar from '../Components/Navbar'

function HomePage() {
  return (
    <>
      <NavBar/>
      <SignUp/>
      <UserProfiles/>
      <JobSeekers/>
      <Employer/>
      <Explore/>
      <ContactUs/>
    </>
  )
}

export default HomePage
