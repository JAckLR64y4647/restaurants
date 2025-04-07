import React, { useEffect, useState } from 'react';
import restaurantService from '../services/restaurantService';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await restaurantService.getAllRestaurants();
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="restaurant-list">
      <h1>Список ресторанов</h1>
      {restaurants.length === 0 ? (
        <p>Нет ресторанов для отображения</p>
      ) : (
        <div className="restaurant-list-container">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
