import { useState } from 'react'
import './LoginPage.css'
import {Form} from 'react-bootstrap';
import InputField from './InputField';
import { Validation } from '../Validation';
import  {useNavigate} from 'react-router-dom'


const LoginPage = (props) => {
  const  navigate=useNavigate();
  const [email, setEmail] = useState({ value: '', name: "email" ,error:false,errorMessage: '.'})
  const [password, setPassword] = useState({ value: '', name: "password" ,error:false,errorMessage: '.'})
  const onChange = (setter) =>(e)=>{
    setter((state) => {return{
      ...state,
      value: e.target.value
    }})

  }
  const onBlur =(setter) => () => {
    setter((state) => {
      return {
        ...state,
        ...Validation(state.value,state.name)
      }
    })
  }
  const onFocus =(setter) => () => {
    setter((state) => {
      return {
        ...state,
        error:false,
      }
    })
  }
  const onSubmit =(e)=>{
    e.preventDefault();
    onBlur(setEmail)();
    onBlur(setPassword)();
    if(email.errorMessage ===""&& password.errorMessage === "") {
      props.updateLoginStatus(true);
      navigate('/dashboard');
    }

  }
  function handleClick(){
    console.log(email.error);

    
  }
  return (
    <div className="container-fluid ">
      <div className="row  no-gutters shadow-lg  con justify-content-evenly">
        <div className='col-md-12 text-center fs-2 fw-bold mt-3 '>COMPANY NAME</div>
        <div className="col-md-7 d-none d-md-block align-items-center justify-content-evenly samecon">
          <img src={require('../../assets/lap.jpg')} className="img-fluid img1 rounded " />
        </div>
        <div className="col-md-4 p-5 align-items-center border-2 rounded samecon1 ">
          <h4 className="pb-3 fw-bold text-dark">User Login</h4>
          <div className="form-style">
            <Form onSubmit={onSubmit}>
             <InputField  label="Enter Email" name="email" type="email" {...email} onChange={onChange(setEmail)} onBlur={onBlur(setEmail)} onFocus={onFocus(setEmail)} required/>
             <InputField label="Enter Password" name="password" type="password" {...password} onChange={onChange(setPassword)} onBlur={onBlur(setPassword)}  onFocus={onFocus(setPassword)} required/>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span className="pl-2 font-weight-bold text-dark">Remember Me</span></div>
                <div><a href="" className='text-danger'>Forget Password?</a></div>
              </div>
              <div className="pt-3">
                <button type="submit" onClick={handleClick} className="btn btn-dark w-100 font-weight-bold mt-2" disabled={email.error || password.error}>Submit</button>
              </div>
            </Form>

          </div>


        </div>
      </div>
    </div>
  )
  }

  export default LoginPage