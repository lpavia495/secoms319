import React, { useState } from "react";

function Add({ showAddView, isCrudBackVisable }) {
  const categoryImages = {
    "New": [
      require("./images/image01.jpg"),
      require("./images/image02.jpg"),
      require("./images/image03.jpg"),
      require("./images/image05.jpg"),
      
    ],
    Used: [
    require("./images/image04.jpg"), 
    require("./images/image06.jpg")],
    
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [addNewProduct, setAddNewProduct] = useState({
    _id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: "", count: "" },
  });

  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "_id") {
      setAddNewProduct({ ...addNewProduct, _id: parseInt(Math.abs(value)) });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: Math.abs(value) });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      const temp = value;
      setAddNewProduct({ ...addNewProduct, image: temp });
    } else if (evt.target.name === "rate") {
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: Math.abs(value) },
      });
    } else if (evt.target.name === "count") {
      const temp = addNewProduct.rating.rate;
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: Math.abs(value) },
      });
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://localhost:4000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          alert(errorMessage.message);
        });
      });
  }

  return (
    <>
      {isCrudBackVisable && showAddView && (
        <div className="form">
          <h3 className="motto" style={{ color: "purple" }}
          >Add a new product :</h3>
          <form>
  <div className="form-group">
    <label>ID</label>
    <input type="number" placeholder="id?" name="_id" value={addNewProduct._id} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Title</label>
    <input type="text" placeholder="title?" name="title" value={addNewProduct.title} onChange={handleChange} className="form-control" />
  </div>

  <div className="form-group">
    <label>Price</label>
    <input type="number" placeholder="price?" name="price" value={addNewProduct.price} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Description</label>
    <input type="text" placeholder="description?" name="description" value={addNewProduct.description} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Category</label>
    <select name="category" id="category" onChange={handleCategoryChange} className="form-control">
      <option value="">--Select Category--</option>
      <option value="New">New</option>
      <option value="Used">Used</option>
      
    </select>
  </div>
  <div className="form-group">
    <label>Image</label>
    <select name="image" required onChange={handleChange} className="form-control">
      <option value="">Select an image</option>
      {selectedCategory && categoryImages[selectedCategory].map((image) => (
        <option key={image} value={image}>{image}</option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>Rating</label>
    <input type="number" placeholder="rate?" name="rate" value={addNewProduct.rating.rate} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Count</label>
    <input type="number" placeholder="count?" name="count" value={addNewProduct.rating.count} onChange={handleChange} className="form-control" />
  </div>
  <button type="submit" onClick={handleOnSubmit} className="removeProductButton">submit</button>
</form>
        </div>
      )}
    </>
  );
}

export default Add;
