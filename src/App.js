import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  RandomTestPage,
  NotFoundPage,
  ControlledFormPage,
  UnControlledFormPage,
  UserProfilePage
} from './pages';
import { NavBar } from './NavBar';
import {FormsNavBar} from './FormsNavBar';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <NavBar />
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
            <Route path="/user">
              <UserProfilePage />
            </Route>
            <Route path="/forms">
              <Router>
              <FormsNavBar/>
                <Route path="/forms/controlled">
                  <ControlledFormPage />
                </Route>
                <Route path="/forms/unControlled">
                  <UnControlledFormPage />
                </Route>
              </Router>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
