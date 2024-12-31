import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SectionContent(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        'container overflow-hidden py-24 md:py-36 lg:py-48',
        className,
      )}
      {...otherProps}
    />
  );
}
