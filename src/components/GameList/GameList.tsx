import GameCover from '../GameCover/GameCover';
import styles from './GameList.module.scss';

type GameListProps = {
  onSelectGame: (url: string) => void;
};

function GameList({ onSelectGame }: GameListProps) {
  return (
    <div className={styles.root}>
      <GameCover
        url="https://image.api.playstation.com/vulcan/ap/rnd/202202/1517/UyPJCxbE3EoeLtUxjoFBnsD4.png"
        onClick={onSelectGame}
      />
      <GameCover
        url="https://image.api.playstation.com/vulcan/img/rnd/202109/2115/5jeuJiXUpb1bZc0Lp1U8N5Ka.png"
        onClick={onSelectGame}
      />
      <GameCover
        url="https://image.api.playstation.com/vulcan/ap/rnd/202112/2121/qrpfY71rsvMn6beyjgStw3cH.png"
        onClick={onSelectGame}
      />
      <GameCover
        url="https://image.api.playstation.com/vulcan/img/rnd/202201/1616/THJbARAq2YiRVUv5abCQ8GYQ.png"
        onClick={onSelectGame}
      />
      <GameCover
        url="https://image.api.playstation.com/vulcan/ap/rnd/202107/0902/fS3Hhaq06TqLrbjMVplA8MaY.png"
        onClick={onSelectGame}
      />
      <GameCover
        url="https://image.api.playstation.com/vulcan/ap/rnd/202202/2218/JRMRQKmUi9PV1ZkCf8Oh4aMd.png"
        onClick={onSelectGame}
      />
      <GameCover
        url="https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00265_00/8/i_1c2d1812f27ec71285072e191d1822134e4f9730141c88537d87837014a17295/i/icon0.png"
        onClick={onSelectGame}
      />
    </div>
  );
}

export default GameList;
