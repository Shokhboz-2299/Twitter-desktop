
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Components 
import Login from './pages/Login/Login';

function App() {
  return (
    <>
  <Switch>
    <Route path="/login" component={Login} />    {/*<Login /></Route> */}
    <Route path="/" exact>Home page</Route>
    <Route path="*">Error page</Route>
  </Switch>
    </>
  );
}

export default App;
