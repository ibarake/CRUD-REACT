import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect} from 'react'

function EditUser(){
    const nv = useNavigate()
    const params = useParams();

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');

    useEffect(() => {
        axios.post('/api/user/getuserdata', {userId: params.userId}).then(
            res => {
                console.log(res.data[0])
                const userData = res.data[0]
                setname(userData.name)
                setemail(userData.email)
                setphone(userData.phone)
            }
            ).catch( e => {
                console.log(e)
            })
    }, [params.userId]);

    function editUser(){
        const updateUser = {
            email: email,
            name: name,
            phone: phone,
            userId: params.userId
        }

        axios.post('/api/user/updateuser', updateUser).then(
            res => {
                console.log(res.data)
                alert(res.data)
                nv("/")
            }
        ).then(
            err => {
                console.log(err)
            }
        )
    }

    return(
        <div className='container'>
        <div className="row">
            <div className="col-sm-6 offset-3">
                 <h2>Edit user: {params.userId}</h2>
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

                 <button className="btn btn-primary" onClick={editUser}>
                    Save
                 </button>
            </div>
        </div>
    </div>
    );
}

export default EditUser