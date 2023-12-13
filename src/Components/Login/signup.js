import React from 'react'
// import './t.css';
// const rediredct= require('../Login/index')
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import './signup.css'
import { Link } from 'react-router-dom';
const Sigin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",

        password: "",
        location: ""
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const postData = async (event) => {
        event.preventDefault();
        const { name, email, phone, password, location } = user;
        console.log(user)
        try {
            const res = await fetch('http://localhost:8000/signup', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, password, location })
            })
            const data = await res.json();
            if (data.status === 422 || !data) {
                window.alert("Failed to register");
            } else {
                window.alert("Registered successfully please signin");
                navigate('/');
            }
        } catch (error) {
            console.log(error)
            // handle any rejected fetch Promises and other errors
        }
    };
    return (
        <>
            <div class="container">
                <div class="wrapper">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="inner-wrapper intro">
                                <span class="album-icon"></span>
                                <h1>Mood Muzik</h1>
                                <p>the perfect playlist to suit your mood</p>
                                <ul class="albums">
                                    <li class="song">
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/61IeCixjIZL._SY355_.jpg" alt="" id="albumTitle" />
                                        <a class="mood-title" href="#">#savageAF</a></li>
                                    <li class="song">
                                        <img src="" alt="" />
                                        <a class="mood-title" href="#">#100</a>
                                    </li>
                                    <li class="song">
                                        <img src="" alt="" />
                                        <a class="mood-title" href="#">#happyface</a>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <div class="col-sm-12 col-md-6">
                            <div class="inner-wrapper log-in">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="false">Sign In</a>
                                    </li>


                                    <li class="nav-item">
                                        <a class="nav-link active" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="true">Sign Up</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    
                                    <div class="tab-pane fade show active" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                                        <form onSubmit={postData}>
                                            <div class="form-group">
                                               
                                                <input type="text" name='uname' value={user.name} onChange={handleInput} class="form-input" id="name" placeholder="enter your full name" />
                                            </div>

                                            <div class="form-group">
                                                
                                                <input type="email" value={user.email} onChange={handleInput} class="form-input" id="email" placeholder="enter your email address" />
                                            </div>
<div class="form-group">
                                                
                                                <input type="number" value={user.phone} onChange={handleInput} class="form-input" id="number" placeholder="enter your email address" />
                                            </div>
                                            <div class="form-group">
                                               
                                                <input type="password" value={user.password} onChange={handleInput} class="form-input" id="Password1" placeholder="password" />
                                            </div>

<div class="form-group">
                                                
                                                <input type="text" value={user.location} onChange={handleInput} class="form-input" id="location" placeholder="password" />
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="agree" name="agree" /><label for="agree" class="form-check-label">I agree to all statements of <a href="#!">terms of service</a></label>
                                            </div>
                                            <button type="submit"  class="btn btn-primary">Get Into The Mood</button>
                                            <a href="#!">already a member</a>
                                            </form>
                                    </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div > 
        </>
      )
}

export default Sigin;