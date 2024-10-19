'use client';
import React from 'react';
import Footer from '../../components/Footer'; // Assuming you have a Footer component
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <div className="container mx-auto py-8 font-sans">
            
            <div className="text-center mt-12">
                <h1 className="text-5xl font-extrabold mb-6 text-green-700">About EcoAcademy</h1>
                <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
                    EcoAcademy is dedicated to educating and empowering individuals about environmental sustainability. Our mission is to inspire students, teachers, and parents to make eco-friendly choices that positively impact our planet.
                </p>
                <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
                    We offer a variety of programs and resources designed to help our community understand the importance of sustainability and how they can contribute to a greener future. From hands-on learning experiences to workshops and educational materials, we aim to make learning about the environment engaging and accessible for everyone.
                </p>
                <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
                    Join us in our journey towards a more sustainable world! Together, we can make a difference.
                </p>
            </div>

            {/* Our Values Section */}
            <div className="mt-24 bg-gradient-to-r from-blue-50 to-indigo-100 p-12 rounded-lg shadow-xl text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-indigo-700">Our Values</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Education: We believe in the power of knowledge to drive change.</li>
                    <li>Community: Together, we can achieve more and create lasting impact.</li>
                    <li>Innovation: We strive to find new and effective ways to promote sustainability.</li>
                    <li>Integrity: We are committed to transparency and ethical practices in all our endeavors.</li>
                </ul>
            </div>

            {/* Contact Us Section */}
            <div className="mt-24 text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-green-700">Get in Touch</h2>
                <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
                    We’d love to hear from you! Whether you have questions, suggestions, or want to get involved, feel free to reach out.
                </p>
                <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    Contact Us
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default About;
