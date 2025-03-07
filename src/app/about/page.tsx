'use client';
import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <div className="container mx-auto py-8 font-sans">
            
            <div className="text-center mt-12">
                <h1 className="text-5xl font-extrabold mb-6 text-green-700">About Us</h1>
                <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
                    EcoAcademy is dedicated to educating and empowering individuals about environmental sustainability. Our mission is to inspire students, teachers, and parents to make eco-friendly choices that positively impact our planet.
                </p>
                <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
                    We offer a variety of programs and resources designed to help our community understand the importance of sustainability and how they can contribute to a greener future. From hands-on learning experiences to workshops and educational materials, we aim to make learning about the environment engaging and accessible for everyone.
                </p>
                <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
                    Join us in our journey towards a more sustainable world! Together, we can make a difference.
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mt-8">
                    <a href="mailto:contact@ecoacademy.com" className="text-gray-600 hover:text-green-600" aria-label="Email us">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </a>
                    <a href="https://youtube.com/ecoacademy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600" aria-label="Visit our YouTube channel">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                    <a href="https://facebook.com/ecoacademy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600" aria-label="Visit our Facebook page">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/company/ecoacademy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700" aria-label="Visit our LinkedIn page">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="mt-24 bg-gradient-to-r from-blue-50 to-indigo-100 p-12 rounded-lg shadow-xl text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-indigo-700">Our Values</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Education: We believe that everyone deserves to know about our world.</li>
                    <li>Community: Together, we can achieve more and create lasting impact.</li>
                    <li>Innovation: We strive to find new and effective ways to promote sustainability.</li>
                </ul>
            </div>

            {/* Contact Us Section */}
            <div className="mt-24 text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-green-700">Get in Touch</h2>
                <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
                    We'd love to hear from you! Whether you have questions, suggestions, or want to get involved, feel free to reach out.
                </p>
                <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    Contact Us
                </Link>
            </div>
            ;
        </div>
    );};

export default About;
