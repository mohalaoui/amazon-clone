import React from "react";
import { Button } from "@material-ui/core";
import "./SubTotal.css";
import { useStateValue } from "../context/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../context/reducer";

function SubTotal() {
  const [{ cart }] = useStateValue();
  return (
    <div className="subTotal">
      <p className="subTotal__alert">
        Votre commande est éligible à la livraison Standard gratuite en France
        métropolitaine. restrictions applicables Choisissez cette option lors de
        votre commande
      </p>
      <p className="subTotal__label">
        Sous-total ({cart.length} articles):&nbsp;
        <CurrencyFormat
          className="subTotal__price"
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"€"}
        />
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> Commande contenant un cadeau
      </small>
      <Button>Passer la commande</Button>
    </div>
  );
}

export default SubTotal;
