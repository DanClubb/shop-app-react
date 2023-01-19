import NavBar from "../components/UI/NavBar";

import Products from "../components/Products/Products";

function Women() {
  document.querySelector("body").style.overflow = "visible";
  return (
    <main>
      <h1>Women</h1>
      <NavBar />
      <Products category="women" />
    </main>
  );
}

export default Women;
