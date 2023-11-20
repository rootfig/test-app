import { useOverflowDetector } from 'react-detectable-overflow';
import styles from './post-item.module.css'
import { Post } from '../../types/postsType';
import { Link } from 'react-router-dom';

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  const { ref , overflow } = useOverflowDetector({});

  return (
    <>
      <p
        ref={ref}
        className={styles.post}
        style={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          
        }}
      >
        {post.id + ' ' + post.name + ' ' + post.post}
      </p>
      {overflow ? <Link className='post-link' to={`/post/${post.id}`}> Показать </Link> : null}
    </>
  );
}

export default PostItem