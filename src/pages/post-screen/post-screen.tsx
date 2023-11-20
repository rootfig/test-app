import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/postsApi";

function PostScreen() {
  const { id } = useParams()
  const postId = Number(id)
  const { data, isLoading } = useGetPostByIdQuery(postId);
  if (isLoading) return <h3>Loading...</h3>;
  return (
    <div className="container">
      <div className="post-details">
      <p className="post-title">{data?.name}</p>
      <p className="post-text">{data?.post}</p>
      </div>
      <Link className="home-link" to={'/'}>Home page</Link>
    </div>
    
  )
}

export default PostScreen