import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

interface FormData {
  fullName: string;
  emailAddress: string;
  dateOfBirth: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  userName: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().min(8).max(12).required('Full Name is required'),
  emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
  dateOfBirth: Yup.string().required('Date of Birth is Required'),
  streetAddress: Yup.string().required('Address is required'),
  city: Yup.string().required('city is required'),
  state: Yup.string().required('state is required'),
  zipCode: Yup.string().required('zipCode is required'),
  userName: Yup.string().required('userName is required'),
  password: Yup.string().required('password is required'),
});

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
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

  const handleSubmit = (values: FormData) => {
    // Handle form submission
    console.log('Form submitted:', values);
  };

  return (
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {step === 1 && (
            <Step1
              formData={formData}
              handleChange={handleChange}
              validateStep={() => true}
              handleNextStep={handleNextStep}
            />
          )}
          {step === 2 && (
            <Step2
            formData={formData}
            handleChange={handleChange}
            validateStep={() => true}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            />
          )}
          {step === 3 && (
            <Step3
            formData={formData}
            handleChange={handleChange}
            handlePrevStep={handlePrevStep}
            handleSubmit={() => handleSubmit(formData)}
            />
          )}
        </Form>
      </Formik>
  );
};

export default App;
