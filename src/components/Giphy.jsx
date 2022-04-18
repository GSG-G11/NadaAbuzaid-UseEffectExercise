import React, { useEffect, useState } from 'react';

export default function GiphyApi() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(
      `https://api.giphy.com/v1/stickers/search?q=${search}&api_key=OaOghmtVtJmNKohzQhBKvwwvTh5M0xK0`,
      {
        signal: abortController.signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data);
      })
      .catch((err) => console.log(err));
    
    // Clean
    return () => {
      abortController.abort();
    };

  }, [search]);

  return (
    <div>
      <h1>GiphyApi</h1>
      <input onChange={(e) => setSearch(e.target.value)} value={search} />
      {images.map((ele) => {
        const imgURL = ele.images.original.url;
        return <img src={imgURL} alt="Search" key={imgURL} />;
      })}
    </div>
  );
}
