import React from 'react'
import ApplyOnline from './ApplyOnline'
import { Container } from '@mui/material'
import GetPersonalLoan from './GetPersonalLoan'

const PersonalLoanInterestRate = () => {
  return (
    <Container maxWidth={'xl'}>
      <ApplyOnline/>
      <GetPersonalLoan/>
    </Container>
  )
}

export default PersonalLoanInterestRate
