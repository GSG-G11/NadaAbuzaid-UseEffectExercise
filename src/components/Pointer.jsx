// Exersice 2
import React, { useEffect, useState } from 'react';

export default function Pointer() {
  const [width, setWidth] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  // Handle Mousemove Event
  const handleMouseMove = (e) => {
    let mouseX = e.screenX;
    let mouseY = e.screenY;
    if (mouseX > window.innerWidth / 2) {
      document.body.style.background = 'blue';
    } else {
      document.body.style.background = 'tomato';
    }

    setWidth({ mouseX, mouseY });
  };

  // UseEffect
  useEffect(() => {
    document.addEventListener('mousemove', (e) => handleMouseMove(e));

    return () => {
      document.removeEventListener('mousemove', (e) => handleMouseMove(e));
    };
  });

  const { mouseX, mouseY } = width;
  return (
    <p>
      I'm now in {mouseX} X and {mouseY} Y
    </p>
  );
}
