import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { LoadingContext } from '../context/LoadingContext';

 
// Notify setup
const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

function Subscribe() {
  const [loading, setLoading] = useState(false);

  const { setRequestLoading } = useContext(LoadingContext);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setRequestLoading(true);
      try {
        // Send the email subscription request to the endpoint
        const response = await axios.post('https://api.co-ryde.com/v1/subscribe', values);
        
        // Notify success
        notifySuccess(response.data.message);
        formik.resetForm();
      } catch (error) {
        notifyError(error.response?.data?.message || 'Subscription failed. Please try again later.');
      } finally {
        setLoading(false);
        setRequestLoading(false);
      }
    },
  });

  return (
    <div className='flex items-center justify-center flex-col mb-5 py-20 space-y-8 bg-[#EDF6F4] px-10 lg:px-0'>
      <h2 className='text-[#349D89] font-bold text-3xl'>Subscribe</h2>
      <p className='font-semibold lg:w-[30vw] text-center'>
        Subscribe to stay tuned for new web design and latest updates. Let's do it!
      </p>
      <form className="flex items-center justify-center w-full" onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email Address"
          className={`delay-100 duration-300 transition-colors ease-in-out py-3 px-3 outline-none rounded-tl-lg rounded-bl-lg text-sm lg:w-[35vw] w-[70%] ${formik.touched.email && formik.errors.email ? 'border border-red-500' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <button 
          type="submit" 
          className={`bg-[#349D89] text-white py-3 rounded-tr-lg rounded-br-lg hover:bg-opacity-90 delay-100 duration-300 transition-colors lg:px-10 px-5 lg:w-auto w-[30%] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
