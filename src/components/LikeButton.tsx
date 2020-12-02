import { FC, useEffect, useState } from 'react';
const LikeButton: FC = () => {
  const [like, setLike] = useState(0);
  useEffect(() => {
    document.title = `点击了${like}次`;
  }, [like]);
  return (
    <button
      style={{ color: '#000000' }}
      onClick={() => {
        setLike(like + 1);
      }}
    >
      {like} 👍
    </button>
  );
};
export default LikeButton;
