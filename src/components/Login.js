import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import dotenv from 'dotenv'
dotenv.config();

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const onSubmit = () => {
    if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
setIsLoggedIn(true)
}
  }
  return (
    <Card className="mb-3 d-flex text-center align-items-center justify-content-center mx-auto">
      <Form onSubmit={onSubmit}>
        <Form.Text className="m-3 pl-5 text-center" style={{ fontFamily: 'verdana', fontWeight: 600, fontSize: '30px' }}>Login</Form.Text>
        <Form.Group className="mx-auto w-50">
          <Form.Label>Username:</Form.Label>
          <input type="text" placeholder="Enter your password" onChange={(e) => setUsername(e.target.value)} value={username}
         /><br />
          <Form.Label>Password:</Form.Label>
          <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          <br />
        <Button type="submit" className="my-3 ml-5" variant="warning" size="lg" value="Submit">Submit</Button>

        </Form.Group>
      </Form>
    </Card>
  )
}

export default Login
