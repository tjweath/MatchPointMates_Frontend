import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useRef } from "react";
import "./Signup.css"


export default function Signup() {
    const userRef = useRef()
    const emailRef = useRef()
    const pwdRef = useRef()
    
    async function handleSubmit(e) {
        e.preventDefault();
        const user = {
          username: userRef.current.value,
          email: emailRef.current.value,
          password: pwdRef.current.value,
        };
        
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKENDURL}/signup/`,
          user,
          {
            headers: { "Content-Type": "application/json" },
          },
          {
            withCredentials: true,
          }
        );
        window.location.href = "/players"
      }
  
      return (
    <Form onSubmit={handleSubmit}>
      <h1 className='title'>🎾 Match Point Mates 🎾</h1>
      <div className="signup" >
      <Form.Group>
        <Form.Label>Username </Form.Label>
        <Form.Control type="text" ref={userRef} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" ref={emailRef} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password </Form.Label>
        <Form.Control type="password" ref={pwdRef} required />
      </Form.Group>
      <div className="mt-2">
        <Button type="submit" variant="primary">
          Sign up!
        </Button>
      </div>
      </div>
    </Form>
  )
}