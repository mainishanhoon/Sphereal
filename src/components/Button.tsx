'use client';

import { ButtonProps } from '@/types/types';
import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';

export default function Button(props: ButtonProps) {
  const {
    className = '',
    children,
    variant = 'primary',
    ...otherProps
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const angle = useMotionValue(45);
  const background = useMotionTemplate`linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box, conic-gradient(from ${angle}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400)) border-box`;

  useEffect(() => {
    if (isHovered) {
      animate(angle, angle.get() + 360, {
        duration: 2,
        ease: 'linear',
        repeat: Infinity,
      });
    } else {
      animate(angle, 45, { duration: 0.5 });
    }
  }, [isHovered, angle]);

  return (
    <motion.button
      style={variant === 'primary' ? { background: background } : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes({ ...otherProps, variant, className })}
    >
      {children}
    </motion.button>
  );
}

const classes = cva(
  'text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg',
  {
    variants: {
      block: { true: 'w-full' },
      variant: {
        primary: 'border-gradient',
        secondary: 'bg-gray-100 text-gray-950',
        tertiary: 'bg-gray-800 text-gray-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
      block: false,
    },
  },
);
