import { powerUps } from "./database/items.js";

const productsGrid = document.querySelector("js-products-id");

powerUps.forEach(item => {
  productsGrid.innerHTML = `

  `
})
