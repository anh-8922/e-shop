import data from '../data/eshop-data.js';

// Function to create product listings
function createProductListings() {
    const listProducts = document.querySelector('.listProducts');

    // Check if data is defined
    if (typeof data !== 'undefined') {
        // Loop through the data and create product listings
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            
            // You can customize the product listing structure here
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.descr}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
                <p>Reviews: ${product.reviews}</p>
                <p>Sold: ${product.sold}</p>
            `;

            // Append each product listing to the listProducts div
            listProducts.appendChild(productDiv);
        });
    } else {
        console.error('Data is not defined. Make sure your data file is loaded.');
    }
}

// Call the function to create product listings
createProductListings();
