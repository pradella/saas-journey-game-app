import { ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children?: ReactNode;
  outline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: 'red' | 'purple' | 'blue' | 'green';
  onClick?: () => void;
  className?: string;
};

function Button({
  children,
  outline,
  size,
  colorScheme,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={[
        styles.root,
        className ? className : '',
        outline ? styles.outline : '',
        size ? styles[size] : '',
        colorScheme ? styles[colorScheme] : '',
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
