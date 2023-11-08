import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Card from './components/Card.js';
import Events from './components/Events.js'
import './App.css';
import './components/Card.css'
import './components/Events.css'

import './Default.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="nav-ul">
          <li className="nav-li"><Link to="/Cards">Cards</Link></li>
          <li className="nav-li"><Link to="/Events">Input and Mouse Events</Link></li>
        </ul>
        <Switch>
          <Route exact path="/Cards" component={Card} />
          <Route exact path="/Events" component={Events} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;