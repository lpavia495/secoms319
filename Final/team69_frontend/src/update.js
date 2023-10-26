import React, { useState } from "react";

function Update({
  showUpdateView,
  isCrudBackVisable,
  oneProduct,
  setOneProduct,
  viewer2,
  setViewer2,
}) {
  const [shouldRefresh, setShouldRefresh] = useState(false);

  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:4000/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneProduct(dataArr);
        });
      setViewer2(!viewer2);
    } else {
      console.log("Wrong number of Product id.");
    }
  }
  async function updatePrice(id) {
    if (id === "") {
      alert("Must have a valid ID in the input");
      return;
    }
    const newPrice = Math.abs(
      parseFloat(document.getElementById("newPrice").value)
    );
    console.log(
      "IN UPDATE PRICE, Element's ID: ",
      document.getElementById("message").value
    );
    console.log(
      "IN UPDATE PRICE, New price: ",
      document.getElementById("newPrice").value
    );
    setShouldRefresh(true);
    await fetch("http://localhost:4000/update/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        price: newPrice,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Fetch works");
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        console.log(data);
        // Update the state with the updated product
        setOneProduct([data]);
      })
      .then(() => {
        setShouldRefresh(true);
      })
      .catch((error) => {
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      });
  }

  const showOneItem = oneProduct.map((el) => (
    <div key={el._id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <img src={el.image} width={150} className="img-fluid img-thumbnail" />{" "}
      <br />
      <span className="fw-bold">Title:</span> {el.title} <br />
      <span className="fw-bold">Category:</span> {el.category} <br />
      <span className="fw-bold">Price:</span> ${el.price} <br />
      <span className="fw-bold">Rate:</span> {el.rating.rate} and{" "}
      <span className="fw-bold">Count:</span> {el.rating.count} <br />
    </div>
  ));

  return (
    <>
      {isCrudBackVisable && showUpdateView && (
        <div
          className="viewAllProducts crud container-fluid p-5"
          style={{ backgroundColor: "gold" }}
        >
          <h1 className="h1" style={{ color: "purple" }}>Catalog of Products </h1>
          <br />
          <div className="oneProductContainer">
            <h1 className="oneProduct" style={{ color: "purple" }}>Show one Product by Id:</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                id="message"
                name="message"
                placeholder="ID"
                className="form-control"
                onChange={(e) => getOneProduct(e.target.value)}
              />
              <button
                className="btn btn-sm btn-primary"
                type="button"
                id="button-addon2"
                onClick={() =>
                  getOneProduct(document.getElementById("message").value)
                }
              >
                Show
              </button>
            </div>

            {viewer2 && <div className="row products">{showOneItem}</div>}
            {viewer2 && (
              <div className="input-group mb-3">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h1 className="oneProduct">Enter new Price:</h1>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="text"
                      id="newPrice"
                      name="message"
                      placeholder="new price"
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                    <button
                      className="btn btn-md btn-primary"
                      type="button"
                      id="button-addon2"
                      style = {{marginLeft:"-2px", borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"}}
                      onClick={(e) => {
                        console.log(
                          "Element's ID: ",
                          document.getElementById("message").value
                        );
                        updatePrice(document.getElementById("message").value);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr />
        </div>
      )}
    </>
  );
}

export default Update;
