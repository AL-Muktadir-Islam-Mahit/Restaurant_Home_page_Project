function toggleMoreProducts() {
    const products = document.querySelectorAll('.product-card');
    const seeMoreButton = document.querySelector('.see-more');

    let visibleCount = 0;
    products.forEach((product) => {
        if (product.style.display !== 'none') {
            visibleCount++;
        }
    });

    if (visibleCount === 6) {
        // Show all products
        products.forEach((product) => {
            product.style.display = 'block';
        });
        seeMoreButton.textContent = 'Show Less';
    } else {
        // Show only first 6 products
        products.forEach((product, index) => {
            if (index < 6) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
        seeMoreButton.textContent = 'See More Products';
    }
}
