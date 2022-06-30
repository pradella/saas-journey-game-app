import { useState } from 'react';
import Button from '../Button/Button';
import GameCover from '../GameCover/GameCover';
import GameStatus from '../GameStatus/GameStatus';
import GameTrophies from '../GameTrophies/GameTrophies';
import StarRating from '../StarRating/StarRating';
import styles from './GameDetail.module.scss';

type GameDetailProps = {
  url: string;
  onBack: () => void;
};

function GameDetail({ url, onBack }: GameDetailProps) {
  const [own, setOwn] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      <Button size="sm" onClick={onBack}>
        back to list
      </Button>
      <main>
        <div>
          <GameCover url={url} size="lg" />
        </div>
        <div>
          <Button onClick={() => setOwn(!own)} outline={own}>
            I own this game
          </Button>
          {own ? (
            <>
              <hr />
              <StarRating />
              <GameStatus />
              <textarea rows={5} />
            </>
          ) : null}
        </div>
      </main>
      <GameTrophies />
    </div>
  );
}

export default GameDetail;
