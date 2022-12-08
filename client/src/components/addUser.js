import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'

function AddUser(){

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');

    function addUser(){
        var user = {
            name: name,
            email: email,
            phone, phone,
            userId: uniquid()
        }
        console.log(user)

        axios.post('api/user/adduser', user)
        .then(
            res => {
                alert(res.data)
            }
        )
        .then(
            err => {
                console.log(err)
            }
        )
    }

    return(
        <div className='container'>
            <div className="row">
                <div className="col-sm-6 offset-3">
                     <h2>add user</h2>
                </div>
            </div>
            <div className="row">
                <div className="mt-4">
                     <div className="mb-3">
                        <label htmlFor="name" className='form-label'>
                            Name
                        </label>
                        <input type="text" className='form-control' value={name} onChange={(e) => {setname(e.target.value)}}/>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="email" className='form-label'>
                            email
                        </label>
                        <input type="email" className='form-control' value={email} onChange={(e) => {setemail(e.target.value)}}/>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="phone" className='form-label'>
                            Phone
                        </label>
                        <input type="text" className='form-control' value={phone} onChange={(e) => {setphone(e.target.value)}}/>
                     </div>

                     <button className="btn btn-primary" onClick={addUser}>
                        Save
                     </button>
                </div>
            </div>
        </div>
    );
}

export default AddUser