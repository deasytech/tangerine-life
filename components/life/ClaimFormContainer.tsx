'use client';

import React, { useState } from 'react';
import { ProgressBar } from '@/components/ProgressBar';
import MakeClaimPersonalForm from '@/components/life/forms/make-claim-personal-form';
import MakeClaimBankForm from '@/components/life/forms/make-claim-bank-form';
import MakeClaimParticularsForm from '@/components/life/forms/make-claim-particulars-form';

const ClaimFormContainer = () => {
  const [ step, setStep ] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="text-center mb-12 mt-6">
      <p className="text-base font-gilroy-semibold text-green-base">
        {step === 1 && "Personal Information"}
        {step === 2 && "Bank Details"}
        {step === 3 && "Particulars of Payee & Witness"}
      </p>
      <div className="max-w-sm mx-auto mt-2 mb-10">
        <ProgressBar step={step} totalSteps={3} />
      </div>
      {step === 1 && <MakeClaimPersonalForm onNext={handleNextStep} />}
      {step === 2 && <MakeClaimBankForm onNext={handleNextStep} onPrevious={handlePreviousStep} />}
      {step === 3 && <MakeClaimParticularsForm onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default ClaimFormContainer;
