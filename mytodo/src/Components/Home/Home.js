import React from 'react'
import Navbar from'../Navbar/Navbar';
import Todo from'../Todo/Todo';
import{Link, useHistory} from'react-router-dom';

const Home = () => {

const  history=useHistory;


  return (
    <div>     
  <div className="d-flex justify-content-end  text-primary mr-2 pr-2 mt-2 pt-2">
 <Link to='/' style={{color:'blue',textDecoration:'none',cursor:'pointer', maarginRight:'5px', fontWeight:'bold'}} >LOGOUT </Link> 
 </div> 
   <div> 
      <Todo/>
    </div>
    </div>
  )
}

export default Home