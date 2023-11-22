import { useDeletePostMutation } from "../../api/postsApi";
import { Post } from "../../types/postsType";

type DeletePostButtonType = {
  post: Post
}

function DeletePostButton({ post }: DeletePostButtonType) {

  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async (id: number) => {
    await deletePost(id).unwrap();
  }

  return (
    <button
              onClick={() => handleDeletePost(post.id)}
              className='deleteButton'
            >Удалить</button>
  )
}

export default DeletePostButton