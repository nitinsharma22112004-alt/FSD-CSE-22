import React from "react";
import "./Book.css";
import image from "../assets/react.svg";
const Book = ({ props }) => {
  return (
    <div className="book">
      <img src={image} width="100" height="100" alt="Book Iamge" />
      <h2>Title:{props.title}</h2>
      <h2>Price:{props.price}/-</h2>
      <button>AddToCart</button>
    </div>
  );
};

export default Book;