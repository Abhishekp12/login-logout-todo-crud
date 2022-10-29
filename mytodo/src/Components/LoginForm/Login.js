import React, { useEffect ,useState} from 'react'
import{FormContainer,WelcomeText ,InputContainer}from'./style';
import {InputField} from'../SharedComponet/InputField';
import {LoginButton}from'../SharedComponet/Button';
import{Link, useHistory} from'react-router-dom';

const Login = (props) => {
  const[registerBoolean,setRegisterBoolean]=useState(false);
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
  //  checkLogincred();
  const getToken =  localStorage.getItem('tokenlogin');
if(getToken ){
  setRegisterBoolean(false);
  history.push('/home');
}else{
      setRegisterBoolean(true);
    setErorMessage(
      <small className="text-danger">
      please enter valid email & password or if you don't have account ,please  register  </small>
  )
}
    }
     
    
// const checkLogincred=async()=>{
//     const response = await fetch('http://localhost:3001/users');
//     const data = await response.json();
//     console.log(response, 55566888);
//   if(data.email  == inputData.email  && data.email== inputData.password ){
//     setRegisterBoolean(false);
//     localStorage.setItem('tokenlogin', data.token);
//     let path='/home';
//       history.push(path);
//   }else{
//     setRegisterBoolean(true);
//     setErorMessage(
//       <small className="text-danger">
//       please enter valid email & password or if you don't have account ,please  register  </small>
//   )
//   }
// }

  return (
    <div>
     <FormContainer className={`mt-5`}> 
     <WelcomeText>
     LOGIN
     </WelcomeText>
   <form className='mt-2' autoComplete='off' onSubmit={handleSubmit} >
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
   <LoginButton >
    {!registerBoolean? (<Link to='/home' style={{color:'white',textDecoration:'none'}}> SIGN IN </Link>) :(
    <p className='text-white ' style={{margin:'auto auto'}}> Sign in</p> 
    )}


    </LoginButton> 
   </div>
 {errorMessage?<div className='text-danger mt-1 mb-1 ml-1 mr-1 w-4'>{errorMessage}</div>:null}
  
  <div className="text-center text-primary">
  <p>Do'nt have account ? <Link to='/register' >Sign up</Link></p>
   </div> 


</form>
        </FormContainer>
        </div>
   
  )
}

export default Login