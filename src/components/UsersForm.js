import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./UsersForm.css"

const UsersForm = ({ getUsers, userSelected, setUserSelected}) => {
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail]= useState ("");
    const [password, setPassword]= useState ("");
    const [birthday, setBirthday]= useState ("");

  useEffect(() => {
    if (userSelected) {
        setFirstName (userSelected.first_name);
        setLastName (userSelected.last_name);
        setEmail (userSelected.email);
        setPassword (userSelected.password);
        setBirthday (userSelected.birthday);

    }
  }, [userSelected]);

 

  const submit = (e) => {
    e.preventDefault();
    const users = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        birthday: birthday
    };

    console.log(userSelected);
    if(userSelected){
      console.log("Me ejecute")

      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, users )
      .then (() => {
          getUsers()
          setUserSelected(null);
           
          });
    } else {


      axios.post ("https://users-crud1.herokuapp.com/users/", users)
      .then(() => {
        
        getUsers()
        reset();     

      })
      .catch((error) => console.log(error.response));
  }
 

};
    
  const reset = () => {
    setUserSelected(null);
    

      setFirstName("");
      setLastName ("");
      setEmail ("");
      setPassword ("");
      setBirthday ("");       
    
  };

  return (
    
    <form   onSubmit={submit} className='H1'>
        
    <div className="sec">
        <label htmlFor="firstName"> <h3> First Name </h3></label> <br />
        <input className="sec3" type="text"
        id='firstName'
        onChange={e => setFirstName(e.target.value)}
        value= {firstName}
        />
    </div>
    <div className="sec">
        <label htmlFor="lastName"> <h3>Last Name</h3></label> <br />
        <input className="sec3" type="text"
        id='lastName'
        onChange={e => setLastName(e.target.value)}
        value= {lastName}
        />
    </div>
    <div className="sec">
        <label htmlFor="email"> <h3>Email</h3> </label> <br />
        <input className="sec3" type="email" name="email" id="email" 
        onChange={e => setEmail(e.target.value)}
        value= {email}
        />
    </div>
    <div className="sec" >
        <label htmlFor="password"> <h3>Password </h3></label> <br />
        <input className="sec3" type="password" name="password" id="password" 
        onChange={e => setPassword(e.target.value)}
        value= {password}
        />
    </div>
    <div className="sec">
        <label  htmlFor="birthday"><h3>D. of Birthday</h3></label> <br />
        <input className="sec2"  type="date" name="birthday" id="birthday" 
        onChange={e => setBirthday(e.target.value)}
        value= {birthday}
        />
    </div>
    <button className="sec4">submit</button>
    <button className="sec4" onClick={() => reset()} type="button">
        unselect user
      </button>

</form>
  );
};

export default UsersForm;
