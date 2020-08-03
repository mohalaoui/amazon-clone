import React from "react";
import { useStateValue } from "../context/StateProvider";
import ProductCheckout from "./ProductCheckout";
import SubTotal from "./SubTotal";
import "./Cart.css";

// rfce
function Cart() {
  const [{ cart }] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__left">
        {cart?.length === 0 ? (
          <div className="cart__empty">
            <h2>Votre panier est vide!</h2>
            <p>
              Vous n'avez pas de produit dans votre panier. Vous pourriez
              ajouter des articles dans la page d'acceuil.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="cart__title">Votre panier</h2>
            {/* list the checkout product */}
            {cart.map((item) => (
              <ProductCheckout
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="cart__right">
          <SubTotal></SubTotal>
        </div>
      )}
    </div>
  );
}

export default Cart;
