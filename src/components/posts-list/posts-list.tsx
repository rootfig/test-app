
import { useGetPostsQuery, useDeletePostMutation } from '../../api/postsApi';
import { Post } from '../../types/postsType';
import { useState } from 'react';
import PostItem from '../post-item/post-item';
import { LIMIT_SHOW_STEP } from '../../common';
import FormPost from '../form-post/form-post';

function PostsList() {
  
  const [limit, setNewLimit] = useState(5)
  const { data, isLoading } = useGetPostsQuery(limit);
  
  const [deletePost] = useDeletePostMutation();

  
  const handleDeletePost = async (id: number) => {
    await deletePost(id).unwrap();
  }

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className='container'>
      <FormPost />
      <ul>
        {data.map((post: Post) => (
          <li key={post.id} >
            <button
              onClick={() => handleDeletePost(post.id)}
              className='deleteButton'
            >Удалить</button>
            <PostItem post={post} />

          </li>
        ))}
      </ul>
      <button
        onClick={() => setNewLimit(limit + LIMIT_SHOW_STEP)}
        className='more-posts'
      >Еще 5 постов
      </button>
    </div>
  )
}



export default PostsList