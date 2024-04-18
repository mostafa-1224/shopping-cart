import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../../assets/cart-icon.png";
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
            <li className="cart-icon">
              <img src={CartIcon} alt="" srcset="" width="30px" />
              <span>0</span>
            </li>
          </ul>
        </nav>
      </div>


      <Outlet />
    </div>
  );
}