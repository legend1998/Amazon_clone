import React from "react";
import "../css/Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
        alt="this is image"
        className="body_image"
      />
      <div className="home_container">
        <Product
          id="12"
          desc="Ketofy - Dark Keto Chocolate (50g) | Sugar Free Unsweetened Intense Dark
        Chocolate | No Maltitol | Gluten Free"
          price={199.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81EYbsEMMYL._SL1500_.jpg"
        />
        <Product
          id="123"
          desc="IFB 6 Kg Fully-Automatic Front Loading Washing Machine (NEODIVA-VX, White)"
          price={24490.0}
          image="https://images-na.ssl-images-amazon.com/images/I/71P%2BxcHYy9L._SL1500_.jpg"
        />
      </div>
      <div className="home_container">
        <Product
          id="14"
          desc="Ketofy - Dark Keto Chocolate (50g) | Sugar Free Unsweetened Intense Dark
        Chocolate | No Maltitol | Gluten Free"
          price={199.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81EYbsEMMYL._SL1500_.jpg"
        />
        <Product
          id="15"
          desc="Ketofy - Dark Keto Chocolate (50g) | Sugar Free Unsweetened Intense Dark
        Chocolate | No Maltitol | Gluten Free"
          price={199.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81EYbsEMMYL._SL1500_.jpg"
        />
        <Product
          id="16"
          desc="Ketofy - Dark Keto Chocolate (50g) | Sugar Free Unsweetened Intense Dark
        Chocolate | No Maltitol | Gluten Free"
          price={199.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81EYbsEMMYL._SL1500_.jpg"
        />
      </div>
      <div className="home_container">
        <Product
          id="17"
          desc="Ketofy - Dark Keto Chocolate (50g) | Sugar Free Unsweetened Intense Dark
        Chocolate | No Maltitol | Gluten Free"
          price={199.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81EYbsEMMYL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}
