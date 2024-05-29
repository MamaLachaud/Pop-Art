document.addEventListener("DOMContentLoaded", function () {
    const productNames = [
        "Robot Galactique",
        "Rêverie de Totoro",
        "Monstre",
        "Totem d'Art",
        "Robot Futuriste",
        "Dragon"
    ];

    const productDescriptions = [
        "Un robot coloré et futuriste qui illumine votre espace.",
        "Une peinture vibrante inspirée par l'univers de Totoro.",
        "Un Monstre qui fait peur aux enfants.",
        "Un chef-d'œuvre unique fait à la main avec des détails étonnants.",
        "Un robot futuriste.",
        "Un dragon qui irait parfaitement à côté de votre bonsaï."
    ];

    const productImages = [
        "images/product1_1.png",
        "images/product2_1.png",
        "images/product3_1.png",
        "images/product1_2.png",
        "images/product2_2.png",
        "images/product3_2.png"
    ];

    let currentIndex = 0;

    function updateProducts() {
        const products = document.querySelectorAll(".slideshow-recommended");
        products.forEach((product, index) => {
            const imgElement = product;
            const nameElement = product.parentElement.querySelector(".product-name");
            const descriptionElement = product.parentElement.querySelector(".product-description");

            imgElement.src = productImages[(currentIndex + index) % productImages.length];
            nameElement.textContent = productNames[(currentIndex + index) % productNames.length];
            descriptionElement.textContent = productDescriptions[(currentIndex + index) % productDescriptions.length];
        });
        currentIndex = (currentIndex + 1) % productImages.length;
    }

    setInterval(updateProducts, 3000);
});
document.addEventListener("DOMContentLoaded", function () {
    // Code pour le carousel
    const productNames = [
        "Robot Galactique",
        "Rêverie de Totoro",
        "Monstre",
        "Totem d'Art",
        "Robot Futuriste",
        "Dragon"
    ];

    const productDescriptions = [
        "Un robot coloré et futuriste qui illumine votre espace.",
        "Une peinture vibrante inspirée par l'univers de Totoro.",
        "Un Monstre qui fait peur aux enfants.",
        "Un chef-d'œuvre unique fait à la main avec des détails étonnants.",
        "Un robot futuriste.",
        "Un dragon qui irait parfaitement à côté de votre bonsaï."
    ];

    const productImages = [
        "images/product1_1.png",
        "images/product2_1.png",
        "images/product3_1.png",
        "images/product1_2.png",
        "images/product2_2.png",
        "images/product3_2.png"
    ];

    let currentIndex = 0;

    function updateProducts() {
        const products = document.querySelectorAll(".slideshow-recommended");
        products.forEach((product, index) => {
            const imgElement = product;
            const nameElement = product.parentElement.querySelector(".product-name");
            const descriptionElement = product.parentElement.querySelector(".product-description");

            imgElement.src = productImages[(currentIndex + index) % productImages.length];
            nameElement.textContent = productNames[(currentIndex + index) % productNames.length];
            descriptionElement.textContent = productDescriptions[(currentIndex + index) % productDescriptions.length];
        });
        currentIndex = (currentIndex + 1) % productImages.length;
    }

    setInterval(updateProducts, 3000);

    // Code pour la pop-up
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactLink");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Code pour le carousel
    const productNames = [
        "Robot Galactique",
        "Rêverie de Totoro",
        "Monstre",
        "Totem d'Art",
        "Robot Futuriste",
        "Dragon"
    ];

    const productDescriptions = [
        "Un robot coloré et futuriste qui illumine votre espace.",
        "Une peinture vibrante inspirée par l'univers de Totoro.",
        "Un Monstre qui fait peur aux enfants.",
        "Un chef-d'œuvre unique fait à la main avec des détails étonnants.",
        "Un robot futuriste.",
        "Un dragon qui irait parfaitement à côté de votre bonsaï."
    ];

    const productImages = [
        "images/product1_1.png",
        "images/product2_1.png",
        "images/product3_1.png",
        "images/product1_2.png",
        "images/product2_2.png",
        "images/product3_2.png"
    ];

    let currentIndex = 0;

    function updateProducts() {
        const products = document.querySelectorAll(".slideshow-recommended");
        products.forEach((product, index) => {
            const imgElement = product;
            const nameElement = product.parentElement.querySelector(".product-name");
            const descriptionElement = product.parentElement.querySelector(".product-description");

            imgElement.src = productImages[(currentIndex + index) % productImages.length];
            nameElement.textContent = productNames[(currentIndex + index) % productNames.length];
            descriptionElement.textContent = productDescriptions[(currentIndex + index) % productDescriptions.length];
        });
        currentIndex = (currentIndex + 1) % productImages.length;
    }

    setInterval(updateProducts, 3000);

    // Code pour la pop-up
    const modal = document.getElementById("contactModal");
    const btn = document.querySelector(".header a[href='contact.html']");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Code pour le carousel
    const productNames = [
        "Robot Galactique",
        "Rêverie de Totoro",
        "Monstre",
        "Totem d'Art",
        "Robot Futuriste",
        "Dragon"
    ];

    const productDescriptions = [
        "Un robot coloré et futuriste qui illumine votre espace.",
        "Une peinture vibrante inspirée par l'univers de Totoro.",
        "Un Monstre qui fait peur aux enfants.",
        "Un chef-d'œuvre unique fait à la main avec des détails étonnants.",
        "Un robot futuriste.",
        "Un dragon qui irait parfaitement à côté de votre bonsaï."
    ];

    const productImages = [
        "images/product1_1.png",
        "images/product2_1.png",
        "images/product3_1.png",
        "images/product1_2.png",
        "images/product2_2.png",
        "images/product3_2.png"
    ];

    let currentIndex = 0;

    function updateProducts() {
        const products = document.querySelectorAll(".slideshow-recommended");
        products.forEach((product, index) => {
            const imgElement = product;
            const nameElement = product.parentElement.querySelector(".product-name");
            const descriptionElement = product.parentElement.querySelector(".product-description");

            imgElement.src = productImages[(currentIndex + index) % productImages.length];
            nameElement.textContent = productNames[(currentIndex + index) % productNames.length];
            descriptionElement.textContent = productDescriptions[(currentIndex + index) % productDescriptions.length];
        });
        currentIndex = (currentIndex + 1) % productImages.length;
    }

    setInterval(updateProducts, 3000);

    // Code pour la pop-up
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactLink");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Code pour le carousel
    const productNames = [
        "Robot Galactique",
        "Rêverie de Totoro",
        "Monstre",
        "Totem d'Art",
        "Robot Futuriste",
        "Dragon"
    ];

    const productDescriptions = [
        "Un robot coloré et futuriste qui illumine votre espace.",
        "Une peinture vibrante inspirée par l'univers de Totoro.",
        "Un Monstre qui fait peur aux enfants.",
        "Un chef-d'œuvre unique fait à la main avec des détails étonnants.",
        "Un robot futuriste.",
        "Un dragon qui irait parfaitement à côté de votre bonsaï."
    ];

    const productImages = [
        "images/product1_1.png",
        "images/product2_1.png",
        "images/product3_1.png",
        "images/product1_2.png",
        "images/product2_2.png",
        "images/product3_2.png"
    ];

    let currentIndex = 0;

    function updateProducts() {
        const products = document.querySelectorAll(".slideshow-recommended");
        products.forEach((product, index) => {
            const imgElement = product;
            const nameElement = product.parentElement.querySelector(".product-name");
            const descriptionElement = product.parentElement.querySelector(".product-description");

            imgElement.src = productImages[(currentIndex + index) % productImages.length];
            nameElement.textContent = productNames[(currentIndex + index) % productNames.length];
            descriptionElement.textContent = productDescriptions[(currentIndex + index) % productDescriptions.length];
        });
        currentIndex = (currentIndex + 1) % productImages.length;
    }

    setInterval(updateProducts, 3000);

    // Code pour la pop-up
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactLink");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Code pour le carousel
    const productNames = [
        "Robot Galactique",
        "Rêverie de Totoro",
        "Monstre",
        "Totem d'Art",
        "Robot Futuriste",
        "Dragon"
    ];

    const productDescriptions = [
        "Un robot coloré et futuriste qui illumine votre espace.",
        "Une peinture vibrante inspirée par l'univers de Totoro.",
        "Un Monstre qui fait peur aux enfants.",
        "Un chef-d'œuvre unique fait à la main avec des détails étonnants.",
        "Un robot futuriste.",
        "Un dragon qui irait parfaitement à côté de votre bonsaï."
    ];

    const productImages = [
        "images/product1_1.png",
        "images/product2_1.png",
        "images/product3_1.png",
        "images/product1_2.png",
        "images/product2_2.png",
        "images/product3_2.png"
    ];

    let currentIndex = 0;

    function updateProducts() {
        const products = document.querySelectorAll(".slideshow-recommended");
        products.forEach((product, index) => {
            const imgElement = product;
            const nameElement = product.parentElement.querySelector(".product-name");
            const descriptionElement = product.parentElement.querySelector(".product-description");

            imgElement.src = productImages[(currentIndex + index) % productImages.length];
            nameElement.textContent = productNames[(currentIndex + index) % productNames.length];
            descriptionElement.textContent = productDescriptions[(currentIndex + index) % productDescriptions.length];
        });
        currentIndex = (currentIndex + 1) % productImages.length;
    }

    setInterval(updateProducts, 2000); // Increase the speed of carousel updates

    // Code pour la pop-up
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactLink");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Add event listener for contact link to open modal
            document.getElementById('contactLink').addEventListener('click', function(event) {
                event.preventDefault();
                document.getElementById('contactModal').style.display = 'block';
            });

            // Add event listener to close modal
            document.querySelector('.modal .close').addEventListener('click', function() {
                document.getElementById('contactModal').style.display = 'none';
            });
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Add event listener for contact link to open modal
            document.getElementById('contactLink').addEventListener('click', function(event) {
                event.preventDefault();
                document.getElementById('contactModal').style.display = 'block';
            });

            // Add event listener to close modal
            document.querySelector('.modal .close').addEventListener('click', function() {
                document.getElementById('contactModal').style.display = 'none';
            });
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Robot Galactique', category: 'statues', price: 100, popularity: 5, rating: 4.5, image: 'images/product1_1.png' },
        { id: 2, name: 'Rêverie de Totoro', category: 'tableaux', price: 80, popularity: 3, rating: 4.0, image: 'images/product2_1.png' },
        { id: 3, name: 'Monstre', category: 'statues', price: 120, popularity: 4, rating: 4.7, image: 'images/product3_1.png' },
        { id: 4, name: 'Totem d\'Art', category: 'disney', price: 150, popularity: 2, rating: 4.2, image: 'images/product1_2.png' },
        { id: 5, name: 'Robot Futuriste', category: 'statues', price: 90, popularity: 4, rating: 4.5, image: 'images/product2_2.png' },
        { id: 6, name: 'Dragon', category: 'manga', price: 110, popularity: 5, rating: 4.8, image: 'images/product3_2.png' },
        { id: 7, name: 'Peinture Abstraite', category: 'tableaux', price: 200, popularity: 1, rating: 3.8, image: 'images/product3_2.png' },
        { id: 8, name: 'Sculpture Moderne', category: 'statues', price: 250, popularity: 3, rating: 4.9, image: 'images/product3_2.png' }
    ];

    const itemsPerPage = 6;
    let currentPage = 1;
    const productContainer = document.getElementById('product-list');
    const paginationContainer = document.getElementById('pagination');

    function renderProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-4';
            productCard.innerHTML = `
                <div class="card product-card">
                    <img src="${product.image}" alt="${product.name}" class="card-img-top">
                    <div class="card-body">
                        <h3 class="card-title product-name">${product.name}</h3>
                        <p class="card-text product-description">${product.category}</p>
                        <p class="card-text product-description">${product.price} €</p>
                    </div>
                </div>
            `;
            productContainer.appendChild(productCard);
        });
    }

    function renderPagination(totalItems, itemsPerPage, currentPage) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', function(event) {
                event.preventDefault();
                currentPage = i;
                updateProductList();
            });
            paginationContainer.appendChild(pageItem);
        }
    }

    function updateProductList() {
        const filteredProducts = applyFilters();
        const sortedProducts = applySorting(filteredProducts);
        const paginatedProducts = paginate(sortedProducts, itemsPerPage, currentPage);
        renderProducts(paginatedProducts);
        renderPagination(sortedProducts.length, itemsPerPage, currentPage);
    }

    function applyFilters() {
        const category = document.getElementById('category').value;
        return products.filter(product => {
            return (category === '' || product.category === category);
        });
    }

    function applySorting(products) {
        const sort = document.getElementById('sort').value;
        switch (sort) {
            case 'popularity':
                return products.sort((a, b) => b.popularity - a.popularity);
            case 'rating':
                return products.sort((a, b) => b.rating - a.rating);
            case 'newest':
                return products.sort((a, b) => b.id - a.id);
            case 'low-high':
                return products.sort((a, b) => a.price - b.price);
            case 'high-low':
                return products.sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    }

    function paginate(items, itemsPerPage, currentPage) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    }

    document.getElementById('category').addEventListener('change', updateProductList);
    document.getElementById('sort').addEventListener('change', updateProductList);

    updateProductList();
});

document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Add event listener for contact link to open modal
            document.getElementById('contactLink').addEventListener('click', function(event) {
                event.preventDefault();
                document.getElementById('contactModal').style.display = 'block';
            });

            // Add event listener to close modal
            document.querySelector('.modal .close').addEventListener('click', function() {
                document.getElementById('contactModal').style.display = 'none';
            });
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});
