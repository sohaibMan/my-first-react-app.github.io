import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function FormC(props) {
const [username,setusername]=useState('')
const [userage,setuserage]=useState('')
const UsernameHandler=(e)=>{

  setusername(e.target.value)
}
const AgeHandler=(e)=>{

  setuserage(e.target.value)
}

const SubmitFormHandler=(e)=>{
  e.preventDefault();

// console.log(username,userage);
setusername('')
setuserage('')
props.userHandler({name:username,age:userage});


}

  return (
    <Form onSubmit={SubmitFormHandler}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>USERNAME</Form.Label>
        <Form.Control className="bg-white" value={username} onChange={UsernameHandler} type="text" placeholder="Type Your username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>AGE (YEAERS)</Form.Label>
        <Form.Control className="bg-white" value={userage} onChange={AgeHandler} type="number" placeholder="Type Your Age" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
}

export default FormC;