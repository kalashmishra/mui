import React from "react";
import InstentlyCheck from "./InstentlyCheck";
import CreditRating from "./CreditRating";
import CreditBureaus from "./CreditBureaus";
import HowCreditScore from "./HowCreditScore";
import OtherContributing from "./OtherContributing";
import WhyCredmydraGiving from "./WhyCredmudraGiving";
import DoesCreditScore from "./DoesCreditScore";
import FrequntlyAsked from "./FrequntlyAsked";

const CreditScore = () => {
  return (
    <>
      <InstentlyCheck />
      <CreditRating />
      <CreditBureaus />
      <HowCreditScore />
      <OtherContributing />
      <WhyCredmydraGiving />
      <DoesCreditScore />
      <FrequntlyAsked />
    </>
  );
};

export default CreditScore;
