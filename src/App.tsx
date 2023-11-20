import { Routes, Route } from 'react-router-dom'
import './App.css'
import NotFound from './pages/not-found/not-found-screen'
import PostsScreen from './pages/posts-screen/posts-screen'
import PostScreen from './pages/post-screen/post-screen'


function App() {
  return (
    <>
      <header>
        <h1 className='app-title'>Test app</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<PostsScreen />} />
          <Route path='/post/:id' element={<PostScreen />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
