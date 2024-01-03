// Step2.tsx
import React from 'react';

interface Step2Props {
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
  handlePrevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ formData, handleChange, validateStep, handleNextStep, handlePrevStep }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.name, event.target.value);
  };

  return (
    <form>
      <h2>Step 2: Contact Information</h2>
      <div>
      <label htmlFor="streetAddress">Street Address:</label>
      <input
        type="streetAddress"
        id="streetAddress"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="city">City:</label>
      <input
        type="city"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="state">State:</label>
      <input
        type="state"
        id="state"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="zipCode">Zip Code:</label>
      <input
        type="zipCode"
        id="zipCode"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleInputChange}
      />
    </div>
    <button onClick={handlePrevStep}>Previous</button>
    <button onClick={handleNextStep} disabled={!validateStep()}>
        Next
    </button>
    </form>
  );
};

export default Step2;
