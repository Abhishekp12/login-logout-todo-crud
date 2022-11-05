import React,{useState} from 'react'
import{TitleText,WelcomeText ,InputContainer}from'../LoginForm/style';
import {InputField, InputFieldTodo} from'../SharedComponet/InputField';
import{tododata} from './todoData';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import{Link} from'react-router-dom';

const Todo = () => {
  
const[arrData,setArrData]=useState([]);
const[inputfield,setInputfield]=useState({});
const[editMode,setEditMode]=useState(false);
const[rowEdit,setRowEdit]=useState('');
const[indexEdit,setIndexEdit]=useState('');

const handleChange=(e)=>{
  if(e.target.value !==''){
    setInputfield({[ e.target.name]: e.target.value})
  } }


const handleinputfieldEditable=(e,data,index)=>{
  setRowEdit(e.target.value);
}


const undoRowEdit=(index)=>{
  setEditMode(false);
}


const handleNewTodo=(e)=>{
e.preventDefault();
if(JSON.stringify(inputfield) !== '{}'){
  setArrData(oldData =>[...oldData, inputfield]);
  setInputfield({name : ' '});
}

}

const handleKeypress=(event)=>{

  if (event.key === 'Enter') {
    if(JSON.stringify(inputfield) !== '{}'){
      setArrData(oldData =>[...oldData, inputfield]);
      setInputfield({name : ' '});
    }
  }
}

const handleSaveRowEdit=(index)=>{
  arrData[index].todo=rowEdit;
  setArrData([...arrData]);
  setEditMode(false);
}


const handleDelete=(index)=>{
  setArrData(olddata=>olddata.splice(index, 1));
}

const handleEdit=(index)=>{
setEditMode(true);
setIndexEdit(index);
}

  return (
    <div>
  <div  className='text-primary pl-2 ml-2 pt-2 mt-2 d-flex justify-content-center'>
 <div><h5>Welcome to Todo !!</h5> </div> 
    </div>

 <div className="container d-flex  justify-content-center " style={{marginBottom:'1rem', marginTop:'1rem'}}>

  <div className='row'>
  <div className="d-flex justify-content-end " style={{marginTop:'2rem', marginBottom:'1rem', width:'100%'}}>

    <div className='d-flex '>
      <div >
      <InputFieldTodo
        name="todo"
        value={inputfield.name}
        type="text"
        onChange={(e)=>handleChange(e)}
        placeholder="Enter new task"
        widthSize={'100%'}
        paddingSize={'1rem 0.25rem'}
        onKeyPress={handleKeypress}
      />
      </div>
      <div>
      <button type="button" className="btn btn-outline-primary" style={{marginTop:'1rem'}}  onClick={(e)=>handleNewTodo(e)} >Add Todo</button>  
        </div>
    </div>


  </div>

  <div classname="col-sm-12 col-md-12 col-lg-12 " style={{width:'100%'}}>
  <table className="table " >
  <thead className=" bg-primary text-white" >
    <tr>
      <th scope="col">Task no.</th>
      <th scope="col">Task details</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
     arrData.length>0 && arrData?.map((data,index)=>{
        return(
          <tr key={index}>
          <td>{index+1}</td>
          { editMode && (indexEdit==index) ? (
 <td>
 <div className='d-flex'> 
 <div> 
<input
name="todo"
value={rowEdit?rowEdit:data.todo}
type="text"
onChange={(e)=>handleinputfieldEditable(e, data ,index )}
/>
</div>
<div className='d-flex'> 
<div onClick={()=>handleSaveRowEdit(index)} className='ml-2 pl-2 mr-1' >
<BiSave color={'blue'} />
</div>
<div onClick={()=>undoRowEdit(index)}  className='ml-2 pl-2 mr-1'>
<AiFillCloseCircle color={'red'}/>
</div>
</div>
</div>
</td>
          ):(  
            <td>
            {data.todo}
          </td>        
           
          )}
          
          <td>
            <tr>
              {editMode && (indexEdit==index)  ?( 
             null
              ):(
                <td className={'pr-2 mr-1'} onClick={()=>handleEdit(index)}  style={{cursor:'pointer'}}><MdModeEditOutline color={'blue'}/></td>
              )}
  
              <td className={'pr-2 pl-2'}></td>
              <td className={'pl-2 ml-1 '} onClick={()=>handleDelete(index)}  style={{cursor:'pointer'}}>
              <AiFillDelete color={'red'} />
                </td>
            </tr>
          </td>
        </tr>
        )
      })
    }
   

  </tbody>
</table>
    </div>
  </div>
</div>

<div  className='d-flex justify-content-end'>
  <Link to='/features' style={{color:'blue',textDecoration:'none',cursor:'pointer', maarginRight:'5px',  maarginTop:'15px'}}>click here to access more features</Link>
</div>
    </div>
  )
}

export default Todo