import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SimpleCard from './components/SimpleCard';
import Events from './components/events/Events'
import FormValidation from './components/FormValidation';
import ShoppingList from './components/ShoppingList';
import CardBook from './components/cardBook/CardBook';
import StarWars from './components/starWars/StarWars';
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
          <li className="nav-li"><Link to="/StarWars">Star Wars</Link></li>
        </ul>
        <Switch>
          <Route exact path="/Cards" component={SimpleCard}>
            <SimpleCard />
          </Route>
          <Route exact path="/Events" component={Events} />
          <Route exact path="/FormValidation" component={FormValidation}/>
          <Route exact path="/ShoppingList" component={ShoppingList}/>
          <Route exact path="/CardBook" component={CardBook}/>
          <Route exact path="/StarWars" component={StarWars}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;