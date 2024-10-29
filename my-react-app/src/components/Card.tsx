import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

interface CardProps {
  item: {
    id: number;
    name?: string;
    title?: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item.name) {
      navigate(`/characters/${item.id}`);
    }
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={item.image} alt={item.name || item.title} className={styles.image} />
      <p className={styles.name}>{item.name || item.title}</p>
    </div>
  );
};

export default Card;