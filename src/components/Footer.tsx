import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const footerLinks = {
    products: [
      { label: 'Men', href: '#' },
      { label: 'Women', href: '#' },
      { label: 'Kids', href: '#' },
      { label: 'Customise', href: '#' },
    ],
    help: [
      { label: 'Order Status', href: '#' },
      { label: 'Shipping & Delivery', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Investors', href: '#' },
      { label: 'Sustainability', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: '/x.svg', href: '#', label: 'Twitter' },
    { icon: '/facebook.svg', href: '#', label: 'Facebook' },
    { icon: '/instagram.svg', href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="flex h-16 items-center justify-between">
          {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                <Image
                    src="/logo.svg"
                    alt="Nike"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                />
                </Link>
            </div>
            </div>
          
          {/* Products Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Help</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{social.label}</span>
                  <Image src={social.icon} alt={social.label} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Nike, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
