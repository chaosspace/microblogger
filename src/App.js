import './App.css';
import { Route,Switch,Redirect } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register'
import Passages from './pages/passages'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/login'} component={Login}></Route>
        <Route path={'/register'} component={Register}></Route>
        <Route path={'/home'} component={Passages}></Route>
        <Redirect to={'/login'} />
      </Switch>
    </div>
  );
}

export default App;
