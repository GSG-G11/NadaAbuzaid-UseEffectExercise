// Exersice 2
import React, { useEffect, useState } from 'react';

export default function Pointer() {
  const [width, setWidth] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      let mouseX = e.screenX;
      let mouseY = e.screenY;
      setWidth({ mouseX, mouseY });
    });

    return () => {
      document.removeEventListener('mousemove', () => {});
    };
  });

  const { mouseX, mouseY } = width;
  let color = '';
  return (
    <>
      {mouseX > window.innerWidth / 2 ? (color = 'tomato') : (color = 'blue')}
      <div style={{ background: color, height: '98vh' }}>
        I'm now in {mouseX} X and {mouseY} Y
      </div>
    </>
  );
}
