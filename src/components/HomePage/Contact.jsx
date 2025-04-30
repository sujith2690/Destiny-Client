import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="w-full px-6 py-16 bg-gradient-to-br from-blue-50 to-blue-100" >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                    Have questions, need help with a booking, or want to customize your trip? We'd love to hear from you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {/* Contact Form */}
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-6">
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

    )
}

export default Contact