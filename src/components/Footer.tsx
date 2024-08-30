// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mt-6 border-t border-gray-200 pt-8">
      <div className="flex justify-center space-x-4">
        <Link href="/terms" className="text-gray-600 hover:text-gray-800">
          Terms and Conditions
        </Link>
        <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-800">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
