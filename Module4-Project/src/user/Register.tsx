import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Values {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    } as Values,
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://mock-api.arikmpt.com/api/user/register',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: values.username,
              email: values.email,
              password: values.password,
              name: values.username,
            }),
          }
        );

        if (response.ok) {
          const { data } = await response.json();
          const receivedToken = data?.token;

          if (receivedToken) {
            localStorage.setItem('token', receivedToken);

            console.log('User registered successfully:', data);
          } else {
            console.error('Token not received in the response.');
          }
        } else {
          const errorData = await response.json();
          console.error('Failed to register user:', response.status, response.statusText);
          console.error('Error details:', errorData);
        }
      } catch (error) {
        alert('Error registering user:');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-4 border">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block">Username:</label>
          <input
            type="text"
            id="username"
            {...formik.getFieldProps('username')}
            className={`w-full p-2 border ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500">{formik.errors.username}</div>
          ) : null}
        </div>
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
          className="w-full p-2 bg-green-500 text-white border-none"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
