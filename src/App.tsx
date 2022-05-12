import { useState } from 'react';
import styles from './App.module.scss';
import GameDetail from './components/GameDetail/GameDetail';
import GameList from './components/GameList/GameList';

function App() {
  const [selectedGame, setSelectedGame] = useState<string>();

  return (
    <div className={styles.App}>
      <h1>Game App</h1>
      <main>
        {!selectedGame ? (
          <GameList onSelectGame={setSelectedGame} />
        ) : (
          <GameDetail
            url={selectedGame}
            onBack={() => setSelectedGame(undefined)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
