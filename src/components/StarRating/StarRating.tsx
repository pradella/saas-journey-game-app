import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import styles from './StarRating.module.scss';

function StarRating() {
  const [rating, setRating] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);

  return (
    <div className={styles.root}>
      <FontAwesomeIcon
        icon={faStar}
        className={rating >= 1 ? styles.on : styles.off}
        onClick={() => setRating(1)}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={rating >= 2 ? styles.on : styles.off}
        onClick={() => setRating(2)}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={rating >= 3 ? styles.on : styles.off}
        onClick={() => setRating(3)}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={rating >= 4 ? styles.on : styles.off}
        onClick={() => setRating(4)}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={rating >= 5 ? styles.on : styles.off}
        onClick={() => setRating(5)}
      />
    </div>
  );
}

export default StarRating;
