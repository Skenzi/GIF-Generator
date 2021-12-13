import React from "react";
import { ImageListItem, ImageList } from '@mui/material';

const GifContainer = ({ gifs }) => {
    return <ImageList variant="quilted" cols={4}>
        {gifs.map((gif) => {
            console.log(gif)
            const src = gif.url ? gif.url : gif.mp4;
            return <ImageListItem cols={1} sx={{width: `250px`, height: `250px`}}>
                    <img alt="gif" loading="lazy" src={src} component="img" />
            </ImageListItem>;
        })}
    </ImageList>
};

export default GifContainer;