import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import { PROJECT_ID } from '../../api';
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    appType: 'ott'
  });
  const [errors, setErrors] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://academics.newtonschool.co/api/v1/user/login', formData, {
        headers: {
          'Content-Type': 'application/json',
          projectId: PROJECT_ID,
        },
      });
      const token = response.data.token;
      const name = response.data.data.name;
      const email = response.data.data.email;

      // Store the token 
      localStorage.setItem('authToken', token);
      localStorage.setItem('authName', name);
      localStorage.setItem('authEmail', email);
      navigate("/home")
      // Handle successful login
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data.message)
        setTimeout(() => {
          setErrors('')
        }, 5000)
      }
    }

  };
  return (
    <form style={{ height: 800 }} onSubmit={handleSubmit}>
      <Box alignItems="center" sx={{ height: 500, opacity: 0.5, backgroundColor: 'black', width: 500, margin: '0px 50px 0 50px' }}>
        <Typography
          style={{ color: 'white', marginTop: 50, marginLeft: 10 }} variant='h4'>Login</Typography>

        <input style={{ paddingLeft: 15, height: 55, fontSize: 16, color: 'black', borderRadius: 10, marginLeft: 50, width: 350, marginTop: 30, marginLeft: 10 }}
          placeholder="Email"
          name="email"
          type='email'
          value={formData.email}
          onChange={handleChange}

        />

        <input style={{ paddingLeft: 15, height: 55, fontSize: 16, color: 'black', borderRadius: 10, marginLeft: 50, width: 350, marginTop: 30, marginLeft: 10 }}
          placeholder="Password"
          name="password"
          type='password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors && <Typography marginLeft="30px" variant='subtitle' color="error">{errors}</Typography>}

        <Button type="submit" variant="contained"
          style={{ backgroundColor: 'red', margin: '40px 0 0 15px', width: 350 }}>
          Login
        </Button>
        <Typography variant='subtitle2' style={{ color: 'white', margin: '30px', marginLeft: '60px' }}>New user?<Link style={{ fontWeight: 700, color: 'white' }} to="/register" >Register</Link></Typography>

        <Typography variant='subtitle2' style={{ color: 'white', margin: '30px', marginLeft: '60px' }}><Link style={{ fontWeight: 700, color: 'white' }} to="/updatepassword" >UpdatePassword</Link></Typography>


      </Box>
    </form>
  )
}

export default Login;