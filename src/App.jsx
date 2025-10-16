import "./App.css";
import { getProducts } from "./data/products";
import { convertToDollars } from "./data/currency";

function App() {
  const products = getProducts();

  return (
    <div className="main-container">
      <div className="products-container">
        <h2>Customize Your Lawn Subscription</h2>
        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-card-details">
                <p>{product.name}</p>
                <p className="price">{convertToDollars(product.price)}</p>
              </div>
              <div className="product-card-actions">
                <button className="btn secondary">Add to Subscription</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart">
        <h2>Your Subscription</h2>
        <div className="empty-state">
          <p>No items added yet</p>
        </div>
        <button className="btn primary full-width">Generate Lawn Plan</button>
      </div>
      <div className="shipments">
        <h2>Shipments</h2>
        <div className="empty-state">
          <p>Generate a lawn plan to see shipments</p>
        </div>
      </div>
    </div>
  );
}

export default App;
