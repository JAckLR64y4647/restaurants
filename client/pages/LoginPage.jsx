import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [error, setError] = useState('');

  const handleLogin = (data) => {
    // Логика для авторизации пользователя
    if (data.username && data.password) {
      // Успешная авторизация
    } else {
      setError('Неверные данные');
    }
  };

  return (
    <div className="login-page">
      <h1>Вход</h1>
      {error && <p className="error">{error}</p>}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
