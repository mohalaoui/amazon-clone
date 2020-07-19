import React from "react";
import { Button } from "@material-ui/core";
import "./ProductCheckout.css";
import { useStateValue } from "../context/StateProvider";

function ProductCheckout({ id, title, price, image }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="productCheckout" key={id}>
      <img className="productCheckout__image" src={image} alt="" />
      <div className="productCheckout__info">
        <p className="productCheckout__title">{title}</p>
        <p className="productCheckout__stockState">En stock</p>
        <Button onClick={removeFromCart}>Supprimer</Button>
      </div>
      <div className="productCheckout__price">
        <p>{price}€</p>
      </div>
    </div>
  );
}

export default ProductCheckout;
