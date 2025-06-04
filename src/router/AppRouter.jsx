import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LuigiTechRoutes } from '../luigiteach/routes/LuigiTechRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<LuigiTechRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
