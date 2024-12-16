import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from './footer/FooterNav';
import { FooterSocial } from './footer/FooterSocial';
import { FooterNewsletter } from './footer/FooterNewsletter';
import { Logo } from './logo/Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Logo className="mb-6" />
            <p className="text-slate-400 font-body mb-6">
              Pioneering the future of web design through innovative technology and human creativity.
            </p>
            <FooterSocial />
          </div>

          {/* Navigation */}
          <FooterNav />

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-slate-400 font-body">
              <li>
                <a href="tel:+447300792357" className="hover:text-blue-400 transition-colors">
                  +44 7300 792357
                </a>
              </li>
              <li>
                <a href="mailto:contact@bit2bytesolutions.com" className="hover:text-blue-400 transition-colors">
                  contact@bit2bytesolutions.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <FooterNewsletter />
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="text-center text-slate-400 font-body">
            <p>
              © {currentYear}{' '}
              <Link 
                to="/" 
                className="hover:text-blue-400 transition-colors font-medium"
                aria-label="Go to Bit2Byte homepage"
              >
                Bit2Byte
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};