import React from 'react';

interface Step3Props {
  formData: { userName: string; password: string };
  handlePrevStep: () => void;
  handleSubmit: () => void;
  handleChange: (name: string, value: string) => void;
}

const Step3: React.FC<Step3Props> = ({ formData, handlePrevStep, handleSubmit, handleChange }) => {
  return (
    <form className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded">
      <h1 className="text-xl font-semibold mb-4">Step 3: Account Information</h1>
      <div className="mb-4">
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={(e) => handleChange('userName', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button onClick={handlePrevStep} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Previous</button>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Submit</button>
    </form>
  );
};

export default Step3;
