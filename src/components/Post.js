import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

const Post = ({ post, getPosts, isLoggedIn }) => {
  const [authorEdit, setAuthorEdit] = useState(post.author)
  const [titleEdit, setTitleEdit] = useState(post.title)
  const [bodyEdit, setBodyEdit] = useState(post.body)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete = async () => {
    try {
      await fetch('https://aubrey.digital/phpAPI/api/posts/delete.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/data'
      },
      body: JSON.stringify({'id': post.id}),
      });
    } catch (err) {
      console.log(err);
    }
    getPosts()
  }


  const onSubmit = async (e) => {
    console.log(e);
    try {
      await fetch('https://aubrey.digital/phpAPI/api/posts/update.php', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/data'
      },
      body: JSON.stringify({
        'id': post.id,
        'author': authorEdit,
        'title': titleEdit,
        'body': bodyEdit,
        'category_id': 1
      }),
      });
    } catch (err) {
      console.log(err);
    }
    getPosts()
    setShow(false);
  }
  return (
    <div>
    <div className="card text-white text-center" style={{  backgroundColor: '#333' }}>
    <div className="card-body">
      <h4 className="card-title mt-3">{post.title}</h4>
      <small>{post.author}</small>
<br />
      <small className="text-muted">{post.date}</small><br />

      <p className="card-text m-4 px-5 justify-content">{post.body}</p>
    </div>
    <div className="card-footer">
      {/* <a href={`update.php?id=${post.id}`} className="btn btn-sm btn-outline-primary">Edit</a> */}
      {isLoggedIn && <button type="submit" onClick={handleShow} className="btn btn-sm btn-outline-warning">Edit</button>}
      
                {/* <form method="delete" action="delete.php" style={{display: 'inline'}}> */}
                    <input  type="hidden" name="id" value={post.id}/>
                    {isLoggedIn && <button type="submit" onClick={onDelete} className="btn btn-sm btn-outline-primary">Delete</button>}
                {/* </form> */}
    </div>
  </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        edit your post
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
              <Form.Label>Author: </Form.Label>
              <Form.Control type="text" onChange={(e) => setAuthorEdit(e.target.value)} defaultValue={post.author}/>           
          </Form.Group>
          <Form.Group>
              <Form.Label>Title: </Form.Label>
              <Form.Control type="text" onChange={(e) => setTitleEdit(e.target.value)} defaultValue={post.title}/>           
          </Form.Group>
          <Form.Group>
              <Form.Label>Body: </Form.Label>
              <textarea type="text" style={{ width: '300px', height: '300px' }} onChange={(e) => setBodyEdit(e.target.value)} defaultValue={post.body}/>           
          </Form.Group>

          </Modal.Body>
          <Modal.Footer>
          <Form.Group controlId='submit'>
          <input
            type='submit'
            onClick={onSubmit}
            className='btn btn-success p-3'
            style={{ fontSize: '1.5em', fontWeight: 'bold' }}
            value='Submit'
          ></input>
        </Form.Group>
          </Modal.Footer>
      </Modal>
</div>
  )
}

export default Post
