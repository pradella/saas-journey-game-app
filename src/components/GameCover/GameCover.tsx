import styles from './GameCover.module.scss';

type GameCoverProps = {
  url: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: (url: string) => void;
};

function GameCover({ url, size, onClick }: GameCoverProps) {
  return (
    <div
      className={[styles.root, size ? styles[size] : ''].join(' ')}
      style={{ backgroundImage: `url('${url}')` }}
      onClick={onClick ? () => onClick(url) : undefined}
    ></div>
  );
}

export default GameCover;
