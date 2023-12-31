const products = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    price: 280,
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  },
];

/**
 * 1. funckja render
 * 2. funckja do tworzenia produktu
 * 3. funckja do tworzenia listy produktów
 * 4. wyświetlenie na podstawie arrayki
 * 5. pobranie danych i wyświetlenie pobranych danych
 * https://dummyjson.com/products
 */

const Product = (product) => {
  const productHtml = `
  <div class="product-container">
      <p>Name: <b>${product.title}</b></p>
      <p>Price: <b>${product.price}</b></p>
      <div class="thumbnail-container">
        <img src="${product.thumbnail}" />
      </div>
      <button>Dodaj do koszyka</button>
  </div>
  `;

  return productHtml;
};

const ProductList = (products) => {
  const productListHtml = products.map((singleProduct) =>
    Product(singleProduct)
  );
  return productListHtml.join("");
};

function render() {
  const productsContainerRef = document.getElementById(
    "products-list-container"
  );

  const html = ProductList(products);

  productsContainerRef.innerHTML = html;
}

render();
