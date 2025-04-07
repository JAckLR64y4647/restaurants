import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './store/AuthContext';
import { RestaurantProvider } from './store/RestaurantContext';
import { BookingProvider } from './store/BookingContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RestaurantDetail from './pages/RestaurantDetail';

function App() {
  return (
    <AuthProvider>
      <RestaurantProvider>
        <BookingProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/restaurant/:id" component={RestaurantDetail} />
            </Switch>
            <Footer />
          </Router>
        </BookingProvider>
      </RestaurantProvider>
    </AuthProvider>
  );
}

export default App;
