import React, { useState } from 'react';
import { Mail, Twitter, Github, Linkedin, ArrowRight } from 'lucide-react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  const footerLinks = {
    'Platform': [
      { name: 'News', url: '/news' },
      { name: 'Markets', url: '/markets' },
      { name: 'Analysis', url: '/analysis' },
      { name: 'Guides', url: '/guides' },
    ],
    'Categories': [
      { name: 'Company Intelligence', url: '/category/company-intelligence' },
      { name: 'Governance', url: '/category/governance' },
      { name: 'Research', url: '/category/research' },
      { name: 'Policy', url: '/category/policy' },
    ],
    'Resources': [
      { name: 'About Us', url: '/about' },
      { name: 'Contact', url: '/contact' },
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms of Service', url: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, url: 'https://github.com', label: 'Github' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h1 className="section-header text-white mb-4">
              Cryp<span className="text-[#f0ac10]">Lounge</span>
            </h1>
            <p className="news-body-md text-gray-400 mb-6 max-w-md">
              Your premier destination for cryptocurrency news, market analysis, and blockchain insights. Stay ahead with real-time updates and expert coverage.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mb-6">
              <h3 className="card-title text-white mb-3">Subscribe to Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 text-white px-10 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f0ac10]/50 news-body-sm placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#f0ac10] to-[#ffcc00] text-black font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_15px_#f0ac10] transition-all duration-300 news-category"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="card-title text-white mb-3">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/5 hover:bg-[#f0ac10] rounded-full flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="space-y-6">
            <h3 className="card-title text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks['Platform'].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="news-body-sm text-gray-400 hover:text-[#f0ac10] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="card-title text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks['Categories'].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="news-body-sm text-gray-400 hover:text-[#f0ac10] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="card-title text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks['Resources'].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="news-body-sm text-gray-400 hover:text-[#f0ac10] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="news-date-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} CrypLounge. All rights reserved.
            </p>
            <div className="flex gap-6 flex-wrap justify-center md:justify-end">
              <a href="/privacy" className="news-date-sm text-gray-500 hover:text-[#f0ac10] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="news-date-sm text-gray-500 hover:text-[#f0ac10] transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="news-date-sm text-gray-500 hover:text-[#f0ac10] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;