import { Navigate, Route, Routes } from 'react-router-dom';
import { LuigiTeachMovie, LuigiTechSearch} from '../pages';

export const LuigiTechRoutes = () => {
  return (
    <Routes>
      <Route path="search" element={<LuigiTechSearch />} />
      <Route path="movie" element={<LuigiTeachMovie />} />

      <Route path="/*" element={<Navigate to="/search" />} />
    </Routes>
  );
};
