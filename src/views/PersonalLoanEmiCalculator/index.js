import { Container } from '@mui/material'
import React from 'react'
import EmiCalculator from './EmiCalculator'
import Process from './Process'
import Steps from './Steps'
import FAQS from './FAQS'

const PersonalLoanEmiCalculator = () => {
  return (
    // <Container maxWidth={'xl'}>
    <>
      <EmiCalculator/>
      <Process/>
      <Steps/>
      <FAQS/>
      </>
    //  {/* </Container> */}
  )
}

export default PersonalLoanEmiCalculator
