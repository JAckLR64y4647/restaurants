import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (data) => {
    if (data.email === 'test@example.com' && data.password === 'password') {
      setIsAuthenticated(true);
      setError('');
      return { success: true };
    } else {
      setError('Неверные данные');
      return { error: 'Неверные данные' };
    }
  };

  return (
    <div className="login-page">
      <h1>Вход</h1>
      {error && <p className="error">{error}</p>}
      {isAuthenticated ? (
        <p>Добро пожаловать!</p>
      ) : (
        <LoginForm onSubmit={handleLogin} />
      )}
    </div>
  );
};

export default LoginPage;
