import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SimpleCard from './components/SimpleCard.js';
import Events from './components/events/Events.js'
import FormValidation from './components/FormValidation.js';
import ShoppingList from './components/ShoppingList.js';
import CardBook from './components/cardBook/CardBook.js';
import './App.css';
import './styles/Card.css'
import './styles/Events.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="nav-ul">
          <li className="nav-li"><Link to="/Cards">Card</Link></li>
          <li className="nav-li"><Link to="/Events">Input and Movement Events</Link></li>
          <li className="nav-li"><Link to="/FormValidation">Form Validation</Link></li>
          <li className="nav-li"><Link to="/ShoppingList">Shopping List</Link></li>
          <li className="nav-li"><Link to="/CardBook">Card Book</Link></li>
        </ul>
        <Switch>
          <Route exact path="/Cards" component={SimpleCard} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/FormValidation" component={FormValidation}/>
          <Route exact path="/ShoppingList" component={ShoppingList}/>
          <Route exact path="/CardBook" component={CardBook}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;