import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import Button from '../Button/Button';
import styles from './GameTrophies.module.scss';

function GameTrophies() {
  const [allTrophies, setAllTrophies] = useState([]);
  const [trophies, setTrophies] = useState([]);

  async function fetchGameTrophies() {
    const response = await axios.get(
      // 'https://us-central1-pradella-me.cloudfunctions.net/games/user/3243454007233303489/trophies?titleIds=PPSA05324_00'
      'http://localhost:5001/pradella-me/us-central1/games/user/3243454007233303489/trophies?titleIds=PPSA05324_00'
    );
    console.log(response.data[0].trophies);
    setAllTrophies(response.data[0].trophies);
    setTrophies(response.data[0].trophies);
  }

  function handleApplyFilter(filter: string) {
    switch (filter) {
      case 'earned':
        setTrophies(allTrophies.filter((t) => t.earned === true));
        break;
      case 'not-earned':
        setTrophies(allTrophies.filter((t) => t.earned === false));
        break;
      default:
        setTrophies(allTrophies);
        break;
    }
  }

  return (
    <main className={styles.root}>
      <h3>Game trophies</h3>

      <Button onClick={fetchGameTrophies} className={styles.button}>
        fetch trophies
      </Button>

      <select
        className={styles.select}
        onChange={(e) => handleApplyFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="earned">Earned</option>
        <option value="not-earned">Not earned</option>
      </select>

      <p>Trophy count: {trophies.length}</p>

      {trophies.map((t) => (
        <div className={styles.trophy}>
          <img src={t.trophyIconUrl} width="100px" />
          <span>{t.trophyName}</span>
          {t.earned ? (
            <FontAwesomeIcon icon={faCheckCircle} className={styles.check} />
          ) : null}
        </div>
      ))}
    </main>
  );
}

export default GameTrophies;
