
import { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } from '../../api/postsApi';
import { Post } from '../../types/postsType';
import { FormEvent, useState } from 'react';
import PostItem from '../post-item/post-item';
import { LIMIT_SHOW_STEP } from '../../common';

function PostsList() {
  const [newName, setNewName] = useState("");
  const [newPost, setNewPost] = useState("");
  const [limit, setNewLimit] = useState(5)
  const { data, isLoading } = useGetPostsQuery(limit);
  const [addPost] = useAddPostMutation();
  const [deletePost] = useDeletePostMutation();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await addPost({ name: newName, post: newPost }).unwrap();
    setNewName("");
    setNewPost("");
  }

  const handleDeletePost = async (id: number) => {
    await deletePost(id).unwrap();
  }

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='contact'>
        <div className="contact-input">
          <label htmlFor="name">Ваше имя: </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Tonny"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="contact-input">
          <label htmlFor="post">Ваша мысль: </label>
          <textarea
            id="post"
            required
            placeholder='Люблю котят'
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
        <button type='submit'>Добавить пост</button>
      </form>
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