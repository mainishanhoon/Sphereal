'use client';

import RobotImg from '@/assets/robot.webp';
import Button from '@/components/Button';
import Image from 'next/image';
import Loader from '@/assets/loader-animated.svg';
import UnderlineImg from '@/assets/underline.svg?url';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function useMousePosition() {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useMotionValueEvent(clientX, 'change', (latest) => {
    console.log('clientX', latest);
  });

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);

    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  });

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  });

  return { xProgress, yProgress };
}

export default function Hero() {
  const { xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end start', 'start end'],
  });

  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);
  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);
  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-center text-4xl font-semibold leading-tight text-gray-100 md:text-5xl lg:text-6xl">
              Unlock the future of AI Conversations with&nbsp;
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className="absolute left-0 top-full h-4 w-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${UnderlineImg.src})`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                />
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg md:text-xl">
              Harness the power of AI with Sphereal. Elevate your productivity
              and streamline your workflow with our cutting-edge chat platform.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate mx-auto max-w-5xl">
              <div className="absolute left-1/2 top-0">
                <motion.div style={{ x: translateLargeX, y: translateLargeY }}>
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-x-[315px] -translate-y-[75px] rotate-135"
                  />
                </motion.div>
                <motion.div style={{ x: translateLargeX, y: translateLargeY }}>
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-y-[188px] translate-x-[330px] -rotate-135"
                  />
                </motion.div>
                <motion.div style={{ x: translateSmallX, y: translateSmallY }}>
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className="-translate-x-[500px] -translate-y-[360px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{ x: translateMediumX, y: translateMediumY }}
                >
                  <Planet
                    size="md"
                    color="teal"
                    className="-translate-y-[350px] translate-x-[450px] -rotate-135"
                  />
                </motion.div>
              </div>
              <div className="absolute left-0 top-[30%] z-10 hidden -translate-x-10 lg:block">
                <motion.div
                  style={{ y: transformedY }}
                  className="w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md"
                >
                  <div>
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">
                    1m ago
                  </div>
                </motion.div>
              </div>
              <div className="absolute right-0 top-[50%] z-10 hidden translate-x-10 lg:block">
                <motion.div
                  style={{ y: transformedY }}
                  className="w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md"
                >
                  <div>
                    <strong>Brainwave:</strong> I created one based on videos
                    from Frontend Tribe
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">
                    1m ago
                  </div>
                </motion.div>
              </div>
              <div className="relative mt-20 overflow-hidden rounded-2xl border-2">
                <Image alt="Robot Image" src={RobotImg} />
                <div className="absolute bottom-2 left-1/2 w-full max-w-xs -translate-x-1/2 px-4 md:bottom-4 lg:bottom-10">
                  <div className="flex w-[320px] max-w-full items-center justify-center gap-2 rounded-2xl bg-gray-950/80 px-4 py-2">
                    <Loader className="size-5 text-violet-400 md:size-6" />
                    <div className="text-xl font-semibold text-gray-100">
                      AI is generating
                      <span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
}
