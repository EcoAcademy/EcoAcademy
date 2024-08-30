import Head from 'next/head';

const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms and Conditions</title>
                <meta name="description" content="Terms and Conditions for EcoAcademy" />
            </Head>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Terms and Conditions</h1>
                    <p className="text-gray-600 mb-6">Last updated: July 28, 2024</p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                    <p className="text-gray-700 mb-4">
                        Welcome to EcoAcademy! These Terms and Conditions ("Terms") govern your use of our website located at [yourwebsite.com] (the "Site") and the services provided by EcoAcademy (the "Services"). By accessing or using the Site and Services, you agree to comply with and be bound by these Terms.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Changes to These Terms</h2>
                    <p className="text-gray-700 mb-4">
                        EcoAcademy reserves the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of the Site</h2>
                    <p className="text-gray-700 mb-4">
                        You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You must not use the Site:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li>In any way that violates any applicable local, national, or international law or regulation.</li>
                        <li>For any unauthorized or fraudulent purpose.</li>
                        <li>To transmit any harmful or malicious code.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
                    <p className="text-gray-700 mb-4">
                        The content, features, and functionality of the Site are and will remain the exclusive property of EcoAcademy and its licensors. The content is protected by copyright, trademark, and other laws.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Accounts</h2>
                    <p className="text-gray-700 mb-4">
                        To access certain features of the Site, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
                    <p className="text-gray-700 mb-4">
                        EcoAcademy reserves the right to terminate or suspend your account and access to the Site or Services, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Site.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Disclaimer of Warranties</h2>
                    <p className="text-gray-700 mb-4">
                        The Site and Services are provided "as is" and "as available" without any warranties of any kind, either express or implied. EcoAcademy disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
                    <p className="text-gray-700 mb-4">
                        In no event shall EcoAcademy, its affiliates, or their licensors be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or in connection with your use of the Site or Services.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
                    <p className="text-gray-700 mb-4">
                        These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles. Any disputes arising from these Terms or your use of the Site shall be resolved in the courts of [Your State/Country].
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <p className="text-gray-700 mb-4">Email: support@[yourwebsite.com]</p>
                    <p className="text-gray-700">Address: [EcoAcademy Address]</p>
                </div>
            </div>
        </>
    );
};

export default Terms;
