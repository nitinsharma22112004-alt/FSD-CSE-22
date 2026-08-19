const bookdata = [
  {
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    price: 234,
  },
  {
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    price: 350,
  },
  {
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    price: 450,
  },
];

function Book(book) {
  const div = document.createElement("div");
  div.setAttribute("class", "book");

  const image = document.createElement("img");
  image.setAttribute("src", book.image);
  image.setAttribute("height", "200px");
  image.setAttribute("width", "200px");

  const h2 = document.createElement("h2");
  h2.innerText = "Price: ₹" + book.price;
  h2.style.color = "blue";

  const bt = document.createElement("button");
  bt.innerText = "Add To Cart";

  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(bt);

  return div;
}

const bookStore = bookdata.map((b) => {
  return Book(b);
});

const parent = document.getElementById("bookStore");

for (let book of bookStore) {
  parent.appendChild(book);
}
