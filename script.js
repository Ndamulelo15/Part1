// main.js - Essential interactive functionality

document.addEventListener('DOMContentLoaded', function() {
    // 1. Make all product cards interactive
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent;
            const price = this.querySelector('.price').textContent;
            alert(`Added to cart: ${productName} - ${price}`);
        });
    });

    // 2. Making team cards interactive
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.style.transition = 'transform 0.3s ease';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        card.addEventListener('click', function() {
            const name = this.querySelector('h3').textContent;
            const role = this.querySelector('p').textContent;
            alert(`Team Member: ${name}\nRole: ${role}`);
        });
    });

    // 3. FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // Toggle current answer
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });

    // 4. Form validation for enquiry page
    const enquiryForm = document.querySelector('.enquiry-form form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Thank you for your enquiry! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // 5. Form validation for contact page
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                alert('Thank you for your message! We will contact you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // 6. Hero buttons functionality
    const viewProductsBtn = document.querySelector('.btn-primary');
    const visitUsBtn = document.querySelector('.btn-secondary');
    
    if (viewProductsBtn) {
        viewProductsBtn.addEventListener('click', function() {
            window.location.href = 'products.html';
        });
    }
    
    if (visitUsBtn) {
        visitUsBtn.addEventListener('click', function() {
            alert('Visit us at:\n209 Smit Street\nBraamfontein Gate, Braamfontein\n\nHours: Mon-Fri 7am-7pm');
        });
    }

    // 7. Order Now button functionality
    const orderButton = document.querySelector('button[style*="background-color: #d35400"]');
    if (orderButton) {
        orderButton.addEventListener('click', function() {
            window.location.href = 'products.html';
        });
    }

    // 8. Navigation link hover effects
    const navLinks = document.querySelectorAll('a[href*=".html"]');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#d35400';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#5a3921';
        });
    });

    // 9. Sticky navbar effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(139, 69, 19, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(139, 69, 19, 0.1)';
        }
    });
});
// Gallery Lightbox functionality
function initializeGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('close-lightbox');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentIndex = 0;
    const images = Array.from(galleryItems);
    
    // Add hover effects to gallery items
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        
        item.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
        
        // Click to open lightbox
        item.addEventListener('click', function() {
            currentIndex = images.indexOf(this);
            openLightbox(currentIndex);
        });
    });
    
    function openLightbox(index) {
        const imgSrc = images[index].querySelector('img').src;
        const imgAlt = images[index].querySelector('img').alt;
        
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = imgAlt;
        lightbox.style.display = 'flex';
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }
    
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        }
    });
}

// Call this function in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    
    // Initialize gallery lightbox if on products page
    if (document.querySelector('.gallery-grid')) {
        initializeGalleryLightbox();
    }
});
// Enhanced Maps functionality
function initializeMaps() {
    const mapContainers = document.querySelectorAll('iframe[src*="google.com/maps"]');
    
    mapContainers.forEach((iframe, index) => {
        const container = iframe.parentElement;
        
        // Add hover effects to map containers
        container.style.transition = 'all 0.3s ease';
        container.style.cursor = 'pointer';
        
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        // Add click to focus effect
        container.addEventListener('click', function() {
            // Remove focus from all maps
            mapContainers.forEach(map => {
                map.parentElement.style.border = 'none';
            });
            
            // Add focus to clicked map
            this.style.border = '3px solid #e57e25';
            
            // Scroll to ensure map is visible
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
    
    // Add map loading indicators
    const maps = document.querySelectorAll('iframe[src*="maps"]');
    maps.forEach(map => {
        map.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        });
        
        // Initial opacity for loading effect
        map.style.opacity = '0.7';
    });
}

// Call this function in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    
    // Initialize maps if on contact page
    if (document.querySelector('iframe[src*="google.com/maps"]')) {
        initializeMaps();
    }
});
// Products data - This simulates loading from a database
const productsData = [
    {
        id: 1,
        name: "Artisan Bread",
        price: 19,
        category: "bread",
        image: "images/bread.jpg",
        description: "Freshly baked daily with organic flour and natural sourdough starter.",
        tags: ["fresh", "organic", "daily"]
    },
    {
        id: 2,
        name: "Chocolate Cake",
        price: 50,
        category: "cake",
        image: "images/chocolatecake.jpg",
        description: "Rich, moist chocolate cake with layers of chocolate ganache.",
        tags: ["chocolate", "rich", "moist"]
    },
    {
        id: 3,
        name: "Butter Cookies",
        price: 10,
        category: "cookie",
        image: "images/buttercookies.jpg",
        description: "Buttery, melt-in-your-mouth cookies with a delicate texture.",
        tags: ["buttery", "crisp", "delicate"]
    },
    {
        id: 4,
        name: "Vanilla Cupcakes",
        price: 15,
        category: "cake",
        image: "images/vanillacupcakes.jpg",
        description: "Fluffy vanilla cupcakes with creamy buttercream frosting.",
        tags: ["vanilla", "fluffy", "frosting"]
    },
    {
        id: 5,
        name: "Apple Pie",
        price: 25,
        category: "pastry",
        image: "images/applepie.jpg",
        description: "Classic apple pie with cinnamon-spiced filling and flaky crust.",
        tags: ["apple", "cinnamon", "flaky"]
    },
    {
        id: 6,
        name: "French Croissant",
        price: 20,
        category: "pastry",
        image: "images/croissant.jpg",
        description: "Buttery, flaky croissants made with traditional French technique.",
        tags: ["buttery", "flaky", "french"]
    },
    {
    
        id: 8,
        name: "Red Velvet Cake",
        price: 45,
        category: "cake",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        description: "Classic red velvet cake with cream cheese frosting.",
        tags: ["velvet", "cream cheese", "classic"]
    }
];

// Product filtering and search functionality
function initializeProductSearch() {
    const productsGrid = document.getElementById('products-grid');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortOptions = document.getElementById('sort-options');
    const resultsInfo = document.getElementById('results-info');

    let filteredProducts = [...productsData];

    // Initial render
    renderProducts(filteredProducts);

    // Event listeners for real-time filtering
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    sortOptions.addEventListener('change', filterProducts);

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        const sortBy = sortOptions.value;

        // Filter by search term
        filteredProducts = productsData.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );

        // Filter by category
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        // Filter by price
        if (priceRange !== 'all') {
            filteredProducts = filteredProducts.filter(product => {
                switch(priceRange) {
                    case 'low': return product.price < 15;
                    case 'medium': return product.price >= 15 && product.price <= 30;
                    case 'high': return product.price > 30;
                    default: return true;
                }
            });
        }

        // Sort products
        filteredProducts = sortProducts(filteredProducts, sortBy);

        // Render filtered products
        renderProducts(filteredProducts);

        // Update results info
        updateResultsInfo(filteredProducts.length);
    }

    function sortProducts(products, sortBy) {
        const sortedProducts = [...products];
        
        switch(sortBy) {
            case 'name-asc':
                return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            case 'price-asc':
                return sortedProducts.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sortedProducts.sort((a, b) => b.price - a.price);
            default:
                return sortedProducts.sort((a, b) => a.id - b.id); // Default order
        }
    }

    function renderProducts(products) {
        productsGrid.innerHTML = '';

        if (products.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #7d5a50;">
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            `;
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.style.cssText = `
                background: white; 
                border-radius: 10px; 
                overflow: hidden; 
                box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
            `;
            productCard.innerHTML = `
                <div style="height: 180px; background-color: #f9d5bb; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                </div>
                <div style="padding: 20px;">
                    <h3 style="margin-top: 0; color: #5c3d2e;">${product.name}</h3>
                    <p style="color: #7d5a50; font-size: 0.9rem; margin-bottom: 15px;">${product.description}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <p style="color: #e27b5a; font-weight: bold; font-size: 1.2rem; margin: 0;">R${product.price}</p>
                        <span style="background: #e6c9a8; color: #5c3d2e; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; text-transform: capitalize;">
                            ${product.category}
                        </span>
                    </div>
                </div>
            `;

            // Add hover effects
            productCard.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
                this.querySelector('img').style.transform = 'scale(1.1)';
            });

            productCard.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                this.querySelector('img').style.transform = 'scale(1)';
            });

            // Add click event
            productCard.addEventListener('click', function() {
                showProductDetail(product);
            });

            productsGrid.appendChild(productCard);
        });
    }

    function updateResultsInfo(count) {
        const totalProducts = productsData.length;
        resultsInfo.textContent = `Showing ${count} of ${totalProducts} products`;
    }

    function showProductDetail(product) {
        const modalHTML = `
            <div class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;">
                <div class="modal-content" style="background: white; padding: 30px; border-radius: 15px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;">
                    <div style="text-align: right;">
                        <button class="close-modal" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #5c3d2e;">&times;</button>
                    </div>
                    <div style="text-align: center;">
                        <img src="${product.image}" alt="${product.name}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 20px;">
                        <h2 style="color: #e27b5a; margin-bottom: 10px;">${product.name}</h2>
                        <p style="color: #7d5a50; margin-bottom: 15px;">${product.description}</p>
                        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
                            <span style="background: #e27b5a; color: white; padding: 5px 12px; border-radius: 15px; font-size: 0.9rem;">
                                ${product.category}
                            </span>
                            <span style="background: #5c3d2e; color: white; padding: 5px 12px; border-radius: 15px; font-size: 0.9rem;">
                                R${product.price}
                            </span>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <strong>Tags:</strong> ${product.tags.map(tag => `#${tag}`).join(', ')}
                        </div>
                        <button class="add-to-cart-btn" style="background: #d35400; color: white; border: none; padding: 12px 30px; border-radius: 25px; font-size: 1rem; cursor: pointer; transition: all 0.3s ease;">
                            Add to Cart - R${product.price}
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const modal = document.querySelector('.modal-overlay');
        const closeBtn = modal.querySelector('.close-modal');
        const addToCartBtn = modal.querySelector('.add-to-cart-btn');

        closeBtn.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        addToCartBtn.addEventListener('click', function() {
            this.textContent = 'Added to Cart!';
            this.style.background = '#2ecc71';
            setTimeout(() => {
                modal.remove();
            }, 1500);
        });
    }

    // Initial results info
    updateResultsInfo(productsData.length);
}

// Call this function in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    
    // Initialize product search if on products page
    if (document.getElementById('products-grid')) {
        initializeProductSearch();
    }
});