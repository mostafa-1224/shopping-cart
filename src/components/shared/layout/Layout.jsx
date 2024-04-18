import React from 'react';
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../../assets/cart-icon.png";
import { useCartContext } from '../../../contexts/CartContext';
import './layout.scss';

export default function Layout() {

  const { state:cartCtx } = useCartContext();
  let items = 0;
  for(let i = 0; i < cartCtx.length; i++){
    items += cartCtx[i].count;
  }
  console.log(items)
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
              <img src={CartIcon} alt="" width="30px" />
              <span>{items}</span>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}