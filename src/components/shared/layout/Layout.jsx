import { Link, Outlet } from "react-router-dom";
import './layout.scss';

export default function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <h1>Tangent</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>


      <Outlet />
    </div>
  );
}