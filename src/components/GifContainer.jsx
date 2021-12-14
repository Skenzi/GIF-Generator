import React from 'react';
import axios from 'axios';
import { ImageListItem, ImageList, Alert } from '@mui/material';
// 'https://api.giphy.com/v1/gifs/random?api_key=pz2ZHjeJWGG1wW1MR3yssz6tFZrxE5ST&tag=&rating=g'

class GifContainer extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  componentDidMount() {
    const response = axios.get('https://api.giphy.com/v1/gifs/random?api_key=pz2ZHjeJWGG1wW1MR3yssz6tFZrxE5ST&tag=&rating=g');
    response.then(({ data }) => {
      const gifs = data.data.images;
      const { setGifs } = this.props;
      setGifs(gifs);
    }).catch(() => {
      this.setState('Что-то не так с соединением!');
    });
  }

  render() {
    const { gifs } = this.props;
    const error = this.state;
    const items = Object.entries(gifs);
    return !error ? (
      <ImageList variant="quilted" cols={1}>
        {items.map(([key, gif]) => {
          const src = gif.url ? gif.url : gif.mp4;
          return (
            <ImageListItem key={key} cols={1}>
              <img alt="gif" loading="lazy" src={src} component="img" />
            </ImageListItem>
          );
        })}
      </ImageList>
    ) : (<Alert severity="error">{error}</Alert>);
  }
}

export default GifContainer;
