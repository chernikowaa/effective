import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { comics } from '../components/mockData';
import { characters } from '../components/mockData';
import styles from './ComicDetails.module.css';

const ComicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const comic = comics.find((comic) => comic.id === parseInt(id || ''));

  if (!comic) {
    return <div>Comic not found</div>;
  }

  const comicCharacters = comic.characters_id.map((characterId) =>
    characters.find((character) => character.id === characterId)
  );

  return (
    <div>
      <h1>{comic.name}</h1>
      <img src={comic.image} alt={comic.name} className={styles.image} />
      <h2>Characters</h2>
      <ul className={styles.characterList}>
        {comicCharacters.map((character) =>
          character ? (
            <li key={character.id}>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ComicDetail;