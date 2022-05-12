import { ReactNode } from 'react';

import styles from './Badge.module.scss';

type BadgeProps = {
  color?: string;
  outline?: boolean;
  children: ReactNode;
};

function Badge({ color, outline, children }: BadgeProps) {
  return (
    <div className={[styles.root, outline ? styles.outline : ''].join(' ')}>
      {children}
    </div>
  );
}

export default Badge;
