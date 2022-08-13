import NavBar from "../components/UI/NavBar";

import Products from "../components/Products/Products";

function Women() {
  return (
    <div>
      <h1>Women</h1>
      <NavBar />
      <Products category="women" />
    </div>
  );
}

export default Women;
