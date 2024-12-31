'use client';

import Button from '@/components/Button';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { pricingTiers } from '@/constants/pricing';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-center text-3xl font-semibold leading-tight text-gray-200 md:text-4xl lg:text-5xl">
              Flexible plans for every need
            </h2>
            <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.title}
                  className={twMerge(
                    'mx-auto max-w-sm rounded-3xl border border-[var(--color-border)] px-6 py-12',
                    tier.className,
                  )}
                >
                  <h3
                    className={twMerge(
                      'text-4xl font-semibold',
                      tier.color === 'violet' && 'text-violet-400',
                      tier.color === 'amber' && 'text-amber-300',
                      tier.color === 'teal' && 'text-teal-300',
                    )}
                  >
                    {tier.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{tier.description}</p>
                  <div className="mt-8">
                    {typeof tier.price === 'number' && (
                      <span className="align-top text-2xl font-semibold text-gray-200">
                        ₹
                      </span>
                    )}
                    <span className="text-7xl font-semibold text-gray-200">
                      {tier.price ? tier.price : <>&nbsp;</>}
                    </span>
                  </div>
                  <Button className="mt-8" block variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                  <ul className="mt-8 flex flex-col gap-4">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-4 border-t border-[var(--color-border)] pt-4"
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="size-6 flex-shrink-0 text-violet-400"
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
}
