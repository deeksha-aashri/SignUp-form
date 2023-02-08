import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
function Signup() {
  const [checked, setChecked] = useState(false);

  return (
    <Form className='signupform'>

<Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name"  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Gender</Form.Label>
       
       <ButtonGroup  className='gender'>
        <Button type='radio'  variant="outline-primary"  checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)}>Male</Button>
        <Button type='radio'  variant="outline-primary"  checked={checked}  onChange={(e) => setChecked(e.currentTarget.checked)}>Female</Button>
       </ButtonGroup>
       
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;