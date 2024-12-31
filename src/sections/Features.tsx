'use client';

import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Orbit from '@/components/Orbit';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { features, logos } from '@/constants/features';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="md:px-20 lg:px-40">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold leading-tight text-gray-200 md:text-4xl lg:text-5xl">
                  Your AI-powered collboration companion
                </h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="size-6 text-violet-400"
                      />
                      <span className="text-xl font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-16">Try it Now</Button>
              </div>
              <div className="flex flex-shrink-0 justify-center">
                <div className="relative flex size-[300px] flex-shrink-0 md:size-[450px]">
                  <div className="absolute inset-0">
                    <Orbit className="size-[270px] md:size-[400px]" />
                  </div>
                  <div className="absolute-center">
                    <Orbit className="size-[180px] md:size-[300px]" />
                  </div>
                  <div className="absolute-center">
                    <Logo className="size-24" />
                  </div>
                  {logos.map(({ src, alt, rotate }) => (
                    <motion.div
                      key={alt}
                      initial={{ rotate: rotate }}
                      animate={{
                        rotate: [
                          rotate,
                          rotate + 45,
                          rotate + 45,
                          rotate + 90,
                          rotate + 90,
                          rotate + 135,
                          rotate + 135,
                          rotate + 180,
                          rotate + 180,
                          rotate + 225,
                          rotate + 225,
                          rotate + 270,
                          rotate + 270,
                          rotate + 315,
                          rotate + 315,
                          rotate + 360,
                          rotate + 360,
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 10 }}
                      className="absolute inset-0"
                    >
                      <motion.div
                        initial={{
                          translate: '-50%,-50%',
                          rotate: -rotate,
                        }}
                        animate={{
                          rotate: [
                            -rotate,
                            -rotate - 45,
                            -rotate - 45,
                            -rotate - 90,
                            -rotate - 90,
                            -rotate - 135,
                            -rotate - 135,
                            -rotate - 180,
                            -rotate - 180,
                            -rotate - 225,
                            -rotate - 225,
                            -rotate - 270,
                            -rotate - 270,
                            -rotate - 315,
                            -rotate - 315,
                            -rotate - 360,
                            -rotate - 360,
                          ],
                        }}
                        transition={{ repeat: Infinity, duration: 10 }}
                        className="absolute left-0 top-1/2 inline-flex size-10 -translate-x-1/2 -translate-y-1/2 -rotate-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-gray-950 md:size-14"
                      >
                        <Image
                          src={src}
                          alt={alt}
                          className="size-6 md:size-9"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
}
