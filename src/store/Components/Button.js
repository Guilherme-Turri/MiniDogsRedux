import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadNewPhotos } from '../photos';
import styles from './Button.module.css';
import Loading from './Helper/Loading';
const Button = () => {
  const { page, infinite, loading } = useSelector((state) => state.photos);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(loadNewPhotos(page + 1));
  }
  if (loading) return <Loading />;
  if (!infinite) return null;
  return (
    <button onClick={handleClick} className={styles.btn}>
      +
    </button>
  );
};

export default Button;
