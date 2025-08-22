// Product data
const products = [
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Headphones", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "Novel", category: "books" },
    { name: "Cookbook", category: "books" }
];


function displayProducts(category) {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach(product => {
        if (category === "all" || product.category === category) {
            const item = document.createElement("p");
            item.textContent = product.name;
            list.appendChild(item);
        }
    });
}


window.onload = function () {
    const dropdown = document.getElementById("category");

    
    displayProducts("all");

    
    dropdown.onchange = function () {
        displayProducts(dropdown.value);
    };
};
