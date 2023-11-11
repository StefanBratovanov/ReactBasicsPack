import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Card from './components/Card.js';
import Events from './components/Events.js'
import FormValidation from './components/FormValidation.js';
import ShoppingList from './components/ShoppingList.js';
import './App.css';
import './styles/Card.css'
import './styles/Events.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="nav-ul">
          <li className="nav-li"><Link to="/Cards">Cards</Link></li>
          <li className="nav-li"><Link to="/Events">Input and Movement Events</Link></li>
          <li className="nav-li"><Link to="/FormValidation">Form Validation</Link></li>
          <li className="nav-li"><Link to="/ShoppingList">Shopping List</Link></li>
        </ul>
        <Switch>
          <Route exact path="/Cards" component={Card} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/FormValidation" component={FormValidation}/>
          <Route exact path="/ShoppingList" component={ShoppingList}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;