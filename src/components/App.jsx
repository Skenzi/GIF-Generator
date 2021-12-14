import React, { useState } from 'react';
import { Typography, Container, CssBaseline } from '@mui/material';
import GifContainer from './GifContainer.jsx';
import FormSearchGif from './FormSearchGif.jsx';

const App = () => {
  const [gifs, setGifs] = useState([]);
  return (
    <Container sx={{ textAlign: 'center' }}>
      <CssBaseline />
      <Typography component="h1" variant="h2">GIF-generator</Typography>
      <FormSearchGif setGifs={setGifs} />
      <GifContainer setGifs={setGifs} gifs={gifs} />
    </Container>
  );
};

export default App;
