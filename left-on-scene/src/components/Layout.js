import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../app.css';

const Layout = () => {
  return (
    <div className="App">
      <NavBar/>
        <Outlet />
    </div> 
  );
};

export default Layout;
