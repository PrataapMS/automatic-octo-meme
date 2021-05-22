import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, RandomTestPage, ProtectedPage, NotFoundPage } from './pages';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/" className="App-link">Go Home</Link>
          <Link to="/counter" className="App-link">Go to Counter page</Link>
          <Link to="/people-list" className="App-link">Go to People List page</Link>
          <Link to="/random-test" className="App-link">Go to Random Test page</Link>
          <Link to="/protected" className="App-link">Go to protected page</Link>


          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/counter/:name?">
              <CounterButtonPage />
            </Route>
            <Route path="/people-list">
              <PeopleListPage />
            </Route>
            <Route path="/random-test">
              <RandomTestPage />
            </Route>
            <Route path="/protected">
              <ProtectedPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
