import React from "react";
import "./Product.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../apiContext/StateProvider";
import * as actions from "../../apiContext/actions";

function Product({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actions.ADD_TO_CART,
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <img className="product__image" src={image} alt="" />
        <p>{title}</p>
        <div className="product__star">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product__price">
          <strong>{price} €</strong>
        </p>
      </div>
      <Button onClick={addToCart}>Ajouter au panier</Button>
    </div>
  );
}

export default Product;
