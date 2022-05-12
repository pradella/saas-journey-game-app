import styles from './GameStatus.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

function GameStatus() {
  type Status = 'abandoned' | 'playing' | 'beaten' | 'completed';
  const [status, setStatus] = useState<Status>();

  return (
    <div className={styles.root}>
      <Button
        size="sm"
        colorScheme="red"
        outline={status !== 'abandoned'}
        onClick={() => setStatus('abandoned')}
      >
        abandoned
      </Button>
      <Button
        size="sm"
        colorScheme="green"
        outline={status !== 'playing'}
        onClick={() => setStatus('playing')}
      >
        playing
      </Button>
      <Button
        size="sm"
        colorScheme="blue"
        outline={status !== 'beaten'}
        onClick={() => setStatus('beaten')}
      >
        beaten
      </Button>
      <Button
        size="sm"
        colorScheme="purple"
        outline={status !== 'completed'}
        onClick={() => setStatus('completed')}
      >
        completed
      </Button>
    </div>
  );
}

export default GameStatus;
