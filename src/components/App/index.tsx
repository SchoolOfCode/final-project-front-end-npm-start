import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainboard from '../Mainboard';
import Nav from '../Nav';

import './App.scss';

const App = (): JSX.Element => {
  const renderRoutes = (): JSX.Element => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainboard />} />
          {/* <Route path="/exercise-planner" element={} /> */}
          {/* <Route path="/meal-planner" element={} />
          <Route path="/hydration-tracker" element={} />
          <Route path="/meditation-portal" element={} /> */}
        </Routes>
      </BrowserRouter>
    );
  };

  return (
    <div className="app">
      <Nav />

      {renderRoutes()}
    </div>
  );
};

export default App;
