import { FC, useState, useEffect } from 'react';
const Positions: FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handlerClick = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('click', handlerClick);
    return () => {
      document.removeEventListener('click', handlerClick);
    };
  }, []);
  return (
    <p>
      x: {positions.x}, y: {positions.y}
    </p>
  );
};
export default Positions;
