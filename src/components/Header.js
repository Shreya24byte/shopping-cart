import { Link } from "react-router-dom";
export function Header(props) {
  console.log(props);
  return (
    <nav className="navbar navbar-light bg-primary flex">
    <div className="text-center w-100 text-light d-flex">
      <div className="w-100 h4">Shopping Cart</div>
      <div className="d-flex me-5 align-items-center ">
      <Link to="/checkout">
      <i className="fas fa-shopping-cart text-light ms-auto me-3"></i>
      </Link>
      {props.cartItems.length}
      </div>
    </div>
  </nav>
  );
}
