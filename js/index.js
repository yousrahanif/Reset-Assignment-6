const displayAll = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => showAll(data));
};
const showAll = (products) => {
  const parent = document.getElementById("products-content");
  parent.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    console.log(products);

    card.innerHTML = `
    
 <div class="card bg-base-100 w-4/4 mx-auto h-96 shadow-sm p-2">         
              <figure class="w-1/4 mx-auto h-full">
                <img  src="${product.image}" />
              </figure>
         
              <div class="card-actions flex justify-between p-2">
                <div class="badge bg-blue-200">${product.category}</div>
                <div class="text-thin">
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  ${product.rating.rate} (${product.rating.count})
                </div>
              </div>

              <h2 class="text-xl font-semibold text-left ml-4 py-2">
               ${product.title}
              </h2>
              <h2 class="text-2xl font-bold text-left ml-4">$${product.price}</h2>
              <div class="p-4 grid grid-cols-2 gap-2">
                <button onclick=loadDetails(${product.id})  class="btn btn-soft">
                  <i class="fa-regular fa-eye"></i> Details
                </button>
                <button class="btn btn-primary">
                  <i class="fa-solid fa-cart-shopping"></i>Add
                </button>
              </div>
            </div>
    `;
    parent.appendChild(card);
  });
};
const buttonContainer = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => showButton(data));
};
const showButton = (buttons) => {
  const parent = document.getElementById("button-container");
  parent.innerHTML = "";
  buttons.forEach((b) => {
    const safe = b.replace(/'/, "\\'");
    const button = document.createElement("button");
    button.innerHTML = `
<button onclick="individualCategory('${safe}')" class="btn btn-outline rounded-full">
  ${b.toUpperCase()}
</button>
  
  `;
    parent.appendChild(button);
  });
};
const individualCategory = (category) => {
  fetch(
    `https://fakestoreapi.com/products/category/${category.toLowerCase().trim()}`,
  )
    .then((res) => res.json())
    .then((data) => individualCategoryShow(data));
};
const individualCategoryShow = (products) => {
  const parent = document.getElementById("products-content");
  parent.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    console.log(products);

    card.innerHTML = `
    
 <div class="card bg-base-100 w-4/4 mx-auto h-96 shadow-sm p-2">         
              <figure class="w-1/4 mx-auto h-full">
                <img  src="${product.image}" />
              </figure>
         
              <div class="card-actions flex justify-between p-2">
                <div class="badge bg-blue-200">${product.category}</div>
                <div class="text-thin">
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  ${product.rating.rate} (${product.rating.count})
                </div>
              </div>

              <h2 class="text-xl font-semibold text-left ml-4 py-2">
               ${product.title}
              </h2>
              <h2 class="text-2xl font-bold text-left ml-4">$${product.price}</h2>
              <div class="p-4 grid grid-cols-2 gap-2">
                <button  onclick="loadDetails(${product.id})" class="btn btn-soft">
                  <i class="fa-regular fa-eye"></i> Details
                </button>
                <button class="btn btn-primary">
                  <i class="fa-solid fa-cart-shopping"></i>Add
                </button>
              </div>
            </div>
    `;
    parent.appendChild(card);
  });
};
const loadDetails = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => displayModal(data));
};
const displayModal = (details) => {
  const modalDetails = document.getElementById("model-container");
  modalDetails.innerHTML = `
   <div class="card bg-base-100 w-4/4 mx-auto h-96 shadow-sm p-2">         
              <figure class="w-1/4 mx-auto h-full">
                <img  src="${details.image}" />
              </figure>
         
              <div class="card-actions flex justify-between p-2">
                <div class="badge bg-blue-200">${details.category}</div>
                <div class="text-thin">
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  ${details.rating.rate} (${details.rating.count})
                </div>
              </div>

              <h2 class="text-xl font-semibold text-left ml-4 py-2">
               ${details.title}
              </h2>
              <h2 class="text-2xl font-bold text-left ml-4">$${details.price}</h2>
            
               
                <button class="btn  btn-primary">
                  <i class="fa-solid fa-cart-shopping"></i>Buy Now
                </button>
              </div>
            </div>
  
  `;
  document.getElementById("my_modal_5").showModal();
};

const trending = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => showTrending(data));
};
const showTrending = (products) => {
  const parent = document.getElementById("tredning-container");
  parent.innerHTML = "";

  products.slice(0, 3).forEach((product) => {
    const card = document.createElement("div");
    console.log(products);

    card.innerHTML = `
    
 <div class="card bg-base-100 w-4/4 mx-auto h-96 shadow-sm p-2">         
              <figure class="w-1/4 mx-auto h-full">
                <img  src="${product.image}" />
              </figure>
         
              <div class="card-actions flex justify-between p-2">
                <div class="badge bg-blue-200">${product.category}</div>
                <div class="text-thin">
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  ${product.rating.rate} (${product.rating.count})
                </div>
              </div>

              <h2 class="text-xl font-semibold text-left ml-4 py-2">
               ${product.title}
              </h2>
              <h2 class="text-2xl font-bold text-left ml-4">$${product.price}</h2>
              <div class="p-4 grid grid-cols-2 gap-2">
                <button onclick=loadDetails(${product.id})  class="btn btn-soft">
                  <i class="fa-regular fa-eye"></i> Details
                </button>
                <button class="btn btn-primary">
                  <i class="fa-solid fa-cart-shopping"></i>Add
                </button>
              </div>
            </div>
    `;
    parent.appendChild(card);
  });
};

document.getElementById("btn-all").onclick = displayAll;
document.querySelectorAll("md-home").onclick = () => {
  document.getElementById("trending").classList.remove("hidden");
  document.getElementById("our-products").classList.add("hidden");
};
document.getElementById("md-product").onclick = () => {
  document.getElementById("our-products").classList.remove("hidden");
  document.getElementById("trending").classList.add("hidden");
};

document.querySelectorAll("sm-home").onclick = () => {
  document.getElementById("trending").classList.remove("hidden");
  document.getElementById("our-products").classList.add("hidden");
};
document.getElementById("sm-product").onclick = () => {
  document.getElementById("our-products").classList.remove("hidden");
  document.getElementById("trending").classList.add("hidden");
};

displayAll();
buttonContainer();
trending();
// onclick="my_modal_5.showModal()"
