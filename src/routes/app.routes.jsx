import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { NewMovie } from '../pages/NewMovie';
import { Movie } from '../pages/Movie';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register-movie" element={<NewMovie />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}