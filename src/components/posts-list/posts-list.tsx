
import { useGetPostsQuery } from '../../api/postsApi';
import { Post } from '../../types/postsType';
import { useState } from 'react';
import PostItem from '../post-item/post-item';
import { LIMIT_SHOW_STEP } from '../../common';
import FormPost from '../form-post/form-post';
import DeletePostButton from '../delete-post-button/delete-post-button';
import LoadMoreButton from '../load-more-button/load-more-button';

function PostsList() {
  
  const [limit, setNewLimit] = useState(5)
  const { data, isLoading } = useGetPostsQuery(limit);

  const handleLoadMore = () => {
    setNewLimit(limit + LIMIT_SHOW_STEP);
  };

  if (isLoading) return <h3>Loading...</h3>;

  console.log(limit);
  console.log(data.length);
  
  return (
    <div className='container'>
      <FormPost />
      <ul>
        {data.map((post: Post) => (
          <li key={post.id} >

            <DeletePostButton post={post}/>
            <PostItem post={post} />
            
          </li>
        ))}
      </ul>
    {
      data.length >= limit &&
      <LoadMoreButton onClick={handleLoadMore} />
    }
    </div>
  )
}



export default PostsList