import styled from "styled-components";

 
export const InputField = styled.input`
  background: #f4f4f5;
  border-radius: 0.25rem;
  width:${props=>props.widthSize? 'props.widthSize' : '80%'} ;
  height:${props=>props.heightSize? 'props.heightSize' : '3rem'} ;
  padding: ${props=>props.paddingSize? 'props.paddingSize' : '1rem'} ;
  border: none;
  outline: none;
  color: #717171;
  font-size: 1rem;
  font-weight: normal;
  margin: 0.50rem 0;
  
  &:focus {
    display: inline-block;
    border-radius: 0.25rem;
    border: 1px solid #3470e1
  }
  &::placeholder {
    color: #717171;
    font-weight: normal;
    font-size: 1rem;
  }
`;


export const InputFieldTodo = styled.input`
  background: #f4f4f5;
  border-radius: 0.25rem;
  width:${props=>props.widthSize? 'props.widthSize' : '80%'} ;
  height:${props=>props.heightSize? 'props.heightSize' : '2.5rem'} ;
  padding: ${props=>props.paddingSize? 'props.paddingSize' : '1rem'} ;
  border: none;
  outline: none;
  color: #717171;
  font-size: 1rem;
  font-weight: normal;
  margin-right: 0.25rem;
  margin-top:1rem;
  
  &:focus {
    display: inline-block;
    border-radius: 0.25rem;
    border: 1px solid #3470e1
  }
  &::placeholder {
    color: #717171;
    font-weight: normal;
    font-size: 1rem;
  }
`;
