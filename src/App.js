import { useState } from 'react';
import './App.scss';
import FormC from './Form.js';
import Container from 'react-bootstrap/Container';
import UsersList from './UsersList.js';
import ModalWindow from './ModalWindow.js';


// const users=[{id:0,name:'Raj',age:25},{id:1,name:'med',age:35},{id:2,name:'dj',age:15}]



// user should containt name and age only 


function App() {
  const [users,setuser]=useState([])
  const [isValideUser,setisValideUser]=useState(true);

  const AddUserHandler=(user)=>{


//  setuser(users=>[{id:users.length,...user},...users])// last in first out
 setuser(users=>[...users,{id:users.length,...user}])//last in last our
  
  }
   
    
    const DeleteUserHandler=(e)=>{
      
      const id=+e.target.dataset.key;
      setuser(users=>users.filter(user=>user.id!==id))

    }
    
    const userHandler=(user)=>{
    // is user a valide user 
    // setisValideUser(()=>true);

    if(user.age>0 && user.age<100  && user.name.length>0){
      
      setisValideUser(true);
      AddUserHandler(user);
      
    }
    //! render error message
    // console.log(users);
    // console.log(user);
    else 
    {
      setisValideUser(prv=>!prv);
      // setisValideUser(false);
 
    }
    
      
    
    }
  return (
    <div className="App">
     
      {
        !isValideUser && <ModalWindow/>
      } 
  <Container className='mt-5'>
<FormC userHandler={userHandler} ></FormC>
<UsersList users={users}   OnADD={AddUserHandler}  OnDelete={DeleteUserHandler}></UsersList>



  </Container>

   </div>
  );
}

export default App;
