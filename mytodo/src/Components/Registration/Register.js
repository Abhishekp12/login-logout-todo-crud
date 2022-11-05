import React,{useState,useRef, useEffect} from 'react'
import{FormContainer,WelcomeText ,InputContainer}from'../LoginForm/style';
import {InputField} from'../SharedComponet/InputField';
import {LoginButton}from'../SharedComponet/Button';
import{Link, useHistory} from'react-router-dom';

const Register = () => {
const [inputData, setInputData] = useState({
        email:'',
        password:''
 });
const[errorMessage,setErorMessage]=useState(null);
const history =useHistory;

    const handleChange=(e)=>{
    const name = e.target.name;
    const value=e.target.value;
    setInputData(val=>({...val, [name]: value}) ) ;
      }

 const handleSubmit=(e)=>{
  e.preventDefault();
  localStorage.setItem('tokenlogin', true);
  history.push('/');
 }  




// const CreateUserCred=async()=>{
//   const requestedData={
//     method:'POST',
//     header:{'Content-type':'Application/json'},
//     body:JSON.Stringfy({
//       'email':inputData.email,
//       'password':  inputData.password,
//       'token':'ru1',
//     })
//   }
//   const response = await fetch('http://localhost:3001/users',requestedData );
//   const data=await response.json();
//   console.log(data, 7595)
// }

  return (
    <div>
    <FormContainer className={`mt-5`}> 
    <WelcomeText>
  SIGN UP
    </WelcomeText>
  <form className='mt-2' autoComplete='off' onSubmit={handleSubmit}>
  <InputContainer>
  <InputField type={'text'} placeholder={'Email'}  autocomplete={'off'} onChange={(e)=>handleChange(e)} name={'email'} key={'email'}
value={inputData.email || ''}
  />

  <InputField type={'password'} placeholder={'password'}  autocomplete={'off'} onChange={(e)=>handleChange(e)} name={'password'}
value={inputData.password || ''}
key={'password'} 
  />
  </InputContainer>
  <div className='d-flex justify-content-center mb-4 mt-2'> 
  <LoginButton ><Link to='/home' style={{color:'white',textDecoration:'none'}}> SIGN IN </Link></LoginButton> 
   
  </div> 
  <div className='d-flex justify-content-center mb-1'>{errorMessage}</div> 
  </form>
       </FormContainer>
       </div>
  )
}

export default Register