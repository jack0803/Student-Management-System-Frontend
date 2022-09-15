import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Viewstudent() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7676/listStudents').then(responce=>setStudents(responce.data)).catch(error=>alert(error));
    })

    return (
        <div className='container mt-3 card text-center'>
            <div className="card-header">
                <h3>Student Listing</h3>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { students.map((student) => 
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td><button className="btn btn-primary">Edit</button> <button className="btn btn-danger">Delete</button></td>
                    </tr>)
                    }
                </tbody>
            </table>
            <div className="card-footer text-muted">
            </div>
        </div>
    )
}
