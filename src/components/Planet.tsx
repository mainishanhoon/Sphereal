import { cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const classes = cva(
  'size-8 rounded-full bg-gradient-to-b from-violet-400 to-gray-950',
  {
    variants: {
      size: { sm: 'size-4', md: 'size-6', lg: 'size-8' },
      color: { violet: 'from-violet-400', teal: 'from-teal-400', fuchsia: 'from-fuchsia-400' },
    },
    defaultVariants: { size: 'lg', color: 'violet' },
  },
);

export default function Planet(
  props: {
    size?: 'sm' | 'md' | 'lg';
    color?: 'violet' | 'teal' | 'fuchsia';
  } & HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      className={classes({
        size: props.size,
        color: props.color,
        className: props.className,
      })}
    ></div>
  );
}