import React from 'react';
import "./UsersList.css"



const UsersList = ({users, setUserSelected, deleteUser}) => {
    return (
        <div className='H1'>
            
            <ul className='H2'>
                {users.map (users => <li className='h1' key={users.id}>
                    <h3 className='H4'>
                 
                 
                        <b className='H5'> Name </b>{users.first_name}
                        <b className='H5'> Last Name</b> {users.last_name}
                        <b className='H5'> Email</b> {users.email}
                        <b className='H5'> Dates of birth</b>{users.birthday}
                        <button className='H6' onClick= {() => setUserSelected (users)}> <h4>Select</h4> </button>
                        <button className='H7' onClick={() => deleteUser(users.id)}> <h4>Delete </h4></button>
                    
                    
                    </h3>                 

                                    </li> )}				
            </ul>
        </div>
    );
};

export default UsersList;