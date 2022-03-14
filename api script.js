const getHtmlElement = (type, typeValue) => {
  return document.querySelector(`${type === "id" ? "#" : "."}${typeValue}`);
};

const allProductHandler = getHtmlElement("id", "all");
const input = getHtmlElement("id", "single");
const singleProsuct = getHtmlElement("id", "byId");
const allProducts = getHtmlElement("id", "allProducts");

const fetchProducts = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  return products;
};

allProductHandler.addEventListener("click", async () => {
  const productOutput = await fetchProducts();
  let product;
  productOutput.forEach((element) => {
    product += `
      <div>
        <img src="${element.image}"/>
        <h3> ${element.title}</h3>
        <p>${element.id}</p>
      </div>
    `;
  });
  allProducts.innerHTML = product;
});
