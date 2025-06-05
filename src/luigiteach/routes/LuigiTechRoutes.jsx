import { Navigate, Route, Routes } from 'react-router-dom';
import { LuigiTeachPage,  LuigiTechSearch} from '../pages';

export const LuigiTechRoutes = () => {
  return (
    <Routes>
      <Route path="luigitech" element={<LuigiTeachPage />} />
      <Route path="search" element={<LuigiTechSearch />} />

      <Route path="/*" element={<Navigate to="/luigitech" />} />
    </Routes>
  );
};
