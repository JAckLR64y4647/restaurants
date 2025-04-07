import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBooking = (data) => {
    // Логика для отправки данных бронирования
    setIsSubmitted(true);
  };

  return (
    <div className="booking-page">
      <h1>Бронирование столика</h1>
      {isSubmitted ? (
        <p>Ваше бронирование успешно оформлено!</p>
      ) : (
        <BookingForm onSubmit={handleBooking} />
      )}
    </div>
  );
};

export default BookingPage;
