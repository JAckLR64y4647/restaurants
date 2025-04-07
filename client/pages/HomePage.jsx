import React, { useEffect } from 'react';
import { useRestaurants } from '../store/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';

const HomePage = () => {
  const { state, fetchRestaurants } = useRestaurants();

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  if (state.loading) return <p>Загрузка...</p>;

  return (
    <div className="home-page">
      <h1>Рестораны</h1>
      {state.restaurants.length === 0 ? (
        <p>Рестораны не найдены</p>
      ) : (
        <div>
          {state.restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
