import React, { createContext, useReducer, useContext } from 'react';
import restaurantService from '../services/restaurantService';

const RestaurantContext = createContext();

const initialState = {
  restaurants: [],
  loading: true,
  error: null,
};

const restaurantReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS_SUCCESS':
      return { ...state, restaurants: action.payload, loading: false };
    case 'FETCH_RESTAURANTS_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  const fetchRestaurants = async () => {
    try {
      const data = await restaurantService.getAllRestaurants();
      dispatch({ type: 'FETCH_RESTAURANTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_RESTAURANTS_ERROR', payload: error.message });
    }
  };

  return (
    <RestaurantContext.Provider value={{ state, fetchRestaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurants = () => useContext(RestaurantContext);
