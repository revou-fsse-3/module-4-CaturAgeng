import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    userName: '',
    password: '',
  });

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateStep1 = () => {
    // Add validation logic for Step 1
    return true; // Return true if validation passes
  };

  const validateStep2 = () => {
    // Add validation logic for Step 2
    return true; // Return true if validation passes
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="App">
      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          validateStep={validateStep1}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          validateStep={validateStep2}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          handleChange={handleChange}
          handlePrevStep={handlePrevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default App;
