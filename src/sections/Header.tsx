'use client';

import LogoImg from '@/assets/sphereal-logo.svg?url';
import { loginItems, navItems } from '@/constants/header';
import Button from '@/components/Button';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Orbit from '@/components/Orbit';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header>
      <div className="relative z-40 border-b border-[var(--color-border)]">
        <div className="container">
          <div className="flex h-18 items-center justify-between lg:h-20">
            <div className="flex items-center gap-4">
              <div
                className="size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
                style={{
                  maskImage: `url(${LogoImg.src})`,
                  maskSize: 'contain',
                }}
              ></div>
              <div className="text-2xl font-extrabold">sphereal.ai</div>
            </div>
            <div className="hidden h-full lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="relative inline-flex h-full items-center px-10 text-xs font-bold uppercase tracking-widest text-gray-400 before:absolute before:bottom-0 before:left-0 before:h-2 before:w-px before:bg-gray-200/20 before:content-[''] last:after:absolute last:after:bottom-0 last:after:left-0 last:after:right-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden gap-4 lg:flex">
              {loginItems.map(({ buttonVariant, name, href }) => (
                <Link key={name} href={href}>
                  <Button variant={buttonVariant}>{name}</Button>
                </Link>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className="relative size-10 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]"
                onClick={() => setIsMobileNavOpen((curr) => !curr)}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      'h-0.5 w-4 -translate-y-1 bg-gray-100 transition duration-300',
                      isMobileNavOpen && 'translate-y-0 rotate-45',
                    )}
                  />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      'h-0.5 w-4 translate-y-1 bg-gray-100 transition duration-300',
                      isMobileNavOpen && 'translate-y-0 -rotate-45',
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-18 z-30 overflow-hidden bg-gray-950">
          <div className="absolute-center isolate -z-10">
            <Orbit />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[350px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[500px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[650px]" />
          </div>
          <div className="container h-full">
            <nav className="flex h-full flex-col items-center justify-center gap-4 py-8">
              {navItems.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="h-10 text-xs font-bold uppercase tracking-widest text-gray-400"
                >
                  {name}
                </Link>
              ))}
              {loginItems.map(({ buttonVariant, name, href }) => (
                <Link key={name} href={href} className="w-full max-w-xs">
                  <Button block variant={buttonVariant}>
                    {name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
