import styled from "styled-components";


export const LoginButton = styled.button`
background: #007bff;
text-transform: uppercase;
letter-spacing: 0.2rem;
width: ${props=>props.resizeWidth?'props.resizeWidth': '30%' };
height: 2rem;
border: none;
color: white !important;
border-radius: 1rem;
cursor: pointer;
margin-right: ${props=>props.marginRight?'props.marginRight': '0' };
`;