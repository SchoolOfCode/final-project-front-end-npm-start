import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Nav';
import Mainboard from '../Mainboard';
import './App.scss';

const App = (): JSX.Element => {
  const renderRoutes = (): JSX.Element => {
    return (
      <Router>
        <Switch>
          <Route path="/exercise-planner">Render the exercise planner component</Route>
          <Route path="/meal-planner">Render the meal planner component</Route>
          <Route path="/hydration-tracker">Render the hydration tracker component</Route>
          <Route path="/meditation-portal">Render the meditation-portal component</Route>
          <Route path="/">
            <Mainboard />
          </Route>
        </Switch>
      </Router>
    );
  };

  return (
    <div className="app">
      <Nav />
      {/* <WorkoutDisplay /> */}
      {renderRoutes()}
    </div>
  );
};

export default App;
