// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LuigiTechRoutes } from '../luigiteach/routes/LuigiTechRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<LuigiTechRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
