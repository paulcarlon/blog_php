import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'
import AddPost from './components/AddPost'
import SinglePost from './components/SinglePost'
import dotenv from 'dotenv'
dotenv.config();

function App() {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
  // const res = await fetch('https://aubrey.digital/phpAPI/api/posts', {
  //   authorization: {
  //     'Bearer': process.env.API_ACCESS
  //   }
  // })
  const res = await fetch('https://aubrey.digital/phpAPI/api/posts/')

    const data = await res.json();
    return data;
  }

  const getPosts = async () => {
    const apiPosts = await fetchData();
    setPosts(apiPosts.data);
  }


  useEffect(() => {
    const getPosts = async () => {
      const apiPosts = await fetchData();
      setPosts(apiPosts.data);
    }

    getPosts()
  }, []);


  return (
    <Router>
           <Header name="aubrey digital" />

    <div className="container">
    <div className="row">
      <div className="col mt-5">
            </div></div>
            <div className="row">
      <div className="col">
      <Switch>
          <Route path='/add'>
            <AddPost posts={posts} setPosts={setPosts} getPosts={getPosts}/>
          </Route>

          <Route path='/single/:id'>
            <SinglePost posts={posts} setPosts={setPosts} />
          </Route>
          <Route path='/'>
            <Home posts={posts} getPosts={getPosts} setPosts={setPosts}/>
          </Route>
          </Switch>
          </div></div>
    </div>
    </Router>
  );
}

export default App;
