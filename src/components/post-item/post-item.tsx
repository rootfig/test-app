
import styles from './post-item.module.css'
import { Post } from '../../types/postsType';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import useOverflowDetector from '../../hooks/useOverflowDetector';

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { isOverflowing } = useOverflowDetector(elementRef);

  return (
    <>
      <p
        ref={elementRef}
        className={styles.post}
        style={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          
        }}
      >
        {post.id + ' ' + post.name + ' ' + post.post}
      </p>
      {isOverflowing ? <Link className='post-link' to={`/post/${post.id}`}> Показать </Link> : null}
    </>
  );
}

export default PostItem