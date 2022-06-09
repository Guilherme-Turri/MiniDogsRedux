import React from 'react';

import { useDispatch } from 'react-redux';
import { loadNewPhotos } from '../photos';
import Button from './Button';
import PhotosContent from './PhotosContent';

const Photos = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);
  return (
    <section>
      <PhotosContent />
      <Button />
    </section>
  );
};

export default Photos;
