import db from "../../firestore";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

function AddProduct() {
  const [category, setCategory] = useState("");
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
      <form onSubmit={(event) => submitHandler(event)}>
        <label>Category</label>
        <input
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <label>Img URL</label>
        <input
          onChange={(event) => {
            SetImgUrl(event.target.value);
          }}
        />
        <label>Price</label>
        <input
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <label>Description</label>
        <input
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <button type="submit" onClick={addNewProduct}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
