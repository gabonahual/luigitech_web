import { Navigate, Route, Routes } from 'react-router-dom';
import { LuigiTeachMovie, LuigiTeachPage,  LuigiTechSearch} from '../pages';

export const LuigiTechRoutes = () => {
  return (
    <Routes>
      <Route path="luigitech" element={<LuigiTeachPage />} />
      <Route path="search" element={<LuigiTechSearch />} />
      <Route path="movie" element={<LuigiTeachMovie />} />

      <Route path="/*" element={<Navigate to="/luigitech" />} />
    </Routes>
  );
};
