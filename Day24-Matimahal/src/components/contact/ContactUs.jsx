import React from 'react'
import InternalHero from './InternalHero'
import Faq from '../home/Faq'
import Reviews from '../home/Reviews'
import ContactContent from './ContactContent'

function ContactUs() {
  return (
   <>
   <InternalHero/>
    <ContactContent/>
   <Faq />
   <Reviews/>
   </>
  )
}

export default ContactUs