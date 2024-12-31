'use client';

import { socialLinks } from '@/constants/footer';
import { navItems } from '@/constants/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll/modules';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <h2 className="text-2xl font-extrabold">sphereal.ai</h2>
          <nav className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            {navItems.map((item) => (
              <Scroll
                key={item.href}
                to={item.href}
                spy={true}
                smooth={true}
                duration={1000}
                className="cursor-pointer text-xs font-bold uppercase tracking-widest text-gray-400"
              >
                {item.name}
              </Scroll>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row-reverse md:justify-between">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-gray-900">
                  <FontAwesomeIcon icon={link.icon} className="size-4" />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            &copy; Frontend Tribe, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
