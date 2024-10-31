import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { LoadingContext } from '../context/LoadingContext';
import { useModal } from '../context/ModalService';

// Notify setup
const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

function WaitList() {
  const [loading, setLoading] = useState(false); 

  const { setRequestLoading } = useContext(LoadingContext);

  const { closeModal } = useModal();
  

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      location: '',
      account_type: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('The first name is required.').max(255),
      last_name: Yup.string().required('The last name is required.').max(255),
      email: Yup.string().email('Please enter a valid email address.').required('The email address is required.').max(255),
      phone_number: Yup.string().required('The phone number is required.').max(20),
      location: Yup.string().required('The location is required.'),
      account_type: Yup.string().required('Please select an account type.').oneOf(['Ryder', 'Co-Ryder'], 'The selected account type is invalid. Please choose "Ryder" or "Co-Ryder".'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setRequestLoading(true);
      try {
        // Send the waitlist request to the endpoint
        const response = await axios.post('https://api.co-ryde.com/v1/join/waitlist', values);

        // Notify success
        notifySuccess(response.data.message);

        formik.resetForm();
        
        closeModal();
      } catch (error) {
        notifyError(error.response?.data?.message || 'Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
        setRequestLoading(false)
      }
    },
  });

  return (
    <div className='mb-5 py-20 px-5 lg:px-10 space-y-8'>
      <h2 className='text-[#349D89] font-bold text-3xl text-center'>Join the Waitlist</h2>
      <p className='font-semibold text-center lg:w-[30vw] mx-auto'>
        Fill in the details below to join our waitlist for updates.
      </p>
      <form className="flex flex-col w-full max-w-md space-y-5 mx-auto" onSubmit={formik.handleSubmit}>
        <div className='text-left'>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className={`border border-[#349D89] py-3 px-3 rounded text-sm w-full ${formik.touched.first_name && formik.errors.first_name ? 'border-red-500' : 'border-gray-300'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
          />
          {formik.touched.first_name && formik.errors.first_name && (
            <div className="text-red-500 text-sm">{formik.errors.first_name}</div>
          )}
        </div>

        <div className='text-left'>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className={`border border-[#349D89] py-3 px-3 rounded text-sm w-full ${formik.touched.last_name && formik.errors.last_name ? 'border-red-500' : 'border-gray-300'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
          />
          {formik.touched.last_name && formik.errors.last_name && (
            <div className="text-red-500 text-sm">{formik.errors.last_name}</div>
          )}
        </div>

        <div className='text-left'>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={`border border-[#349D89] py-3 px-3 rounded text-sm w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className='text-left'>
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            className={`border border-[#349D89] py-3 px-3 rounded text-sm w-full ${formik.touched.phone_number && formik.errors.phone_number ? 'border-red-500' : 'border-gray-300'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone_number}
          />
          {formik.touched.phone_number && formik.errors.phone_number && (
            <div className="text-red-500 text-sm">{formik.errors.phone_number}</div>
          )}
        </div>

        <div className='text-left'>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className={`border border-[#349D89] py-3 px-3 rounded text-sm w-full ${formik.touched.location && formik.errors.location ? 'border-red-500' : 'border-gray-300'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location && (
            <div className="text-red-500 text-sm">{formik.errors.location}</div>
          )}
        </div>

        <div className='text-left'>
          <select
            name="account_type"
            className={`border border-[#349D89] py-3 px-3 rounded text-sm w-full ${formik.touched.account_type && formik.errors.account_type ? 'border-red-500' : 'border-gray-300'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.account_type}
          >
            <option value="" label="Select account type" />
            <option value="Ryder" label="Ryder" />
            <option value="Co-Ryder" label="Co-Ryder" />
          </select>
          {formik.touched.account_type && formik.errors.account_type && (
            <div className="text-red-500 text-sm">{formik.errors.account_type}</div>
          )}
        </div>

        <button 
          type="submit" 
          className={`bg-[#349D89] text-white py-3 rounded hover:bg-opacity-90 transition-opacity duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Join Waitlist'}
        </button>
      </form>
    </div>
  );
}

export default WaitList;
