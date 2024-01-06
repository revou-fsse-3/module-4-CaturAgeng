import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

interface FormValues {
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

const SignupForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      dateOfBirth: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      userName: '',
      password: '',
    } as FormValues,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, 'Must be less than 15 characters')
        .required('Full Name Required'),
      emailAddress: Yup.string().email('Invalid email address')
        .required('Email Address Required'),
      dateOfBirth: Yup.string()
        .required('Date of Birth is Required'),
      streetAddress: Yup.string()
        .max(50, 'Must be less than 50 characters')
        .required('Street Address Required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zipCode: Yup.string().required('Zip Code is required'),
      userName: Yup.string().required('User Name is required'),
      password: Yup.string().required('Password is required'),
      
    }),
    onSubmit: values => {
      // Untuk handle logika pengiriman formulir 
      alert(JSON.stringify(values, null, 2));
    },
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Personal Information</h2>
            <div>
            <label htmlFor="fullName" className="block font-bold mb-1">Full Name:</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="w-full p-2 border border-solid border-gray-300 rounded box-border"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div>{formik.errors.fullName}</div>
            ) : null}
            </div>
            <div>
            <label htmlFor="emailAddress" className="block font-bold mb-1">Email Address:</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailAddress}
              className="w-full p-2 border border-solid border-gray-300 rounded box-border"
            />
            {formik.touched.emailAddress && formik.errors.emailAddress ? (
              <div>{formik.errors.emailAddress}</div>
            ) : null}
            </div>
            <div>
            <label htmlFor="dateOfBirth" className="block font-bold mb-1">Date of Birth:</label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
              className="w-full p-2 border border-solid border-gray-300 rounded box-border"
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
              <div>{formik.errors.dateOfBirth}</div>
            ) : null}
            </div>
            <button type="button" onClick={nextStep} className="bg-blue-500 text-white p-2 md:p-3 rounded">
              Selanjutnya
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Contact Information</h2>
            <div>
            <label htmlFor="streetAddress">Street Address:</label>
            <input
              id="streetAddress"
              name="streetAddress"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.streetAddress}
            />
            {formik.touched.streetAddress && formik.errors.streetAddress ? (
              <div>{formik.errors.streetAddress}</div>
            ) : null}
            <label htmlFor="city">City:</label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <div>{formik.errors.city}</div>
            ) : null}
            <label htmlFor="state">State:</label>
            <input
              id="state"
              name="state"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state ? (
              <div>{formik.errors.state}</div>
            ) : null}
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
            />
            {formik.touched.zipCode && formik.errors.zipCode ? (
              <div>{formik.errors.zipCode}</div>
            ) : null}
            </div>
            <button type="button" onClick={prevStep}>
              Sebelumnya
            </button>
            <button type="button" onClick={nextStep}>
              Selanjutnya
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Account Information</h2>
            <div>
            <label htmlFor="userName">User Name:</label>
            <input
              id="userName"
              name="userName"
              type="userName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
            ) : null}
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            </div>
            <button type="button" onClick={prevStep}>
              Sebelumnya
            </button>
            <button type="submit">Kirim</button>
          </div>
        );
      default:
        return null;
    }
  };

  return <form onSubmit={formik.handleSubmit}>{renderStep()}</form>;
};

export default SignupForm;
