// Product Database
const products = [
    // Electronics
    {
        id: 1,
        name: "Samsung Galaxy S24 Ultra 5G",
        category: "electronics",
        price: 124999,
        originalPrice: 149999,
        discount: 17,
        rating: 4.5,
        reviews: 2847,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500"
    },
    {
        id: 2,
        name: "Apple MacBook Air M2",
        category: "electronics",
        price: 114900,
        originalPrice: 129900,
        discount: 12,
        rating: 4.8,
        reviews: 1523,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        category: "electronics",
        price: 29990,
        originalPrice: 34990,
        discount: 14,
        rating: 4.7,
        reviews: 3421,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
    },
    {
        id: 4,
        name: "iPad Pro 12.9 inch M2",
        category: "electronics",
        price: 109900,
        originalPrice: 129900,
        discount: 15,
        rating: 4.6,
        reviews: 892,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
    },
    {
        id: 5,
        name: "Canon EOS R6 Mark II",
        category: "electronics",
        price: 239990,
        originalPrice: 269990,
        discount: 11,
        rating: 4.9,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 6,
        name: "Dell XPS 15 Laptop",
        category: "electronics",
        price: 159990,
        originalPrice: 189990,
        discount: 16,
        rating: 4.5,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500"
    },
    
    // Fashion
    {
        id: 7,
        name: "Levi's Men's Slim Fit Jeans",
        category: "fashion",
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.3,
        reviews: 5678,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
    },
    {
        id: 8,
        name: "Nike Air Max 270 Sneakers",
        category: "fashion",
        price: 12995,
        originalPrice: 16995,
        discount: 24,
        rating: 4.6,
        reviews: 3421,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 9,
        name: "Adidas Originals Hoodie",
        category: "fashion",
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        rating: 4.4,
        reviews: 2134,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
    },
    {
        id: 10,
        name: "Ray-Ban Aviator Sunglasses",
        category: "fashion",
        price: 7990,
        originalPrice: 10990,
        discount: 27,
        rating: 4.7,
        reviews: 1876,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
        id: 11,
        name: "Fossil Gen 6 Smartwatch",
        category: "fashion",
        price: 21995,
        originalPrice: 27995,
        discount: 21,
        rating: 4.5,
        reviews: 987,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 12,
        name: "Tommy Hilfiger Leather Wallet",
        category: "fashion",
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.6,
        reviews: 1543,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500"
    },
    
    // Home & Living
    {
        id: 13,
        name: "Philips Air Purifier AC2887",
        category: "home",
        price: 24999,
        originalPrice: 32999,
        discount: 24,
        rating: 4.5,
        reviews: 2341,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
    },
    {
        id: 14,
        name: "Dyson V15 Vacuum Cleaner",
        category: "home",
        price: 59900,
        originalPrice: 69900,
        discount: 14,
        rating: 4.8,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500"
    },
    {
        id: 15,
        name: "Urban Ladder Sofa Set",
        category: "home",
        price: 34999,
        originalPrice: 49999,
        discount: 30,
        rating: 4.4,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
    },
    {
        id: 16,
        name: "Prestige Induction Cooktop",
        category: "home",
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        rating: 4.3,
        reviews: 4567,
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500"
    },
    {
        id: 17,
        name: "Havells Ceiling Fan",
        category: "home",
        price: 2999,
        originalPrice: 4499,
        discount: 33,
        rating: 4.5,
        reviews: 3421,
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500"
    },
    {
        id: 18,
        name: "Godrej Refrigerator 190L",
        category: "home",
        price: 14990,
        originalPrice: 18990,
        discount: 21,
        rating: 4.4,
        reviews: 2134,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500"
    },
    
    // Books
    {
        id: 19,
        name: "Atomic Habits by James Clear",
        category: "books",
        price: 399,
        originalPrice: 599,
        discount: 33,
        rating: 4.8,
        reviews: 12456,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
    },
    {
        id: 20,
        name: "The Psychology of Money",
        category: "books",
        price: 299,
        originalPrice: 450,
        discount: 34,
        rating: 4.7,
        reviews: 8765,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
    },
    {
        id: 21,
        name: "Think and Grow Rich",
        category: "books",
        price: 199,
        originalPrice: 350,
        discount: 43,
        rating: 4.6,
        reviews: 15678,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500"
    },
    {
        id: 22,
        name: "Rich Dad Poor Dad",
        category: "books",
        price: 349,
        originalPrice: 499,
        discount: 30,
        rating: 4.7,
        reviews: 9876,
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500"
    },
    
    // Sports
    {
        id: 23,
        name: "Yonex Badminton Racket",
        category: "sports",
        price: 4999,
        originalPrice: 7999,
        discount: 38,
        rating: 4.6,
        reviews: 2341,
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500"
    },
    {
        id: 24,
        name: "Nivia Football Size 5",
        category: "sports",
        price: 899,
        originalPrice: 1499,
        discount: 40,
        rating: 4.4,
        reviews: 3456,
        image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aae?w=500"
    },
    {
        id: 25,
        name: "Cosco Cricket Bat",
        category: "sports",
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.5,
        reviews: 1876,
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500"
    },
    {
        id: 26,
        name: "Decathlon Yoga Mat",
        category: "sports",
        price: 799,
        originalPrice: 1299,
        discount: 38,
        rating: 4.6,
        reviews: 4567,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500"
    },
    
    // Beauty
    {
        id: 27,
        name: "Lakme Absolute Makeup Kit",
        category: "beauty",
        price: 2999,
        originalPrice: 4999,
        discount: 40,
        rating: 4.5,
        reviews: 5678,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500"
    },
    {
        id: 28,
        name: "Mamaearth Face Wash",
        category: "beauty",
        price: 349,
        originalPrice: 499,
        discount: 30,
        rating: 4.6,
        reviews: 8765,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500"
    },
    {
        id: 29,
        name: "Biotique Hair Oil",
        category: "beauty",
        price: 299,
        originalPrice: 450,
        discount: 34,
        rating: 4.4,
        reviews: 6543,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500"
    },
    {
        id: 30,
        name: "Nivea Body Lotion",
        category: "beauty",
        price: 399,
        originalPrice: 599,
        discount: 33,
        rating: 4.7,
        reviews: 7654,
        image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500"
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartCount();
});

// Display Products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = `
            <div class="product-card" data-category="${product.category}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">
                        <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                        <span class="rating-count">(${product.reviews.toLocaleString()})</span>
                    </div>
                    <div class="product-price">₹${product.price.toLocaleString()}</div>
                    <div>
                        <span class="product-original-price">₹${product.originalPrice.toLocaleString()}</span>
                        <span class="product-discount">${product.discount}% off</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

// Filter Products
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
    
    // Scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
    showSection('products');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show notification
    showNotification('Product added to cart!');
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Show Cart
function showCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 40px;">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    updateCartTotal();
    modal.style.display = 'block';
}

// Close Cart
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            showCart();
            updateCartCount();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
    updateCartCount();
}

// Update Cart Total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = total.toLocaleString();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your order! Total: ₹' + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString());
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    closeCart();
    updateCartCount();
}

// Show Section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        if (section.id) {
            section.style.display = 'none';
        }
    });
    
    // Show requested section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
    
    // Special handling for home
    if (sectionId === 'home') {
        document.querySelector('.hero-section').style.display = 'block';
        document.querySelector('.categories-section').style.display = 'block';
        document.getElementById('products').style.display = 'block';
    }
}

// Toggle Login/Signup Form
function toggleForm() {
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');
    
    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
    } else {
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    }
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation (in real app, this would be server-side)
    if (email && password) {
        showNotification('Login successful!');
        showSection('home');
    }
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    
    // Simple validation
    if (name && email && phone && password) {
        showNotification('Account created successfully!');
        toggleForm();
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #388e3c;
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCart();
    }
}

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);