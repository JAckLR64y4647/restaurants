import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import restaurantService from '../services/restaurantService';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await restaurantService.getRestaurantDetails(id);
      setRestaurant(data);
    };
    fetchRestaurant();
  }, [id]);

  if (!restaurant) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="restaurant-detail">
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} />
      <p>{restaurant.description}</p>
      <button>Забронировать столик</button>
    </div>
  );
};

export default RestaurantDetail;
