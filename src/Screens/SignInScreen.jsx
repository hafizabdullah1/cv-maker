import React from 'react'
import UserProfiles from '../Components/UserProfiles'
import JobSeekers from '../Components/JobSeekers'
import Employer from '../Components/Employer'
import Explore from '../Components/Explore'
import ContactUs from '../Components/ContactUs'
import SignIn from '../Components/SignIn'
import NavBar from '../Components/Navbar'

function SignInScreen() {
  return (
    <>
      <NavBar/>
      <SignIn/>
      <UserProfiles/>
      <JobSeekers/>
      <Employer/>
      <Explore/>
      <ContactUs/>
    </>
  )
}

export default SignInScreen
