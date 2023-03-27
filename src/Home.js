import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for
                  Baking, Stylish Kitchen Mixer with
                  K-beater, Dough Hook and Whisk, 5 Litre
                  Glass Bowl"
            price={239.8}
            rating={4}
            image="https://m.media-amazon.com/images/I/71UcmmSgCSL._SX569_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Alesis Drums Nitro Mesh Kit - Electric Drum Set with USB MIDI Connectivity, Mesh Drum Pads, Kick Pedal and Rubber Kick Drum, 40 Kits and 385 Sounds"
            price={400.8}
            rating={5}
            image="https://m.media-amazon.com/images/I/41mAL1IFxGL._AC_SY580_.jpg"
          />
          <Product
            id="49538094"
            title="Apple iPad (10.2 inç, Wi‑Fi, 32 GB) - Uzay Grisi - MYL92TU/A"
            price={804.8}
            rating={3}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_GEO_TR_FMT_WHH?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617923582000"
          />
          <Product
            id="49538094"
            title="RockJam Full Size Electric Guitar Kit with 10-Watt Guitar Amp, Lessons, Strap, Gig Bag, Picks, Whammy, Lead and Spare Strings - Red"
            price={263.2}
            rating={5}
            image="https://m.media-amazon.com/images/I/41bGjgJYi9L._AC_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Upgraded, Anker Soundcore Bluetooth Speaker with IPX5 Waterproof, Stereo Sound, 24H Playtime, Portable Wireless Speaker for iPhone, Samsung and More"
            price={934.2}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61y+b4M0RZL._AC_SL1200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
