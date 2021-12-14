import React from 'react';
import axios from 'axios';
import { ImageListItem, ImageList } from '@mui/material';
// 'https://api.giphy.com/v1/gifs/random?api_key=pz2ZHjeJWGG1wW1MR3yssz6tFZrxE5ST&tag=&rating=g'

class GifContainer extends React.Component {
  componentDidMount() {
    const response = axios.get('https://api.giphy.com/v1/gifs/random?api_key=pz2ZHjeJWGG1wW1MR3yssz6tFZrxE5ST&tag=&rating=g');
    response.then(({ data }) => {
      const gifs = Object.values(data.data.images);
      const { setGifs } = this.props;
      setGifs(gifs);
    }).catch((err) => {

    });
  }

  render() {
    const { gifs } = this.props;
    return (
      <ImageList variant="quilted" cols={4}>
        {gifs.map((gif) => {
          const src = gif.url ? gif.url : gif.mp4;
          return (
            <ImageListItem cols={1} sx={{ width: '250px', height: '250px' }}>
              <img alt="gif" loading="lazy" src={src} component="img" />
            </ImageListItem>
          );
        })}
      </ImageList>
    );
  }
}

export default GifContainer;
