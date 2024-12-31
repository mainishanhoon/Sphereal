'use client';

import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { companies } from '@/constants/companies';
import { motion } from 'framer-motion';

export default function Companies() {
  return (
    <section>
      <div className="container">
        <SectionBorder>
          <SectionContent className="!pt-0">
            <h2 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
              Empowering creators at leading companies
            </h2>
            <div className="-mx-4 mt-20 flex overflow-x-clip lg:-mx-8">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-50%' }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                className="flex flex-none gap-14 px-9 sm:gap-18 md:gap-32 md:px-18"
              >
                {[...companies, ...companies].map(
                  ({ logo: Logo }, arrIndex) => (
                    <div key={arrIndex}>
                      <Logo className="h-9" />
                    </div>
                  ),
                )}
              </motion.div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
}
