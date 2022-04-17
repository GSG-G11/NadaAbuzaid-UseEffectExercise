// Exercise  3
import React, { useEffect, useState } from 'react';

export default function Giphy() {
  const [word, setWord] = useState('');
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  useEffect(() => {
    fetch(`https://robohash.org/${word}.png?set=any&size=200x200`).then(
      (data) => setUrl(data.url)
    );
  });

  return (
    <div>
      <hr />
      <h1>Giphy</h1>
      <input type="text" placeholder="Search Here..." onChange={handleChange} />
      <br /> <img src={url} alt="Img" />
      <hr />
    </div>
  );
}
