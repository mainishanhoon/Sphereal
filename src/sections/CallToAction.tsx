'use client';

import Button from '@/components/Button';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import UnderlineImg from '@/assets/underline.svg?url';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,

  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useState } from 'react';

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

export default function CallToAction() {
  const { xProgress, yProgress } = useMousePosition();

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);
  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);
  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']);

  return (
    <section>
      <div className="container py-8">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]" />
            <div className="absolute inset-0 -z-10">
              <Orbit className="absolute-center size-[200px]" />
              <Orbit className="absolute-center size-[350px]" />
              <Orbit className="absolute-center size-[500px]" />
              <Orbit className="absolute-center size-[650px]" />
              <Orbit className="absolute-center size-[800px]" />
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateLargeX, y: translateLargeY }}>
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[200px] translate-y-[200px] rotate-45"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateLargeX, y: translateLargeY }}>
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-y-[200px] translate-x-[250px] -rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateMediumX, y: translateMediumY }}>
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-x-[500px] rotate-90"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateMediumX, y: translateMediumY }}>
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-y-[100px] translate-x-[500px] -rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateSmallX, y: translateSmallY }}>
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-x-[400px] -translate-y-[250px] rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateSmallX, y: translateSmallY }}>
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="translate-x-[400px] translate-y-[150px] -rotate-45"
                />
              </motion.div>
            </div>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight text-gray-200 md:text-4xl lg:text-5xl">
              Join the AI Revolution with&nbsp;
              <span className="relative isolate">
                <span>Sphereal</span>
                <span
                  className="absolute left-0 top-full h-4 w-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${UnderlineImg.src})`,
                    maskSize: 'contain',
                    maskPosition: 'top',
                    maskRepeat: 'no-repeat',
                  }}
                />
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xl">
              Experience the transformative power of AI with Sphereal. Boost
              your productivity and streamline your workflow with our innovative
              AI chat platform.
            </p>
            <div className="mt-10 flex justify-center">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
}
