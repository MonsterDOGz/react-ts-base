import { FC, useState, useEffect } from 'react';
const Positions: FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log('effect');
    const handlerClick = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('click', handlerClick);
    return () => {
      document.removeEventListener('click', handlerClick);
    };
  }, []);
  return (
    <p>
      x: {position.x}, y: {position.y}
    </p>
  );
};
export default Positions;
