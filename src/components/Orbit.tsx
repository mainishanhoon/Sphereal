import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Orbit(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="absolute left-1/2 top-1/2 isolate -z-10 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(
          'size-[200px] rounded-full border border-gray-200/30',
          props.className,
        )}
      />
    </div>
  );
}
