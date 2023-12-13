import React from "react";
import { useState, useEffect } from "react";

import './login.css'
import { useNavigate } from 'react-router';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Accept': "application/json",
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      if(data){
        nav('/')
      } // You can handle the response here (e.g., redirect on success)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
   	<div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info">
				<span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
				<h4 class="company_title">Your Company Logo</h4>
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
					<div class="row">
						<h2>Log In</h2>
					</div>
					<div class="row">
						<form onSubmit={handleSubmit} class="form-group">
							<div class="row">
								<input type="text" name="username" id="username"  value={email}
          onChange={(e) => setEmail(e.target.value)} class="form__input" placeholder="Username"/>
							</div>
							<div class="row">
								
								<input type="password" name="password"  value={password}
          onChange={(e) => setPassword(e.target.value)} id="password" class="form__input" placeholder="Password"/>
							</div>
							<div class="row">
								<input type="checkbox" name="remember_me" id="remember_me" class=""/>
								<label for="remember_me">Remember Me!</label>
							</div>
							<div class="row">
								<input type="submit" value="Submit" class="btn"/>
							</div>
						</form>
					</div>
					<div class="row">
						<p>Don't have an account? <a href="#">Register Here</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
  );
}
export default Login