import React from "react";
import { Button, Select, MenuItem } from "@material-ui/core";
import "./ProductCheckout.css";
import { useStateValue } from "../context/StateProvider";
import * as actions from "../context/actions";

function ProductCheckout({ id, title, price, quantity, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: actions.REMOVE_FROM_CART,
      id: id,
    });
  };

  const handleChange = (event) => {
    quantity = event.target.value;
    dispatch({
      type: actions.APDATE_QUANTITY_CART,
      item: {
        id,
        quantity,
      },
    });
  };

  return (
    <div className="productCheckout" key={id}>
      <img className="productCheckout__image" src={image} alt="" />
      <div className="productCheckout__info">
        <p className="productCheckout__title">{title}</p>
        <p className="productCheckout__stockState">En stock</p>

        <Select
          className="productCheckout__select"
          value={quantity}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>(0) supprimer</em>
          </MenuItem> */}
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <Button onClick={removeFromCart}>Supprimer</Button>
      </div>
      <div className="productCheckout__price">
        <p>{price}€</p>
      </div>
    </div>
  );
}

export default ProductCheckout;
