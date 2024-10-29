import React from 'react';
import { Link } from 'react-router-dom';
import { comics } from '../components/mockData';
import styles from './ComicsList.module.css';

const ComicsList: React.FC = () => {
  return (
    <div>
      <h1>Comics</h1>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for Comics by Name" className={styles.searchInput} />
        <button className={styles.searchButton}>SEARCH</button>
      </div>
      <div className={styles.comicsList}>
        {comics.map((comic) => (
          <Link to={`/comics/${comic.id}`} key={comic.id} className={styles.card}>
            <img src={comic.image} alt={comic.name} className={styles.image} />
            <p>{comic.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComicsList;