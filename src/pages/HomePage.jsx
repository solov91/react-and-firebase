import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './LoginPage';

export default function HomePage() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}
