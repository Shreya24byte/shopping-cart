import { Link } from "react-router-dom";
export function Header(props) {
  console.log(props);
  return (
    <nav className="navbar navbar-dark bg-primary flex">
      <div className="text-light text-center d-flex w-100 ">
        <div className="w-100 ">
          <h4>Shopping Cart </h4>
          <span className="d-flex ps-5 me-5">
            <Link to="/checkout">
              <i className="fas fa-shopping-cart text-light ms-auto me-3"></i>
            </Link>
            {props.cartItems.length}
          </span>
        </div>
      </div>
    </nav>
  );
}
