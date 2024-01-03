// Step3.tsx
import React from 'react';

interface Step3Props {
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
  handlePrevStep: () => void;
  handleSubmit: () => void;
}

const Step3: React.FC<Step3Props> = ({ formData, handleChange, handlePrevStep, handleSubmit }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.name, event.target.value);
  };

  return (
    <form>
      <h2>Step 3: Account Information</h2>
      <div>
      <label htmlFor="userName">Username:</label>
      <input
        type="text"
        id="userName"
        name="userName"
        value={formData.userName}
        onChange={handleInputChange}
      />
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      </div>
      <button onClick={handlePrevStep}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Step3;
