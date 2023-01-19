import NavBar from "../components/UI/NavBar";
import Products from "../components/Products/Products";

function Men() {
  document.querySelector("body").style.overflow = "visible";
  return (
    <main>
      <h1>Men</h1>
      <NavBar />
      <Products category="men" />
    </main>
  );
}

export default Men;
