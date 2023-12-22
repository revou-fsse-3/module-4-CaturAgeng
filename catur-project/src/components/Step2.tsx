import React from 'react';

interface Step2Props {
  formData: { streetAddress: string; city: string; state: string; zipCode: string };
  handleChange: (name: string, value: string) => void;
  validateStep: () => boolean;
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({
  formData,
  handleChange,
  validateStep,
  handleNextStep,
  handlePrevStep,
}) => {
  const handleNext = () => {
    if (validateStep()) {
      handleNextStep();
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded">
      <h1 className="text-xl font-semibold mb-4">Step 2: Contact Information</h1>
      <div className="mb-4">
        <label htmlFor="streetAddress">Street Address:</label>
        <input
          type="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={(e) => handleChange('streetAddress', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city">City:</label>
        <input
          type="city"
          id="city"
          value={formData.city}
          onChange={(e) => handleChange('city', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state">State:</label>
        <input
          type="state"
          id="state"
          value={formData.state}
          onChange={(e) => handleChange('state', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="zipCode"
          id="zipCode"
          value={formData.zipCode}
          onChange={(e) => handleChange('zipCode', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button onClick={handlePrevStep} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Previous</button>
      <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Next</button>
    </form>
  );
};

export default Step2;
