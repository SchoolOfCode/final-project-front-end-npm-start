import Mainboard from '../Mainboard';
import Nav from '../Nav';
import WorkoutDisplay from '../WorkoutDisplayCard';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <Mainboard />

      {/* <WorkoutDisplay /> */}
    </div>
  );
}

export default App;
