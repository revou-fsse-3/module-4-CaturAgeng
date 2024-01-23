import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';
import { NavigateProps } from '../NavigateProps/NavigateProps.ts';

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://mock-api.arikmpt.com/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        const data = await response.json();
        console.log(data);

        if (data?.data.token) {
          localStorage.setItem('token', data.data.token);

          const navigationProps: NavigateProps = {
            to: '/list',
          };
          Navigate(navigationProps);
        } else {
          console.error('Failed to log in:', response.status, response.statusText);
        }
      } catch (error) {
        alert('Error logging in:');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-4 border">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="text"
            id="email"
            {...formik.getFieldProps('email')}
            className={`w-full p-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps('password')}
            className={`w-full p-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white border-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
