import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PROJECT_ID } from '../../api';

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    newPassword: '',
    appType: 'ott'
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        'https://academics.newtonschool.co/api/v1/user/updateMyPassword',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            projectId: PROJECT_ID,
          },
        }
      );
      console.log('Password update success:', response.data);
      const token = response.data.token;
      const name = response.data.data.name;
      const email = response.data.data.email;
      const password = response.data.data.password;

      // Store the token 
      localStorage.setItem('authToken', token);
      localStorage.setItem('authName', name);
      localStorage.setItem('authEmail', email);
      localStorage.setItem('authPassword', password);
      navigate("/login")
      // Handle successful password update
    } catch (error) {
      console.error('Password update error:', error);
      alert(`Server is down. Please try after sometime `)
      if(error.response){
        setErrors(error.response.data.message)
        setTimeout(()=>{
          setErrors('')
        },5000)
      }
    }

  };

  return (
    <form style={{ height: 800 }} onSubmit={handleSubmit}>
      <Box sx={{ height: 600, opacity: 0.5, backgroundColor: 'black', width: 500, margin: '0px 50px 0 50px' }}>
        <Typography
          style={{ color: 'white', marginTop: 50, marginLeft: 40 }} variant='h4'>Change Password</Typography>
        <input style={{ paddingLeft: 15, height: 55, fontSize: 16, color: 'black', borderRadius: 10, marginLeft: 30, width: 400, marginTop: 30 }}
          placeholder="Username"
          name="name"
          value={formData.name}
          onChange={handleChange}

        />
        <input style={{ paddingLeft: 15, height: 55, fontSize: 16, color: 'black', borderRadius: 10, marginLeft: 30, width: 400, marginTop: 30 }}
          placeholder="Email"
          name="email"
          type='email'
          value={formData.email}
          onChange={handleChange}

        />
        <input style={{ paddingLeft: 15, height: 55, fontSize: 16, color: 'black', borderRadius: 10, marginLeft: 30, width: 400, marginTop: 30 }}
          placeholder="Password"
          name="password"
          type='password'
          value={formData.password}
          onChange={handleChange}


        />
        {errors.password && <Typography marginLeft="30px" variant='subtitle' color="error">{errors.password}</Typography>}

        <input style={{ paddingLeft: 15, height: 55, fontSize: 16, color: 'black', borderRadius: 10, marginLeft: 30, width: 400, marginTop: 30 }}
          placeholder="NewPassword"
          name="password"
          type='password'
          value={formData.newPassword}
          onChange={handleChange}

        />
        {errors.newPassword && <Typography marginLeft="30px" variant='subtitle' color="error">{errors.newPassword}</Typography>}

        <Button type="submit" variant="contained" onClick={() => {
          nav("/login");
        }}
          style={{ backgroundColor: 'red', margin: '40px 0 0 30px', width: 400 }}>
          Update password
        </Button>
        <Typography variant='subtitle2' marginTop={2}><Link style={{ fontWeight: 700, color: 'white' }} to="/login">Login</Link></Typography>
      </Box>
    </form>
  );
};

export default UpdatePassword;