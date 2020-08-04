import React from "react";
import "./Home.css";
import Product from "../../components/product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/ZDUyMzkzNmYt/ZDUyMzkzNmYt-MmRmOTRmNDgt-w1500._CB410875966_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123456"
          image="https://images-eu.ssl-images-amazon.com/images/I/61mVHsxerTL._AC_UL270_SR270,270_.jpg"
          title="Corsair SPEC-DELTA, Carbide Series, RGB en Verre Trempé Moyen-tour Boîtier Gaming - Noir"
          rating={3}
          price={78.9}
        />

        <Product
          id="12345"
          image="https://m.media-amazon.com/images/I/51piFlFC5nL._AC_UY327_FMwebp_QL65_.jpg"
          title="Kindle Paperwhite - Résistant à l'eau, Écran haute résolution 6 pouces, 8 Go - Avec offres spéciales"
          rating={4}
          price={100.5}
        />
        <Product
          id="1234"
          image="https://images-eu.ssl-images-amazon.com/images/I/616i5Il16qL._AC_UL270_SR270,270_.jpg"
          title="Processeurs Ryzen 5 3600X"
          rating={4}
          price={235.5}
        />
      </div>

      <div className="home__row">
        <Product
          id="1234567"
          image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY327_FMwebp_QL65_.jpg"
          title="Apple AirPods avec boîtier de charge filaire (2e génération)"
          rating={5}
          price={139.5}
        />

        <Product
          id="12345678"
          image="https://images-eu.ssl-images-amazon.com/images/I/41BoPBx1yoL._AC_SX184_.jpg"
          title="Ultimate Ears Megaboom 3 Enceinte sans Fil Portable Bluetooth"
          rating={5}
          price={148.5}
        />
      </div>

      <div className="home__row">
        <Product
          id="123456789"
          image="https://m.media-amazon.com/images/I/514QDB7aEsL._AC_UY327_FMwebp_QL65_.jpg"
          title="TV LED 4K incurvé 163 cm Samsung UE65RU7305 Téléviseur LCD 65 pouces TV Connectée : Smart TV Netflix"
          rating={5}
          price={1070.5}
        />
      </div>
    </div>
  );
}

export default Home;
