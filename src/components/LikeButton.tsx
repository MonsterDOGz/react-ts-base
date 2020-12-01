import { FC, useState, useEffect } from 'react';

const LikeButton: FC = () => {
  const [like, setLike] = useState(0);
  useEffect(() => {
    document.title = `点击了${like}次`;
  });
  return (
    <button
      style={{ color: '#000' }}
      onClick={() => {
        setLike(like + 1);
      }}
    >
      {like} 👍
    </button>
  );
};
export default LikeButton;
