import React from "react";
import PersonalLoanForDebtConsolidation from "./PersonalLoanForDebtConsolidation";
import DebtConsolidationLoan from "./DebtConsolidationLoan";
import FeaturesBenefitsOfDebt from "./FeaturesBenefitsOfDebt";
import EligibilityCriteria from "./EligibilityCriteria";
import DocumentsRequiredToApply from "./DocumentsRequiredToApply";
import StepByStepProcess from "./StepByStepProcess";
import WillConsolidatingDebt from "./WillConsolidationgDebt";
import TopThreeThings from "./TopThreeThings";
import KnowTheRight from "./KnowTheRight";
import DebtConsolidationVsBalance from "./DebtConsolidationVsBalance";
import FAQS from "./FAQSAboutPlForDebt";

const PersonalLoanForDebt = () => {
  return (
    <>
      <PersonalLoanForDebtConsolidation />
      <DebtConsolidationLoan />
      <FeaturesBenefitsOfDebt />
      <EligibilityCriteria />
      <DocumentsRequiredToApply />
      <StepByStepProcess />
      <WillConsolidatingDebt />
      <TopThreeThings />
      <KnowTheRight />
      <DebtConsolidationVsBalance />
      <FAQS />
    </>
  );
};

export default PersonalLoanForDebt;
