import { powerUps } from "./database/items.js";

const productsGrid = document.querySelector(".js-products-grid");

powerUps.forEach(item => {
  const cardHTML = `
    <div class="product-card">
        <h3 class="mb-5 text-center">${item.name}</h3>

        <div class="d-flex justify-content-between gap-5 mb-4">
          <div>
            <img src="${item.image}" class="product-img">
          </div>

          <div class="d-flex flex-column gap-2 me-5">
            <h4>Stats</h4>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#545454"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg> ${item.stats.hp}</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#545454"><path d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z"/></svg> ${item.stats.attack}</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#545454"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg> ${item.stats.defence}</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#545454"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"/></svg> ${item.stats.magic}</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#545454"><path d="m520-120 40-280H319l321-440h40l-40 280h241L560-120h-40ZM120-240v-80h348l-12 80H120ZM80-440v-80h228l-58 80H80Zm80-200v-80h294l-58 80H160Z"/></svg> ${item.stats.speed}</div>
          </div>
        </div>

        <div>
            <p class="fw-bold">${item.price} Points</p>
            <p>${item.description}</p>
        </div

        <div>
          <button class="card-btn js-card-btn">Add</button>
        </div>
    </div>
  `;
  productsGrid.insertAdjacentHTML('beforeend', cardHTML);
});
