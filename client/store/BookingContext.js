import React, { createContext, useReducer, useContext } from 'react';
import bookingService from '../services/bookingService';

const BookingContext = createContext();

const initialState = {
  bookings: [],
  loading: true,
  error: null,
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_BOOKINGS_SUCCESS':
      return { ...state, bookings: action.payload, loading: false };
    case 'FETCH_BOOKINGS_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'CREATE_BOOKING':
      return { ...state, bookings: [...state.bookings, action.payload] };
    case 'CANCEL_BOOKING':
      return { ...state, bookings: state.bookings.filter(b => b.id !== action.payload) };
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const fetchBookings = async (userId) => {
    try {
      const data = await bookingService.getUserBookings(userId);
      dispatch({ type: 'FETCH_BOOKINGS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_BOOKINGS_ERROR', payload: error.message });
    }
  };

  const createBooking = (booking) => {
    dispatch({ type: 'CREATE_BOOKING', payload: booking });
  };

  const cancelBooking = (bookingId) => {
    dispatch({ type: 'CANCEL_BOOKING', payload: bookingId });
  };

  return (
    <BookingContext.Provider value={{ state, fetchBookings, createBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => useContext(BookingContext);
