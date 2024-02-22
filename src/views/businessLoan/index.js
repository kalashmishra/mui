import React from "react";
import BlHomePage from "./homePage";
import WhatBusinessLoan from "./whatBusinessLoan";
import ChooseCredmudraForBl from "./ChooseCredmudraForBl";
import FeaturesBenefitsBl from "./FeaturesBenefitsBl";
import InterestRate from "./InterestRate";
import EligibilityCriteria from "./EligibilityCriteria";
import DocumentRequired from "./DocumentRequired";
import StepsByStep from "./StepByStep";
import WhatAreType from "./WhatAreType";
import FactorsConsider from "./FactorsConsider";
import FAQs from "./FAQs";

const BusinessLoan = () => {
  return (
    <>
      <BlHomePage />
      <WhatBusinessLoan />
      <ChooseCredmudraForBl />
      <FeaturesBenefitsBl />
      <InterestRate />
      <EligibilityCriteria />
      <DocumentRequired />
      <StepsByStep />
      <WhatAreType />
      <FactorsConsider />
      <FAQs />
    </>
  );
};

export default BusinessLoan;
