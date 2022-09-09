
import ListGroup from 'react-bootstrap/ListGroup';

function UsersList(props){

    // console.log(props.users);
    return (

        <ListGroup as="ol" className='mt-5' numbered>

{
            props.users.length===0  ?
            
            
            <ListGroup.Item as="li" >No User Found Try to Add One</ListGroup.Item>:
            
            props.users.map((user,_)=><ListGroup.Item as="li"  onClick={props.OnDelete} data-key={user.id} key={user.id} >   {user.name}    {user.age}</ListGroup.Item>


)
}


        </ListGroup>
      );


}


export default UsersList;