import RobotImg from '@/assets/robot.webp';
import Button from '@/components/Button';
import Image from 'next/image';
import Loader from '@/assets/loader.svg';
import UnderlineImg from '@/assets/underline.svg?url';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';

export const Hero = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <div className="border-l border-r border-[var(--color-border)]">
          <div className="container relative isolate overflow-hidden py-24 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:py-36 lg:py-48">
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
                ></span>
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
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[315px] -translate-y-[75px] rotate-135"
                />
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-y-[188px] translate-x-[330px] -rotate-135"
                />
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-x-[500px] -translate-y-[360px] rotate-135"
                />
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-y-[350px] translate-x-[450px] -rotate-135"
                />
              </div>
              <div className="absolute left-0 top-[30%] z-10 hidden -translate-x-10 lg:block">
                <div className="w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md">
                  <div>
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-[50%] z-10 hidden translate-x-10 lg:block">
                <div className="w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md">
                  <div>
                    <strong>Brainwave:</strong> I created one based on videos
                    from Frontend Tribe
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="relative mt-20 overflow-hidden rounded-2xl border-2">
                <Image alt="Robot Image" src={RobotImg} />
                <div className="absolute bottom-2 left-1/2 w-full max-w-xs -translate-x-1/2 px-4 md:bottom-4 lg:bottom-10">
                  <div className="flex w-[320px] max-w-full items-center gap-4 rounded-2xl bg-gray-950/80 px-4 py-2">
                    <Loader className="text-violet-400" />
                    <div className="text-xl font-semibold text-gray-100">
                      AI is generating<span>|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
