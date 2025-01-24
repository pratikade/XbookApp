// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';

function Contact() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen container md:px-20 px-4 space-y-5 pt-52">
                <h2 className="text-2xl font-bold mb-6 text-pink-800 text-center">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button className="btn btn-secondary">Submit</button>
                    </div>
                    {/* <div>
                        You can contact us via <a href='www.linkedin.com/in/pratik-ade-45014825b'>Linkdin</a> of <a>Facebook</a> or <a>Instagram</a>
                    </div> */}
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
