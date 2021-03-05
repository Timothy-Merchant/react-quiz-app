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
          <Route path="/even-clicks">
            <EvenClicks />
          </Route>
          <Route path="/hide-me">
            <HideMe>Blah blah blah</HideMe>
          </Route>
          <Route path="/count-by/:number" render={({ match }) =>
            (<CountBy step={match.params.number} />)}>
          </Route>
          <Route path="/minimum/:number" render={({ match }) =>
            (<MinimumLength length={match.params.number} />)
          }>
          </Route>
          <Route path="/multiplier/:first/:second" render={({ match }) =>
            (<Multiplier x={match.params.first} y={match.params.second} />)}>
          </Route>          
          <FourOhFour />
        </Switch>
      </>
    </Router>
  );
}

export default App;
