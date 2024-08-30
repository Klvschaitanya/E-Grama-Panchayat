import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={{ padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0 }}>
        <li style={{ margin: '0 20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'darkred' }}>Home</Link>
        </li>
        <li style={{ margin: '0 20px' }}>
          <Link to="/stafflogin" style={{ textDecoration: 'none', color: 'darkred' }}>Staff Login</Link>
        </li>
        <li style={{ margin: '0 20px' }}>
          <Link to="/officerlogin" style={{ textDecoration: 'none', color: 'darkred' }}>Officer Login</Link>
        </li>
        <li style={{ margin: '0 20px' }}>
          <Link to="/register" style={{ textDecoration: 'none', color: 'darkred' }}>Register</Link>
        </li>
      </ul>
    </div>
  );
}




/*<BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/stafflogin' exact element={<Staff_page />} />
            <Route path='/officerlogin' exact element={<Officer_page />} />
          </BrowserRouter>  */