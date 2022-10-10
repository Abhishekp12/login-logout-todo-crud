import React from 'react'
import{TitleText,WelcomeText ,InputContainer}from'../LoginForm/style';
import {LoginButton}from'../SharedComponet/Button';
const Todo = () => {

  return (
    <div>
  <TitleText>
   Welcome to Todo !!
    </TitleText>

 <div className='d-flex justify-content-end '> 
  <LoginButton resizeWidth={'20%'}  marginRight={'5%'}> Add TODO</LoginButton> 
  </div> 


    </div>
  )
}

export default Todo