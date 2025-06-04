import { Navigate, Route, Routes } from 'react-router-dom';
import { LuigiTeachPage } from '../pages/LuigiTeachPage';

export const LuigiTechRoutes = () => {
  return (
    <Routes>
      <Route path="luigitech" element={<LuigiTeachPage />} />

      <Route path="/*" element={<Navigate to="/luigitech" />} />
    </Routes>
  );
};
