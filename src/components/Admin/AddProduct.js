import db from "../../firestore";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

function AddProduct() {
  const [category, setCategory] = useState("men");
  const [imgUrl, SetImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addNewProduct = async () => {
    console.log(category);
    console.log(imgUrl);
    console.log(price);
    console.log(description);
    await addDoc(collection(db, "Men"), {
      category: category,
      image: imgUrl,
      price: price,
      description: description,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form
        className="add-product-form"
        onSubmit={(event) => submitHandler(event)}
      >
        <label>Category</label>
        <select
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewellery">Jewellery</option>
        </select>
        <label>Img URL</label>
        <input
          onChange={(event) => {
            SetImgUrl(event.target.value);
          }}
          required
        />
        <label>Price</label>
        <input
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          required
        />
        <label>Description</label>
        <input
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          required
        />

        <button
          className="submit-product-btn"
          type="submit"
          onClick={addNewProduct}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
