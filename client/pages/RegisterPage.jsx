import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const [error, setError] = useState('');

  const handleRegister = async (data) => {
    if (data.email && data.password) {
      setError('');
      await registerUser(data);
    } else {
      setError('Пожалуйста, заполните все поля');
    }
  };

  return (
    <div className="register-page">
      <h1>Регистрация</h1>
      {error && <p className="error">{error}</p>}
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
