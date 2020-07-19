import React from "react";
import "./Product.css";
import StarRateSharpIcon from "@material-ui/icons/StarRateSharp";
import { Button } from "@material-ui/core";
import { useStateValue } from "../context/StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <img className="product__image" src={image} alt="" />
        <p>{title}</p>
        <div className="product__star">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarRateSharpIcon />
              </p>
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
