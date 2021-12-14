import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, FormControl, Button, Input,
} from '@mui/material';

const FormSearchGif = ({ setGifs }) => {
  const [tagName, setTagName] = useState('');
  const [error, setError] = useState(null);
  const onSubmit = (ev) => {
    ev.preventDefault();
    const response = axios.get(`https://api.giphy.com/v1/gifs/search?api_key=pz2ZHjeJWGG1wW1MR3yssz6tFZrxE5ST&q=${tagName}&limit=1&offset=0&rating=g&lang=en`);
    response.then(({ data }) => {
      const gifs = Object.values(data.data[0].images);
      setGifs(gifs);
    }).catch((err) => {
      console.log(err);
      setError(err);
    });
  };
  return (
    <Box component="form" onSubmit={onSubmit}>
      <FormControl variant="standard">
        <Input value={tagName} onChange={(e) => setTagName(e.target.value)} id="search" placeholder="Введите тег для гифки" />
      </FormControl>
      <Button type="submit" variant="standard">{'>'}</Button>
    </Box>
  );
};

export default FormSearchGif;
