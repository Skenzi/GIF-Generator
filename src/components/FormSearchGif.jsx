import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, FormControl, Button, Input, useMediaQuery, createTheme, Alert, Snackbar,
} from '@mui/material';

const FormSearchGif = ({ setGifs }) => {
  const [tagName, setTagName] = useState('');
  const [error, setError] = useState(null);
  const onSubmit = (ev) => {
    ev.preventDefault();
    const response = axios.get(`https://api.giphy.com/v1/gifs/search?api_key=pz2ZHjeJWGG1wW1MR3yssz6tFZrxE5ST&q=${tagName}&limit=1&offset=0&rating=g&lang=en`);
    response.then(({ data }) => {
      const gifs = data.data[0].images;
      setGifs(gifs);
    }).catch(() => {
      setError('Упс! Что-то пошло не так');
    });
  };
  const theme = createTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Box component="form" onSubmit={onSubmit}>
        <FormControl sx={{ width: '60%' }} variant="standard">
          <Input error={!!error} value={tagName} variant="filled" onChange={(e) => setTagName(e.target.value)} id="search" placeholder="Введите тег" />
        </FormControl>
        <Button type="submit" size={matches ? 'medium' : 'small'} variant="outlined">Получить</Button>
      </Box>
      <Snackbar open={!!error} autoHideDuration={5000} onClose={() => setError(null)}>
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FormSearchGif;
