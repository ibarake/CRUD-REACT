import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom"

function User({ user }) {
    const nv = useNavigate()

    function deleteuser(userId){

        axios.post('api/user/deleteuser', {userId: userId}).then(res =>{
            console.log(res.data)
            alert(res.data)
            nv(0)
        }).catch (e => {
            console.log(e)
        })

    }

  return (
    <div className="container">
      <div className="row">

        <div className="col-sm-6 offset-3">

            <ul className="list-group">
            <li className="list-group-item">{user.userId}</li>
            <li className="list-group-item">{user.name}</li>
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">{user.phone}</li>
            </ul>

            <Link to={`/edituser/${user.userId}`}><li className="btn btn-success">Edit</li></Link>
            &nbsp;
            <button className="btn btn-danger" onClick={() => {deleteuser(user.userId)}}>Delete</button>
            <hr className="mt-4" />

        </div>

       
      </div>
    </div>
  );
}

export default User;
