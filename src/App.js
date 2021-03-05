import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';
import FourOhFour from './components/FourOhFour';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/quiz">
            <Multiplier
              x={5}
              y={7}
            />
            <EvenClicks />
            <CountBy step={5} />
            <HideMe>Blah blah blah</HideMe>
            <MinimumLength length={30} />
          </Route>
          <FourOhFour />
        </Switch>
      </>
    </Router>
  );
}

export default App;
