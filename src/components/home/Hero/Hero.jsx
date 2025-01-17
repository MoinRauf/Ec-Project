import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { products } from "../../assets/data/data";
import { SearchItems } from "./SearchItems";
import TypingEffect from "../../pages/TypingEffect"; // Adjust the path as necessary

export const Hero = () => {
  // search
  const [value, setValue] = useState("");
  const onChanage = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (key) => {
    setValue(key);
    console.log("search", key);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            <TypingEffect
              text="Ovver 6,500 Curated Design Resources, Graphic & Website Templates"
              speed={100}
            />
          </h1>
          <p>
            High-quality Design Themes for personal or commercial use contains
            6k+ items in 100 categories.
          </p>
          <div className="search">
            <span>All Categories</span>
            <hr />
            <input
              type="text"
              placeholder="Search Products..."
              onChange={onChanage}
              value={value}
            />
            <button onClick={() => onSearch(value)}>
              <BiSearch className="serachIcon heIcon" />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p>Examples: Mockup, PSD, Theme Design, Image…</p>
        </div>
      </section>
    </>
  );
};
