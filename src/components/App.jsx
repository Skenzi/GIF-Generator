import React, { useState } from 'react';
import GifContainer from './GifContainer.jsx';
import FormSearchGif from './FormSearchGif.jsx';

const App = () => {
  const [gifs, setGifs] = useState([]);
  return (
    <>
      <FormSearchGif setGifs={setGifs} />
      <GifContainer setGifs={setGifs} gifs={gifs} />
    </>
  );
};

export default App;
