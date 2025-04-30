import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, 'Name too short').required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            message: Yup.string().min(10, 'Message too short').required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log('Form Data:', values);
            alert('Message sent successfully!');
            resetForm();
        },
    });

    return (
        <section id="contact" className="w-full px-6 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                    Have questions, need help with a booking, or want to customize your trip? We'd love to hear from you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <form onSubmit={formik.handleSubmit} className="space-y-4 p-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-500 text-sm">{formik.errors.name}</p>
                        )}

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm">{formik.errors.email}</p>
                        )}

                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Your Message"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {formik.touched.message && formik.errors.message && (
                            <p className="text-red-500 text-sm">{formik.errors.message}</p>
                        )}

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700">Customer Support</h4>
                            <p className="text-gray-600">+91 1234 432 321</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700">Email</h4>
                            <p className="text-gray-600">support@destinytravels.com</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700">Office</h4>
                            <p className="text-gray-600">Hyderabad, Telangana, India</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700">Working Hours</h4>
                            <p className="text-gray-600">Mon - Sat: 9:00 AM to 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
