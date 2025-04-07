import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await userService.getUserProfile();
      setUser(data);
    };
    fetchUserProfile();
  }, []);

  if (!user) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="user-profile">
      <h1>Ваш профиль</h1>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
      <button>Редактировать</button>
    </div>
  );
};

export default UserProfile;
