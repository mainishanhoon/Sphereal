import { ButtonProps } from '@/types/types';
import { cva } from 'class-variance-authority';

export default function Button(props: ButtonProps) {
  const { className = '', children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
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
