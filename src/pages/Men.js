import NavBar from "../components/UI/NavBar";
import Products from "../components/Products/Products";

function Men() {
  return (
    <div>
      <h1>Men</h1>
      <NavBar />
      <Products category="men" />
    </div>
  );
}

export default Men;
