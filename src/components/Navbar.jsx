import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center  max-w-[1200px] h-[70px] mx-auto ">
        <img
          src="images/brand_logo.png"
          alt="logo"
          className="w-[76px] h-[42px]"
        />
        <ul className="flex gap-3">
          <li>Menu</li>
          <li>Contact</li>
          <li>Location</li>
          <li>About</li>
        </ul>
        <button className="bg-primary w-[70px] login">Login</button>
      </nav>
    </div>
  );
}
