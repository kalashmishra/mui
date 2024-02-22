import React from 'react'
import PersonalLoanForMedicalEmergenciesPage1 from './PlForMedicalEmergenciesPage1'
import PlForMedicalEmergenciesPage2 from './PlForMedicalEmergenciesPage2'
import LendersThatOffer from './LendersThatOffer'
import FeaturesBenefitsOfMedicalLoan from './FeaturesAndBenefitsOfMedicalLoan'
import MedicalLoanEligibility from './MedicalLoanEligibility'
import FactorsAffecting from './FactorsAffecting'
import DocumentsRequiredForMedical from './DocumentsRequiredForMedical'
import StepsToApply from './StepsToApply'
import WhyDoesTaking from './WhyDoesTaking'
import FAQSOnPersonalLoan from './FAQSOnPersonalLoan'
import TransformYourFinancialFuture from './TransformYourFinancialFuture'

const PersonalLoanForMedical = () => {
  return (
    <>
      <PersonalLoanForMedicalEmergenciesPage1/>
      <PlForMedicalEmergenciesPage2/>
      <LendersThatOffer/>
      <FeaturesBenefitsOfMedicalLoan/>
      <MedicalLoanEligibility/>
      <FactorsAffecting/>
      <DocumentsRequiredForMedical/>
      <StepsToApply/>
      <WhyDoesTaking/>
      <FAQSOnPersonalLoan/>
      <TransformYourFinancialFuture/>
    </>
  )
}

export default PersonalLoanForMedical
