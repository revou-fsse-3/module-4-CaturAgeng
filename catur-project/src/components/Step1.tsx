import React from 'react';

interface Step1Props {
  formData: { fullName: string; emailAddress: string; dateOfBirth: string };
  handleChange: (name: string, value: string) => void;
  validateStep: () => boolean;
  handleNextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange, validateStep, handleNextStep }) => {
  const handleNext = () => {
    if (validateStep()) {
      handleNextStep();
    } 
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded">
      <h1 className="text-xl font-semibold mb-4">Step 1: Personal Information</h1>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="emailAddress" className="block text-gray-700 text-sm font-bold mb-2">Email Address:</label>
        <input
          type="text"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={(e) => handleChange('emailAddress', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(e) => handleChange('dateOfBirth', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Next</button>
    </form>
  );
};

export default Step1;
