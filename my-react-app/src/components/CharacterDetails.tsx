import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { characters, comics } from '../components/mockData';
import styles from './CharacterDetails.module.css';

const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const character = characters.find((char) => char.id === Number(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  const characterComics = comics.filter(comic => character.comics.includes(comic.id));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={character.image} alt={character.name} className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.title}>{character.name}</h1>
          <p className={styles.description}>{character.description}</p>
        </div>
      </div>
      <div className={styles.comicsSection}>
        <h2>Comics</h2>
        <ul>
          {characterComics.map((comic) => (
            <li key={comic.id}>
              <Link to={`/comics/${comic.id}`} className={styles.link}>
                {comic.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
