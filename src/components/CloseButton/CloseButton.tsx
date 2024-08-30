import { ReactNode } from 'react';

interface IButtonProps {
  className: string;
  onClick: () => void;
  children: ReactNode;
}

export const CloseButton = ({
  className,
  onClick: handleClick,
  children,
}: IButtonProps) => (
  <button className={className} onClick={handleClick}>
    {children}
  </button>
);
