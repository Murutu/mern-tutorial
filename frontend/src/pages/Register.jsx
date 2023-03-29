import React,{ useState, useEffect } from 'react'
import {FaUser} from "react-icons/fa"
import {Outlet} from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password, password2} = formData

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = () => {}

    return (
    <>
    <section className="heading">
        <h1>
            <FaUser /> Register
        </h1>
        <p>Please create an account</p>
    </section>

    <section className="form">
        <form onSubmit={onSubmit}>

            <div className="form-group">
            <input
            type="text"
            className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
            />
            </div>

            <div className="form-group">
                <input
                type="email"
                className='form-control'
                id='email'
                name='email'
                value={email}
                placeholder="murutupeter@gmail.com"
                onChange={onChange}
                />
            </div>

            <div className="form-group">
                <input
                type="password"
                className='form-control'
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
                />
            </div>

            <div className="form-group">
                <input
                type="password"
                className='form-control'
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={onChange}
                />
            </div>
            
            <div className="form-group">
                <button className="btn btn-block">Submit</button>
            </div>
        </form>
    </section>
    <Outlet />
    </>
    )
}

export default Register

/*
const {formData, setFormData} = useState({
    name: "",
    email: ""
});

const {name, email} = formData;
*/