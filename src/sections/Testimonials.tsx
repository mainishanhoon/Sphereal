'use client';

import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { testimonials } from '@/constants/testimonials';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

export default function Testimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section id="testimonials">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient relative flex flex-col gap-12 rounded-3xl px-6 py-16 md:mx-10 md:flex-row md:px-10 lg:mx-20 lg:px-16 lg:py-24"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="absolute left-6 top-0 size-20 -translate-y-1/2 text-violet-400 md:left-10 lg:left-16"
                />
                <AnimatePresence mode="wait" initial={false}>
                  {testimonials.map((testimonial, index) =>
                    testimonialIndex === index ? (
                      <motion.blockquote
                        layout
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-12 lg:flex-row"
                      >
                        <p className="text-xl font-medium md:text-2xl">
                          {testimonial.quote}
                        </p>
                        <cite className="not-italic lg:text-right">
                          <Image
                            alt={testimonial.name}
                            src={testimonial.image}
                            className="size-28 max-w-none rounded-xl"
                          />
                          <div className="mt-4 font-bold">
                            {testimonial.name}
                          </div>
                          <div className="mt-2 text-xs text-gray-400">
                            {testimonial.title}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null,
                  )}
                </AnimatePresence>
                <motion.div
                  layout="position"
                  className="flex gap-2 md:flex-col"
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      onClick={() => setTestimonialIndex(index)}
                      className="relative isolate inline-flex size-6 items-center justify-center"
                    >
                      {testimonialIndex === index && (
                        <motion.div
                          layoutId="testimonial-dot"
                          className="border-gradient absolute -z-10 size-full rounded-full"
                        />
                      )}
                      <div className="size-1.5 rounded-full bg-gray-200" />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
}
