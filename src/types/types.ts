import { HTMLAttributes } from 'react';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;
