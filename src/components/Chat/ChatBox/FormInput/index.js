import React from 'react';
import { Form, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const FormInput = (props) => {
  const onIconClick = () => {
    alert('on click')
  }

  return (
    <Form className='formchat'>
      <InputGroup>
        <Input type='text' name='message' placeholder='Say something' />
        <InputGroupAddon addonType='append'>
          <Button outline onClick={onIconClick}>
            <FontAwesomeIcon icon={['far', 'paper-plane']} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}

export default FormInput;
