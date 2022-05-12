import { ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children?: ReactNode;
  outline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: 'red' | 'purple' | 'blue' | 'green';
  onClick?: () => void;
};

function Button({
  children,
  outline,
  size,
  colorScheme,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={[
        styles.root,
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
