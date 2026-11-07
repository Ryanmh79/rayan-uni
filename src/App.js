import React from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import HeadlineCards from "./componets/HeadlineCards";
import Food from "./componets/Food";
import Category from "./componets/Category"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food />
      <Category />
    </div>
  );
}

export default App;
