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

useEffect(()=>{
  const savedemail = localStorage.getItem('email');
  const savedpassword = localStorage.getItem('password');
if( savedemail && savedpassword){
  localStorage.removeItem("email");
  localStorage.removeItem("password");
}
},[])

useEffect(()=>{
    if( inputData.email.trim().length<6 && inputData.password.trim().length<6){
        setErorMessage(
            <small className="text-danger">
            please enter the email & password atleast of six character </small>
        )}
        else{
            setErorMessage(null);    
        }
},[
    inputData.email,
    inputData.password  
])
    const handleChange=(e)=>{
    const name = e.target.name;
    const value=e.target.value;
    setInputData(val=>({...val, [name]: value}) ) ;
      }
      console.log(inputData, 5558888)  
 const handleSubmit=(e)=>{
e.preventDefault();
if(errorMessage !== null){
    localStorage.setItem('email', inputData.email );
    localStorage.setItem('password', inputData.password);
    // localStorage.setItem('myToken', '123abc');
    history.push('/');
}

 }  

const handleNavigation=()=>{
    if( errorMessage !== null){
        let path='/'
        history.push(path);
    }
  
}

console.log(errorMessage, 5558865);


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
  <LoginButton ><Link  to="/" style={{color:'white',textDecoration:'none'}}> Create </Link></LoginButton> 
   
  </div> 
  <div className='d-flex justify-content-center mb-1'>{errorMessage}</div> 
  </form>
       </FormContainer>
       </div>
  )
}

export default Register