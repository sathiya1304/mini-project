import React from 'react'
import {Form, FormControl, FormLabel} from 'react-bootstrap';


const InputField = (props) => {
  return (
    <Form.Group className='mb-3' controlId={`form-basic-${props.name}`}>
        <FormLabel>{props.label} {props.required && <span className='text-danger'>*</span>}</FormLabel>
        <FormControl 
        placeholder={`Enter ${props.name}`} 
        type={props.type}
        onChange={props.onChange} 
        onBlur={props.onBlur}
         onFocus={props.onFocus}
      />
        {props.error && props.errorMessage && <div className='text-danger'>{props.errorMessage}</div>}
    </Form.Group>
  )
}

export default InputField