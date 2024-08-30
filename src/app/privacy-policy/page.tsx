import Head from 'next/head';

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Privacy Policy for ArchAcademy" />
            </Head>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
                    <p className="text-gray-600 mb-6">Last updated: July 28, 2024</p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                    <p className="text-gray-700 mb-4">
                        Welcome to ArchAcademy. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our website located at [yourwebsite.com] (the "Site") and the services provided by ArchAcademy (the "Services").
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
                    <p className="text-gray-700 mb-4">
                        We collect various types of information in connection with your use of the Site and Services, including:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li><strong>Personal Information:</strong> Information that identifies you personally, such as your name, email address, and contact details.</li>
                        <li><strong>Usage Data:</strong> Information about how you use the Site, including your IP address, browser type, and usage patterns.</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track activity and store certain information.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-700 mb-4">
                        We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li>To provide, operate, and maintain our Site and Services.</li>
                        <li>To improve, personalize, and expand our Site and Services.</li>
                        <li>To understand and analyze how you use our Site and Services.</li>
                        <li>To communicate with you, including for customer support and marketing purposes.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. How We Share Your Information</h2>
                    <p className="text-gray-700 mb-4">
                        We may share your information in the following situations:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li><strong>With Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf.</li>
                        <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or to protect our rights, privacy, safety, or property.</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or other business transition, we may transfer your information to the new entity.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Choices and Rights</h2>
                    <p className="text-gray-700 mb-4">
                        You have certain rights regarding your personal information, including:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li>The right to access, update, or delete your personal information.</li>
                        <li>The right to opt-out of receiving marketing communications from us.</li>
                        <li>The right to withdraw consent to data processing where applicable.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Security</h2>
                    <p className="text-gray-700 mb-4">
                        We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Privacy Policy</h2>
                    <p className="text-gray-700 mb-4">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="text-gray-700 mb-2">Email: support@[yourwebsite.com]</p>
                    <p className="text-gray-700">Address: [ArchAcademy Address]</p>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
