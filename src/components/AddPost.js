import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const AddPost = ({ posts, setPosts, getPosts }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category_id] = useState(1);
  const [file, setFile] = useState('');

    const fetchData = async () => {
    const res = await fetch('https://aubrey.digital/phpAPI/api/posts/')
    const data = await res.json();
    return data;
  }

  const onSubmit = async (e) => {
      e.preventDefault();
      let newPost = { author, title, body, category_id };
      // if (file) {
        console.log(file);
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append('name', filename);
        data.append('file', file);
        newPost.image = filename
        
        try {
          await fetch('https://aubrey.digital/phpAPI/api/posts/create.php', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
    'Content-Type': 'multipart/form-data'
          },
          body: JSON.stringify(newPost)
          });
        } catch (err) {
          console.log(file.name);
        }
        fetchData()
        window.location.href = '/';
      }
    // }

  
  return (
    <div className="container text-center">
    <div className="row mt-5">
      <div className="col">
      <h3 className="text-center"
        
      >
        write new blog post
      </h3>
      </div>
      </div>
      <Form onSubmit={onSubmit} className='mt-5'>
        <Form.Group controlId='titleBody'>
        <Form.Label
          >
            Author:
          </Form.Label>
          <input
            className='rounded'
            
            type='text'
            name='author'
            placeholder='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <br />
          <Form.Label
          >
            Title:
          </Form.Label>
          <input
            className='rounded'
            name='title'
            type='text'
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <br />
          <Form.Label
            
          >
            {/* Body: */}
          </Form.Label>

          <textarea
            style={{ height: '13em', width: '70vw', textAlign: 'center', alignItems: 'center' }}
            type='text'
            name='body'
            placeholder='Your message to the world goes here!'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <br />         
          <div className="form-group">
        <label>Post Image</label><br />
        <input type="file" name="image" id="image" onChange={(e) => setFile(e.target.files[0])} />
    </div>
        </Form.Group>
        <Form.Group controlId='submit'>
          <input
            type='submit'
            name='submit'
            className='btn btn-success p-3'
            style={{ fontSize: '1.5em', fontWeight: 'bold' }}
            value='Submit'
          ></input>
        </Form.Group>
      </Form>
    </div>
    
  );
};


export default AddPost;
