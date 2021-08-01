import AddButton from './AddBtn'
import { useState } from 'react'
import Post from './Post'
import Login from './Login'

const Home = ({ getPosts, posts }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
<div>

<div className="row">
  <div className="col">
<div className="card">
{posts.reverse().map((post, i) => (
<Post key={post.id} getPosts={getPosts} post={post} isLoggedIn={isLoggedIn} i={i}/>
))}
</div>
</div>
</div>

<div className="row mt-3">
  <div className="col">
{ isLoggedIn ? <AddButton setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
  </div>
</div>
    </div>
  )
}

export default Home
