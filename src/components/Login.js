import React, { useState } from 'react';
import axios from 'axios'; 
import Menu from './MenuPrincipal';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", { email, password }, {
        headers: { 'Content-Type': 'application/json' }
        
      });
      setError('');
      <Menu/>
    } catch (error) {
        if(!error?.response){
          setError('Erro ao acessar o servidor');
        }else if(error.response.status === 400){
          setError('Usuario ou senha invalidos!');
        }
    }
  }

  return (
    <div className='login-form-wrap'>
      <h2>Login</h2>
      <form className='login-form'>
        <input type='email'
          name='email'
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type='password'
          name='password'
          placeholder='Senha'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          className='btn-login'
          onClick={(e) => handleLogin(e)}
        >Entrar</button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default Login;
