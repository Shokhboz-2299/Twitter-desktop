
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Components 
import Login from './pages/Login/Login';
import Home from './pages/home/Home';

// Routes 
import Public from './routes/Public';
import Private from './routes/Private';

function App() {
  return (
    <>
  <Switch>
    <Public path="/login" component={Login} />    {/*<Login /></Route> */}
    <Private path="/" component={Home} exact={true} />
    <Route path="*">Error page</Route>
  </Switch>
    </>
  );
}

export default App;
