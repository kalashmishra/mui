import React from 'react'
import ApplyForPersonalLoanOnline from './ApplyForPersonalLoanOnline'
import { Container } from '@mui/material'
import CheckYourEligibility from './CheckYourEligibility'
import FAQEligibility from './FAQEligibility'

const PersonalLoanEligibility = () => {
  return (
    <Container maxWidth={'xl'}>
      <ApplyForPersonalLoanOnline/>
      <CheckYourEligibility/>
      {/* <FAQEligibility/> */}
    </Container>
  )
}

export default PersonalLoanEligibility
