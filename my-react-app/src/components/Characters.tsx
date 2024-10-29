import React from 'react';
import { characters } from '../components/mockData';
import Card from './Card';
import styles from './Characters.module.css';

const Characters: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Characters</h1>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for Characters by Name" className={styles.searchInput} />
        <button className={styles.searchButton}>SEARCH</button>
      </div>
      <div className={styles.grid}>
        {characters.map((character) => (
          <Card key={character.id} item={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;