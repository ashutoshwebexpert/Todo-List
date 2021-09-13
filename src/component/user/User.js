import React, {useState, useEffect} from 'react';
import {useHistory, useParams,Link} from 'react-router-dom';
import axios from 'axios';

const User = () =>{
    const [ user, setUser] = useState({
        task: "",
        description: "", 
    })
    const { id } = useParams();
    useEffect(() =>{
        loadUser();
    },[]);
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
        
    }
    return(
        <>
            <div className="container">
                <Link className="btn btn-outline-primary" to="/">Back to Home</Link>
                <h1>User Id: {id}</h1>
                <ul>
                    <li>Task:{user.task}</li>
                    <li>Task Description: {user.description}</li> 
                </ul>
            </div>
        </>
    )
}
export default User;