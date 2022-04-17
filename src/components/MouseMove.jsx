import React, { useEffect, useState } from 'react';

export default function MouseMove() {
  const [width, setWidth] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleMouseMove = (e) => {
    let mouseX = e.screenX;
    let mouseY = e.screenY;
    if (mouseX > window.innerWidth / 2) {
      setBackgroundColor('blue');
    } else {
      setBackgroundColor('tomato');
    }
    setWidth({ mouseX, mouseY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  const { mouseX, mouseY } = width;
  return (
    <div style={{ background: backgroundColor, height: '97vh' }}>
      I'm in {mouseX} X and {mouseY} Y
    </div>
  );
}
