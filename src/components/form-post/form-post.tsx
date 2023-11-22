import { FormEvent, useState } from "react";
import { useAddPostMutation } from "../../api/postsApi";

function FormPost() {
  
  const [newName, setNewName] = useState("");
  const [newPost, setNewPost] = useState("");
  const [addPost] = useAddPostMutation();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await addPost({ name: newName, post: newPost }).unwrap();
    setNewName("");
    setNewPost("");
  }

  return (
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
  )
}

export default FormPost