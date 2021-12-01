import axios from '../node_modules/axios';

const runApp = async () => {
    const app = document.getElementById('app');
    const promise = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=pz2ZHjeJWGG1wW1MR3yssz6tFZrxE5ST&tag=&rating=g');
    const images = promise.data.data.images;
    const keyImages = Object.keys(images);
    keyImages.forEach((key) => {
        const image = images[key];
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src', image.url);
        img.style.width = image.width;
        img.style.height = image.height;
        div.appendChild(img);
        app.appendChild(div);
    })
};

runApp();