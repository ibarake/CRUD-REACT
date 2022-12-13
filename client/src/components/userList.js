import axios from 'axios';
import React from 'react'
import User from './User.js'
import { useState, useEffect} from 'react'

function UserList(){

    const [datauser, setdatauser] = useState([]);
    useEffect(() => {
        axios.get('api/user/getuser').then(
            res =>{
                console.log(res.data)
                setdatauser(res.data)
            }
        ).catch( err =>{
            console.log(err)
        }
        )
    }, []);

    const userList = datauser.map(user =>{
        return(
            <div>
                <User user={user}/>
            </div>
        )
    })

    return(
        <div>
            <h2>User List</h2>
            {userList}
        </div>
    );
}

export default UserList