import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/" className="App-link">Go Home</Link>
          <Link to="/counter" className="App-link">Go to counter page</Link>
          <Link to="/people-list" className="App-link">Go to people list page</Link>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/counter/:name?">
            <CounterButtonPage />
          </Route>
          <Route path="/people-list">
            <PeopleListPage />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
