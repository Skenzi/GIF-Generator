import React, { useState } from "react";
import GifContainer from "./GifContainer.jsx";
import FormSearchGif from "./FormSearchGif.jsx";

const App = () => {
    const [gifs, setGifs] = useState([]);
    return <>
      <FormSearchGif setGifs={setGifs}></FormSearchGif>
      {gifs.length !== 0 ? <GifContainer gifs={gifs} /> : null}
    </>
};

export default App;