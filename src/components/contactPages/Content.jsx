import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import icon10 from '../../../public/images/icon10.png';
import { toast } from 'react-toastify';
import { LoadingContext } from '../context/LoadingContext';

// Validation Schema with Yup
const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  mobile: Yup.string()
    .matches(/^[0-9]{10,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

function Content() {
  const [loading, setLoading] = useState(false);

  const { setRequestLoading } = useContext(LoadingContext);

  // useFormik hook to manage form state and validation
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setRequestLoading(true)
      try {
        await axios.post('https://api.co-ryde.com/v1/contact', values);
        toast.success('Message sent successfully!');
        resetForm();
      } catch (error) {
        toast.error('Failed to send message. Please try again.');
      } finally {
        setLoading(false);
        setRequestLoading(false)
      }
    },
  });

  return (
    <div className="w-full px-5 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto grid lg:flex items-start lg:justify-between lg:gap-10 gap-5">
        {/* Contact Information Section */}
        <div className="right">
          <h3 className="font-semibold text-3xl pb-5">Get in Touch</h3>
          <div className="info w-[90%] grid gap-5 text-gray-700">
            <div>
              <span className="flex items-center gap-3 text-[#36A690]">
                <img src={icon10} alt="icon for location" className="h-5" />
                <h5>Location</h5>
              </span>
              <p className="text-md">77 Lagos, Ikorodu Express Way, Ikotun High School.</p>
            </div>
            <div>
              <span className="flex items-center gap-3 text-[#36A690]">
                <i className="fa-solid fa-phone"></i>
                <h5>Phone number</h5>
              </span>
              <p className="text-md">+234904749030</p>
              <p className="text-md">+234904749030</p>
            </div>
            <div>
              <span className="flex items-center gap-3 text-[#36A690]">
                <i className="fa-solid fa-envelope"></i>
                <h5>Email support</h5>
              </span>
              <p className="text-md">Example@email.com</p>
              <p className="text-md">Example@email.com</p>
              <p className="text-md">Example@email.com</p>
            </div>
            <div>
              <h5 className="text-[#36A690]">Our social</h5>
              <span className="flex gap-3 items-center">
                <i className="text-md fa-brands fa-x-twitter"></i>
                <i className="text-md fa-brands fa-instagram"></i>
                <i className="text-md fa-brands fa-linkedin"></i>
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="left lg:w-[55%]" onSubmit={formik.handleSubmit}>
          <h3 className="font-semibold text-3xl pb-5">Message us</h3>
          <div className="grid lg:grid-cols-2 lg:gap-8 gap-5">
            <div className="onfrm">
                <input
                type="text"
                name="firstname"
                placeholder="First name"
                className={`outline-none border ${formik.errors.firstname && formik.touched.firstname ? 'border-red-500' : 'border-gray-400'} py-3 text-sm px-2 w-full rounded-md focus:border-[#36A690]`}
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && formik.errors.firstname && (
                <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
                )}
            </div>
            
            <div className="onfrm">
                <input
                type="text"
                name="lastname"
                placeholder="Last name"
                className={`outline-none border ${formik.errors.lastname && formik.touched.lastname ? 'border-red-500' : 'border-gray-400'} py-3 text-sm px-2 w-full rounded-md focus:border-[#36A690]`}
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
                )}
            </div>
            
            <div className="onfrm">
                <input
                type="email"
                name="email"
                placeholder="Email address"
                className={`outline-none border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-400'} py-3 text-sm px-2 w-full rounded-md focus:border-[#36A690]`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                )}
            </div>

            <div className="onfrm">
                <input
                type="text"
                name="mobile"
                placeholder="Phone number"
                className={`outline-none border ${formik.errors.mobile && formik.touched.mobile ? 'border-red-500' : 'border-gray-400'} py-3 text-sm px-2 w-full rounded-md focus:border-[#36A690]`}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
                )}
            </div>
          </div>

          <div className="onfrm flex flex-col gap-1 my-5">
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={`outline-none border ${formik.errors.subject && formik.touched.subject ? 'border-red-500' : 'border-gray-400'} py-3 text-sm px-2 w-full rounded-md focus:border-[#36A690] py-3`}
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.subject && formik.errors.subject && (
                <div className="text-red-500 text-sm">{formik.errors.subject}</div>
            )}
          </div>
          

          <div className="onfrm flex flex-col gap-1 my-5">
            <textarea
                name="message"
                placeholder="How can we help you"
                className={`outline-none border ${formik.errors.message && formik.touched.message ? 'border-red-500' : 'border-gray-400'} py-3 text-sm px-2 w-full rounded-md focus:border-[#36A690]`}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-sm">{formik.errors.message}</div>
            )}
          </div>

          <div className="button">
            <button
              type="submit"
              className="bg-[#36A690] text-white rounded-lg px-14 py-3 text-sm hover:bg-opacity-90 transition-colors delay-100 duration-300 mt-3"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Content;
