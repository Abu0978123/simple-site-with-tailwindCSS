import React from "react";

export default function Hero() {
  return (
    <main className="hero flex justify-center items-center">
      <div>
        <h1 className="">YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn gap-10">
            <button className="primary-btn">Shopp Now</button>
            <button className="secondary-btn">Catagory </button>
        </div>
        <span className="">
        Also Available On
        </span> <br /><br />
        <div className="flex mb-4 gap-4">
            <img src="images/flipkart.png" alt="card" />
            <img src="images/amazon.png" alt="card" />
        </div>
      </div>
      <div>
        <img src="images/shoe_image.png" alt="Hero" />
      </div>
    </main>
  );
}
