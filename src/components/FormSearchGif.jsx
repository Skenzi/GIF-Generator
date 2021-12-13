import React, { useState } from "react";
import axios from "axios";
import { Box, FormControl, Button, Input } from "@mui/material";

const FormSearchGif = ({ setGifs }) => {
    const [tagName, setTagName] = useState('');
    const [error, setError] = useState(null);
    const onSubmit = (ev) => {
        ev.preventDefault();
        const response = axios.get('https://api.giphy.com/v1/gifs/random?api_key=pz2ZHjeJWGG1wW1MR3yssz6tFZrxE5ST&tag=&rating=g');
        response.then(({ data }) => {
            const gifs = Object.values(data.data.images);
            setGifs(gifs);
        }).catch((error) => {
            console.log(error)
            setError(error);
        });
    };
    return <Box component="form" onSubmit={onSubmit}>
        <FormControl variant="standard">
            <Input value={tagName} onChange={(e) => setTagName(e.target.value)} id="search" placeholder="Введите тег для гифки" />
        </FormControl>
        <Button type="submit" variant="standard">{'>'}</Button>
    </Box>
};

export default FormSearchGif;
