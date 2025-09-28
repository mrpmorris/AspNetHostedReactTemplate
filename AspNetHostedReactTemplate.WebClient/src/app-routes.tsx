import { Routes, Route } from 'react-router-dom';
import Index from './index';
import WeatherForecast from './weather-forecast';

function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/weather-forecast" element={<WeatherForecast/> }/>
      </Routes>
   );
}

export default AppRoutes;