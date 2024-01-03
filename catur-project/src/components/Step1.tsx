// Step1.tsx
import React from 'react';

interface Step1Props {
  formData: {
    fullName: string;
    emailAddress: string;
    dateOfBirth: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    userName: string;
    password: string;
  };
  handleChange: (name: string, value: string) => void;
  validateStep: () => boolean;
  handleNextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange, validateStep, handleNextStep }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.name, event.target.value);
  };

  return (
    <form>
      <h2>Step 1: Personal Information</h2>
      <div>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="emailAddress">Email Address:</label>
      <input
        type="text"
        id="emailAddress"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="dateOfBirth">Date of Birth:</label>
      <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleInputChange}
      />
    </div>
    <button onClick={handleNextStep} disabled={!validateStep()}>
    Next
  </button>
    </form>
  );
};

export default Step1;
