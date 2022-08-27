import './App.css';
import Routes from './router/routeChart';
import { Outlet,useRoutes } from 'react-router-dom';


export default function App() {
  const routes = useRoutes(Routes)
  return (
    <div className="App">
      { routes }

      <Outlet />
    </div>
  );
}