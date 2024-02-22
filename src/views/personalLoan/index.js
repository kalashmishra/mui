import React from "react";
import PlHomePage from "./homePage";
import PlDescriptionPage from "./plDescriptionPage";
import GetPersonalLoan from "./getPersonalLoan";
import InterestRate from "./interestRate";
import ChoosePersonalLoan from "./choosePersonalLoan";
import WhyIsPlBetter from "./whyPlBetter";
import SimpleCriteria from "./SimpleCriteria";
import DocumentsYouNeed from "./DocumentsYouNeed";
import PersonalLoanFees from "./PersonalLoanFees";
import StepByStep from "./StepByStep";
import WhenShouldYouAvoid from "./WhenShouldYouAvoid";
import WhenShouldYouTake from "./WhenShouldYouTake";
import TipsToAvoidPl from "./TipsToAvoidPl";
import HowWillLenders from "./HowWillLenders";
import TipsToGrab from "./TipsToGrab";
import FAQS from "./FAQS";
import TransformYourFinancial from "./TransformYourFinancial";

const PersonalLoan = () => {
  return (
    <>
      <PlHomePage />
      <PlDescriptionPage />
      <GetPersonalLoan />
      <InterestRate />
      <ChoosePersonalLoan />
      <WhyIsPlBetter />
      <SimpleCriteria />
      <DocumentsYouNeed />
      <PersonalLoanFees />
      <StepByStep />
      <WhenShouldYouAvoid />
      <WhenShouldYouTake />
      <TipsToAvoidPl />
      <HowWillLenders />
      <TipsToGrab />
      <FAQS />
      <TransformYourFinancial />
    </>
  );
};

export default PersonalLoan;
