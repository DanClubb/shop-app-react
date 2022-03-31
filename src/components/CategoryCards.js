import "./CategoryCards.css";
import { Link } from "react-router-dom";

function CategoryCards() {
  return (
    <div className="card-container">
      <Link to="/men">
        <div className="card men">
          <h2>Men's Clothing</h2>
        </div>
      </Link>
      <Link to="/women">
        <div className="card women">
          <h2>Woman's Clothing</h2>
        </div>
      </Link>
      <Link to="/electronics">
        <div className="card electronics">
          <h2>Electronics</h2>
        </div>
      </Link>
      <Link to="/jewellery">
        <div className="card jewellery">
          <h2>Jewellery</h2>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCards;
