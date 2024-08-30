import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface IInputLabelProps {
  className?: string,
  title: string;
  children: ReactNode;
}

export const InputLabel = ({ title, children, className }: IInputLabelProps) => (
  <label className={className}>
    <Typography variant='h2' >{title}</Typography>

    {children}
  </label>
);
