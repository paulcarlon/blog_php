import {Link} from 'react-router-dom'
const AddBtn = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
      <p>
    <Link to="/add" type="button" className={`btn btn-md mb-3 btn-primary`}>Add Post</Link>
    <Link to="/" type="button" className='btn btn-md mb-3 btn-warning' onClick={() => props.setIsLoggedIn(false)}>Logout</Link>
</p>
    </div>
  )
}

export default AddBtn
