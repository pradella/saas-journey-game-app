import axios from 'axios';
import { useState } from 'react';
import GameCover from '../GameCover/GameCover';
import styles from './GameList.module.scss';

type GameListProps = {
  onSelectGame: (url: string) => void;
};

function GameList({ onSelectGame }: GameListProps) {
  // Next steps:
  // - Carregar no onload da página
  // - Criar campo de busca de jogos
  // - Exibir de 10 em 10 (paginação)
  // - Ordenação
  // - Typescript no objeto games

  const [games, setGames] = useState([]);

  async function fetchGameList() {
    const response = await axios.get(
      'https://us-central1-pradella-me.cloudfunctions.net/games/user/3243454007233303489/games'
    );
    console.log(response.data);
    setGames(response.data);
  }

  return (
    <div className={styles.root}>
      <button onClick={fetchGameList}>fetch my games</button>
      {games.map((game) => (
        <GameCover url={game.imageUrl} onClick={onSelectGame} />
      ))}
    </div>
  );
}

export default GameList;
