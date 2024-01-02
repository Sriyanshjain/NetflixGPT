import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WatchMovie from './WatchMovie';
import ErrorPage from './ErrorPage';
import Header from './Header';

const Body = () => {
 

  return (
    <div>
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/movie/:movieId"  element={<WatchMovie />} />

          {/* Wildcard route for handling 404 errors */}
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<ErrorPage/>} />
          {/* Optional: You can redirect to the 404 page using navigate in a function */}
          {/* <Route path="*"  /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Body;
