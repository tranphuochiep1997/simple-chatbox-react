import React, { useState } from 'react';
import { Form, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const FormInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(message) {
      sendMessage(message);
      setMessage(''); 
    }
  }

  return (
    <Form className='formchat' onSubmit={handleSubmit}>
      <InputGroup>
        <Input 
          type='text' 
          name='message' 
          placeholder='Say something'
          value={message}
          autoComplete='off'
          onChange={e => setMessage(e.target.value)} />
        <InputGroupAddon addonType='append'>
          <Button outline type='submit'>
            <FontAwesomeIcon icon={['far', 'paper-plane']} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}

export default FormInput;
