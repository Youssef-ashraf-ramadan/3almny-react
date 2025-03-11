import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProtectedRoute from '../components/ProtectedRoute';

export const AppRoutes = () => {
  
  return (
      <Routes>

        {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/" element={<Home />} />
        {/* </Route> */}
      </Routes>
  )
}
