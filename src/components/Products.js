import productsJSON from "./products.json";

export function Products(props) {
    function addToCart(cartItems){
       const updateCartItems = props.updateCartItems;
       const cartItemsProps = props.cartItems;
        updateCartItems((cartItemsProps) => [...cartItemsProps, cartItems]);
    }
  function renderProducts(){
      if(productsJSON !== undefined){
         return productsJSON.results.map(function(productItem) {
                return(
                    <div className="m-3" key={productItem.name}>
                    <div className="card" style={{width: '18rem'}}>
                    <img src="../images/cotton shirt.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{productItem.name}</h5>
                      <p className="card-text">{productItem.info}</p>
                      <p className="card-price"><strong>Price: Rs{productItem.price}</strong></p>
                      <button href="#" className="btn btn-primary" onClick={ () => addToCart(productItem)}>Add to cart</button>
                    </div>
                  </div>
                  </div>
                  );
          });
      }
  }
  return (
      <div>
    <h2 className="mt-4">
      <center>Our Items</center>
    </h2>
    <div className="d-flex w-100 justify-content-center align-items-center mt-5">
      {renderProducts()}
    </div>
    </div>
  );
}
