import React, { useState } from 'react'
import axios from 'axios';

export default function AddStudent() {

    const [id, setId] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();


    let textChanged = (event) =>{
        if(event.target.name === 'id'){
            setId(event.target.value);
        }
        else if(event.target.name === 'firstName'){
            setFirstName(event.target.value);
        }
        else if(event.target.name === 'lastName'){
            setLastName(event.target.value);
        }
        else if(event.target.name === 'email'){
            setEmail(event.target.value);
        }
    }

    const student = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email
    }

    let addStudent = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:7676/student', student).then(response => alert(response.data)).catch(error => alert(error));
        setId('');
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (
        <div className='container mt-5 card'>
            <form onSubmit={addStudent}>
                <div className="card-header text-center">
                    <h3 style={{ marginBottom: '.0rem' }}>ADD STUDENT INFORMATION</h3>
                </div>
                <div className='card-body'>
                    <div className="mb-3">
                        <input type="number" className="form-control" name="id" value={id} id="sid" aria-describedby="emailHelp" placeholder='Enter Id' onChange={textChanged} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="firstName" value={firstName} id="ffirstName" aria-describedby="emailHelp" placeholder='Enter First Name' onChange={textChanged} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="lastName" value={lastName} id="lfirstName" aria-describedby="emailHelp" placeholder='Enter Last Name' onChange={textChanged} />
                    </div>
                    <div className="mb-2">
                        <input type="textarea" className="form-control" name="email" value={email} id="email" aria-describedby="emailHelp" placeholder='Enter Email' onChange={textChanged} />
                    </div>
                </div>
                <div className="card-footer text-center">
                    <div className='d-grid gap-2 col-3  mx-auto'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    )
}
