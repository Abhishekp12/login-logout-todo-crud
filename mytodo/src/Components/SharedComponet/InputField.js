import styled from "styled-components";

 
export const InputField = styled.input`
  background: #f4f4f5;
  border-radius: 0.25rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
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

