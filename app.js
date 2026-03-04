/* ===================================================
   EUPHORIA APP.JS — Front-end Only Store Engine
   =================================================== */

/* ---------- PRODUCT DATA (20 ITEMS) ---------- */
const PRODUCTS = [
  {
    id: 1, title: "Festive Kurta Set", brand: "FabIndia", category: "Festive", colors: ["red", "maroon"], sizes: ["S", "M", "L"], price: 1899, popularity: 92,
    images: ["static/images/red kurti.jpg", "static/images/maroon kurti.jpg"],
    returnPolicy: "10-day replacement available",
    reviews: [{ rating: 5, comment: "Great color and fabric!" }, { rating: 4, comment: "Looks elegant." }]
  },

  {
    id: 2, title: "Casual Cotton Tee", brand: "Roadster", category: "Casual", colors: ["white", "black"], sizes: ["S", "M", "L", "XL"], price: 799, popularity: 88,
    images: ["static/images/blacktee.jpg", "static/images/whitetee.jpg"],
    returnPolicy: "7-day replacement available",
    reviews: [{ rating: 4, comment: "Soft and comfy" }]
  },

  {
    id: 3, title: "Slim Fit Jeans", brand: "Levis", category: "Bottom Wear", colors: ["blue", "black"], sizes: ["M", "L", "XL"], price: 2199, popularity: 94,
    images: ["static/images/sb.jpg", "static/images/sbl.jpg"],
    returnPolicy: "15-day replacement",
    reviews: [{ rating: 5, comment: "Perfect fit!" }]
  },

  {
    id: 4, title: "Office Shirt", brand: "H&M", category: "Tops", colors: ["white", "blue"], sizes: ["S", "M", "L"], price: 1499, popularity: 86,
    images: ["static/images/ob.jpg", "static/images/ow.jpg"],
    returnPolicy: "7-day replacement", reviews: []
  },

  {
    id: 5, title: "Embroidered Kurti", brand: "Biba", category: "Kurtis/Kurtas", colors: ["pink", "white"], sizes: ["S", "M", "L"], price: 1299, popularity: 90,
    images: ["static/images/tw.jpg", "static/images/tp.jpg"],
    returnPolicy: "10-day replacement", reviews: []
  },

  {
    id: 6, title: "Western Dress", brand: "Zara", category: "Western Wear", colors: ["black", "navy"], sizes: ["S", "M"], price: 2599, popularity: 95,
    images: ["static/images/western navy blue.jpg", "static/images/westernblack.jpg"],
    returnPolicy: "10-day replacement", reviews: []
  },

  {
    id: 7, title: "Ethnic Suit Set", brand: "W for Women", category: "Suits", colors: ["cream", "gold"], sizes: ["M", "L"], price: 2799, popularity: 93,
    images: ["https://tse3.mm.bing.net/th/id/OIP.8G5BZKU56yD-Jay0GC2GDwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", "https://th.bing.com/th/id/OIP.KyzczZXzdEFYIJ_-4oUfeAHaNK?w=187&h=333&c=7&r=0&o=7&pid=1.7&rm=30"],
    returnPolicy: "15-day replacement", reviews: []
  },

  {
    id: 8, title: "Festive Saree", brand: "Soch", category: "Festive", colors: ["green"], sizes: ["Free"], price: 2399, popularity: 85,
    images: ["static/images/gs.jpg"], returnPolicy: "10-day replacement", reviews: []
  },

  {
    id: 9, title: "Casual Hoodie", brand: "H&M", category: "Casual", colors: ["black"], sizes: ["M", "L", "XL"], price: 1799, popularity: 90,
    images: ["static/images/hood.jpg"], returnPolicy: "7-day replacement", reviews: []
  },

  {
    id: 10, title: "Palazzo Pants", brand: "Global Desi", category: "Bottom Wear", colors: ["white", "beige"], sizes: ["S", "M", "L"], price: 1199, popularity: 80,
    images: ["static/images/pw.jpg"], returnPolicy: "10-day replacement", reviews: []
  },

  {
    id: 11, title: "Formal Blazer", brand: "Van Heusen", category: "Tops", colors: ["olive green"], sizes: ["M", "L"], price: 3199, popularity: 97,
    images: ["static/images/vb.jpg"], returnPolicy: "15-day replacement", reviews: []
  },

  {
    id: 12, title: "Kurta with Dupatta", brand: "Aurelia", category: "Kurtis/Kurtas", colors: ["yellow"], sizes: ["M", "L"], price: 1599, popularity: 89,
    images: ["static/images/cd.jpg"], returnPolicy: "7-day replacement", reviews: []
  },

  {
    id: 13, title: "Floral Gown", brand: "Zara", category: "Western Wear", colors: ["purple"], sizes: ["S", "M"], price: 2899, popularity: 92,
    images: ["static/images/fp.jpg"], returnPolicy: "10-day replacement", reviews: []
  },

  {
    id: 14, title: "Anarkali Suit", brand: "Biba", category: "Suits", colors: ["red", "gold"], sizes: ["M", "L", "XL"], price: 3299, popularity: 96,
    images: ["https://th.bing.com/th/id/OIP.6sJ_TXWPMV1nvUH_nQb2BAHaNK?w=187&h=333&c=7&r=0&o=7&pid=1.7&rm=3"], returnPolicy: "15-day replacement", reviews: []
  },

  {
    id: 15, title: "Casual Shorts", brand: "Roadster", category: "Bottom Wear", colors: ["navy", "black"], sizes: ["S", "M", "L"], price: 899, popularity: 75,
    images: ["static/images/cs.jpg"], returnPolicy: "7-day replacement", reviews: []
  },

  {
    id: 16, title: "Cotton Top", brand: "Only", category: "Tops", colors: ["pink"], sizes: ["S", "M", "L"], price: 999, popularity: 82,
    images: ["static/images/ct.jpg"], returnPolicy: "7-day replacement", reviews: []
  },

  {
    id: 17, title: "Western Jacket", brand: "Zara", category: "Western Wear", colors: ["black"], sizes: ["M", "L"], price: 2499, popularity: 90,
    images: ["static/images/bj.jpg"], returnPolicy: "10-day replacement", reviews: []
  },

  {
    id: 18, title: "Linen Kurta", brand: "FabIndia", category: "Kurtis/Kurtas", colors: ["white"], sizes: ["S", "M", "L"], price: 1799, popularity: 88,
    images: ["static/images/lw.jpg"], returnPolicy: "10-day replacement", reviews: []
  },

  {
    id: 19, title: "Festive Gown", brand: "Soch", category: "Festive", colors: ["maroon"], sizes: ["M", "L"], price: 2499, popularity: 91,
    images: ["static/images/maroon kurti.jpg"], returnPolicy: "15-day replacement", reviews: []
  },

  {
    id: 20, title: "Formal Suit", brand: "Van Heusen", category: "Suits", colors: ["grey", "black"], sizes: ["M", "L"], price: 3599, popularity: 93,
    images: ["https://i.pinimg.com/736x/f2/a1/ca/f2a1ca2bac18b0ff4e0e01724e56914b.jpg"], returnPolicy: "15-day replacement", reviews: []
  }
];

/* ---------- LOCAL STORAGE ---------- */
const cart = JSON.parse(localStorage.getItem('cart') || '[]');
const wish = JSON.parse(localStorage.getItem('wish') || '[]');
const reviews = JSON.parse(localStorage.getItem('reviews') || '{}');
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

/* ---------- PAGE ROUTER ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop();
  updateHeaderState();
  if (page === 'products.html' || page.includes('products.html')) renderProducts();
  if (page === 'product.html' || page.includes('product.html')) renderProductDetail();
  if (page === 'cart.html') renderCart();
  if (page === 'wishlist.html') renderWishlist();
  if (page === 'profile.html') renderProfile();
  if (page === 'orders.html') renderOrders();

  // Checkout Payment Interaction
  const pm = document.getElementById('payment');
  if (pm) {
    pm.addEventListener('change', () => {
      const det = document.getElementById('paymentDetails');
      if (pm.value === 'card') {
        det.innerHTML = `<input placeholder='Name on card' class='full-width'><input placeholder='Card number' class='full-width'><div style='display:flex;gap:10px'><input placeholder='MM/YY'><input placeholder='CVV'></div>`;
      } else if (pm.value === 'upi') {
        det.innerHTML = `<input placeholder='Enter UPI ID' class='full-width'>`;
      } else {
        det.innerHTML = '';
      }
    });
  }
});

/* ---------- PRODUCTS PAGE ---------- */
function renderProducts() {
  const cat = new URLSearchParams(location.search).get('category');
  const searchTerm = new URLSearchParams(location.search).get('search');

  const grid = document.getElementById('productGrid');
  const select = document.getElementById('sort');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  const titleEl = document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = cat ? `${cat} Collection` : "All Products";

  let list = PRODUCTS.filter(p => !cat || p.category === cat);

  /* ---------- SEARCH TERM from Home Page ---------- */
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    list = list.filter(p => matchProduct(p, term));
    if (searchInput) searchInput.value = searchTerm;
  }

  function matchProduct(p, term) {
    if (!term) return true;
    term = term.toLowerCase();
    return (p.title || '').toLowerCase().includes(term) ||
      (p.brand || '').toLowerCase().includes(term) ||
      (p.category || '').toLowerCase().includes(term) ||
      (p.colors || []).join(' ').toLowerCase().includes(term);
  }

  /* ---------- SEARCH FUNCTIONALITY (Live + Button) ---------- */
  function applySearchFilter() {
    const term = (searchInput?.value || '').trim().toLowerCase();
    list = PRODUCTS.filter(p => (!cat || p.category === cat) && matchProduct(p, term));
    applySort();
    draw();
  }

  /* ---------- SORTING FUNCTIONALITY ---------- */
  function applySort() {
    const sortVal = select?.value;
    if (sortVal === 'low') list.sort((a, b) => a.price - b.price);
    if (sortVal === 'high') list.sort((a, b) => b.price - a.price);
    if (sortVal === 'popular') list.sort((a, b) => b.popularity - a.popularity);
  }

  /* ---------- DRAW PRODUCTS ---------- */
  function draw() {
    if (!grid) return;
    if (list.length === 0) {
      grid.innerHTML = `<p class="no-results" style="grid-column:1/-1;text-align:center">No products found.</p>`;
      return;
    }
    grid.innerHTML = list.map(p => `
      <div class="product-card" onclick="openProduct(${p.id})">
        <img src="${p.images[0]}" alt="${p.title}">
        <div class="details">
            <h3>${p.title}</h3>
            <p class="brand">${p.brand}</p>
            <p class="price">₹${p.price}</p>
        </div>
      </div>
    `).join('');
  }

  let _deb;
  searchInput?.addEventListener('input', () => {
    clearTimeout(_deb);
    _deb = setTimeout(applySearchFilter, 300);
  });
  searchBtn?.addEventListener('click', applySearchFilter);
  select?.addEventListener('change', () => { applySort(); draw(); });

  applySort();
  draw();
}

/* ---------- PRODUCT DETAIL ---------- */
function renderProductDetail() {
  const id = +new URLSearchParams(location.search).get('id');
  const p = PRODUCTS.find(x => x.id === id);
  const wrap = document.getElementById('productDetail');
  if (!wrap) return;
  if (!p) { wrap.textContent = "Product not found"; return; }

  wrap.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:40px;margin-top:20px;">
      <div style="flex:1 1 400px">
        <img id="bigImg" src="${p.images[0]}" style="width:100%; object-fit:cover; border-radius:4px;">
        <div style="display:flex;gap:10px;margin-top:10px">
          ${p.images.map(i => `<img src="${i}" onclick="document.getElementById('bigImg').src='${i}'" width="80" height="100" style="object-fit:cover;cursor:pointer;border:1px solid #eee">`).join('')}
        </div>
      </div>
      <div style="flex:1 1 400px">
        <h1 style="font-size:2.5rem;margin-bottom:0.5rem">${p.title}</h1>
        <p style="font-size:1.2rem;color:#333;margin-bottom:1rem">₹${p.price}</p>
        <p><b>Brand:</b> ${p.brand}</p>
        <p><b>Category:</b> ${p.category}</p>
        
        <div style="margin:20px 0">
             <p><b>Select Size</b></p>
             <div style="display:flex;gap:10px">
                ${p.sizes.map(s => `<button class="btn" style="padding:10px 15px;background:#fff;color:#000;border:1px solid #ccc">${s}</button>`).join('')}
             </div>
        </div>
        
        <div style="display:flex;gap:15px; margin-top:30px;">
            <button class="btn" onclick="addCart(${p.id})">Add to Cart</button>
            <button class="btn" style="background:#fff;color:#000;border:1px solid #000" onclick="addWish(${p.id})">♡ Wishlist</button>
        </div>
        
        <p style="margin-top:20px;font-size:0.9rem;color:#666">${p.returnPolicy}</p>
      </div>
    </div>
  `;
}

/* ---------- CART FUNCTIONS ---------- */
function addCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const e = cart.find(c => c.id === id);
  if (e) e.qty++; else cart.push({ ...p, qty: 1 });
  save('cart', cart);
  alert("Added to cart!");
}

function removeCart(id) {
  const i = cart.findIndex(c => c.id === id);
  if (i > -1) cart.splice(i, 1);
  save('cart', cart);
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cartItems');
  const totalSpan = document.getElementById('cartTotal');
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:40px;"><p>Your cart is empty.</p><a href="products.html" class="btn">Start Shopping</a></div>`;
    if (totalSpan) totalSpan.textContent = "0";
    return;
  }

  let total = 0;
  list.innerHTML = cart.map(it => {
    total += it.price * it.qty;
    return `
      <div class="cart-item" style="display:flex;justify-content:space-between;align-items:center;padding:20px 0;border-bottom:1px solid #eee">
            <div style="display:flex;align-items:center;gap:20px">
                <img src="${it.images[0]}" style="width:80px;height:100px;object-fit:cover">
                <div>
                    <h4>${it.title}</h4>
                    <p class="price">₹${it.price} x ${it.qty}</p>
                </div>
            </div>
            <button class="btn" style="background:#fff;color:#d9534f;border:1px solid #d9534f;padding:5px 10px;font-size:0.8rem" onclick="removeCart(${it.id})">Remove</button>
      </div>`;
  }).join('');
  if (totalSpan) totalSpan.textContent = total;
}

/* ---------- CHECKOUT MODAL ---------- */
function openCheckout() {
  if (cart.length === 0) { alert("Cart is empty!"); return; }

  // Auth Check
  const user = getUser();
  if (!user) {
    if (confirm("You need to login to checkout. Go to login page?")) {
      location.href = 'login.html';
    }
    return;
  }

  // Pre-fill User Details
  const modal = document.getElementById('checkoutModal');
  modal.style.display = 'block';

  // Render Checkout Confirmation
  const content = modal.querySelector('.modal-content');
  content.innerHTML = `
      <h3>Checkout</h3>
      <div style="background:#f9f9f9; padding:15px; border-radius:8px; margin-bottom:20px;">
        <h4 style="margin:0 0 10px 0; font-size:1rem;">Shipping To:</h4>
        <p style="margin:0; font-weight:600;">${user.name}</p>
        <p style="margin:5px 0 0 0; color:#555;">${user.address}</p>
        <p style="margin:5px 0 0 0; color:#555;">${user.phone}</p>
      </div>

      <label>Payment Method</label>
      <select id="payment">
        <option value="">Select...</option>
        <option value="card">Pay using Card</option>
        <option value="upi">Pay using UPI</option>
      </select>

      <div id="paymentDetails"></div>
      <div style="margin-top: 2rem; display:flex; gap:10px;">
          <button onclick="placeOrder()" class="btn" style="flex:1">Pay & Place Order</button>
          <button onclick="closeCheckout()" class="btn" style="background: transparent; color: #333; border: 1px solid #ddd;">Cancel</button>
      </div>
    `;

  // Payment Listener
  setTimeout(() => {
    const pm = document.getElementById('payment');
    if (pm) {
      pm.addEventListener('change', () => {
        const det = document.getElementById('paymentDetails');
        if (pm.value === 'card') {
          det.innerHTML = `<input placeholder='Name on card' class='full-width'><input placeholder='Card number' class='full-width'><div style='display:flex;gap:10px'><input placeholder='MM/YY'><input placeholder='CVV'></div>`;
        } else if (pm.value === 'upi') {
          det.innerHTML = `<input placeholder='Enter UPI ID' class='full-width'>`;
        } else {
          det.innerHTML = '';
        }
      });
    }
  }, 100);
}

function closeCheckout() {
  document.getElementById('checkoutModal').style.display = 'none';
}

function placeOrder() {
  const pm = document.getElementById('payment').value;
  if (!pm) { alert("Please select a payment method"); return; }

  const user = getUser();

  // Create Order Object
  const orderId = 'ORD-' + Date.now().toString().slice(-6);
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const newOrder = {
    id: orderId,
    date: date,
    status: 'Processing',
    total: total,
    items: [...cart],
    userEmail: user.email
  };

  // Save to LocalStorage
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));

  alert(`Order Placed Successfully! (${orderId})`);
  localStorage.removeItem('cart');
  cart.length = 0;
  location.href = 'index.html';
}

/* ---------- ORDERS PAGE LOGIC ---------- */
function renderOrders() {
  const list = document.getElementById('ordersList');
  if (!list) return; // Guard clause

  const user = getUser();
  if (!user) { location.href = 'login.html'; return; }

  const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
  // Filter by user email
  const myOrders = allOrders.filter(o => o.userEmail === user.email).reverse();

  if (myOrders.length === 0) {
    list.innerHTML = `<div style="text-align:center; padding:40px; color:#777;">
            <p>You haven't placed any orders yet.</p>
            <a href="products.html" class="btn">Start Shopping</a>
        </div>`;
    return;
  }

  list.innerHTML = myOrders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <div class="order-meta">
                    <h4>Order #${order.id}</h4>
                    <p>Placed on ${order.date}</p>
                </div>
                <div class="order-status">${order.status}</div>
            </div>
            
            <div class="order-items">
                ${order.items.map(item => `
                    <div style="text-align:center; min-width:80px;">
                         <img src="${item.images[0]}" class="order-item-thumb" title="${item.title}">
                         <div style="font-size:0.75rem; margin-top:5px; color:#555;">x${item.qty}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="order-footer">
                Total: ₹${order.total}
            </div>
        </div>
    `).join('');
}

/* ---------- WISHLIST FUNCTIONS ---------- */
function addWish(id) {
  if (!wish.includes(id)) wish.push(id); else wish.splice(wish.indexOf(id), 1);
  save('wish', wish);
  alert("Wishlist updated!");
  if (location.pathname.includes('wishlist')) renderWishlist();
}

function renderWishlist() {
  const wrap = document.getElementById('wishlistItems');
  if (!wrap) return;

  if (wish.length === 0) {
    wrap.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wrap.innerHTML = wish.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return '';
    return `
      <div class="product-card">
        <img src="${p.images[0]}" alt="${p.title}">
        <div class="details">
            <h3>${p.title}</h3>
            <p class="price">₹${p.price}</p>
            <div style="display:flex;gap:10px;justify-content:center;margin-top:10px">
                <button class="btn" onclick="addCart(${p.id})">Add</button>
                <button class="btn" style="padding:5px 10px" onclick="addWish(${p.id})">✕</button>
            </div>
        </div>
      </div>
      `;
  }).join('');
}

/* ===================================================
   USER AUTH & PROFILE SYSTEM
   =================================================== */

// DB Simulation
const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');
const saveUserToDB = (u) => {
  const users = getUsers();
  users.push(u);
  localStorage.setItem('users', JSON.stringify(users));
};

// Session
const getUser = () => JSON.parse(localStorage.getItem('session_user') || 'null');
const setUserSession = (u) => localStorage.setItem('session_user', JSON.stringify(u));
const logout = () => { localStorage.removeItem('session_user'); location.href = 'index.html'; };

const getRecent = () => JSON.parse(localStorage.getItem('recent') || '[]');

function updateHeaderState() {
  const user = getUser();
  const nav = document.querySelector('nav');
  if (!nav) return;

  const existing = document.getElementById('navProfileBtn');

  if (user) {
    if (!existing) {
      const circle = document.createElement('div');
      circle.id = 'navProfileBtn';
      circle.className = 'nav-profile-circle';
      circle.textContent = getInitials(user.name);
      circle.title = user.name;
      circle.onclick = () => location.href = 'profile.html';
      nav.appendChild(circle);
    }
    const loginLink = Array.from(nav.children).find(a => a.textContent === 'Login');
    if (loginLink) loginLink.style.display = 'none';

    // Hide regular Login link if we are on login page, purely utility
  } else {
    if (!existing && !Array.from(nav.children).some(a => a.textContent === 'Login')) {
      const loginBtn = document.createElement('a');
      loginBtn.href = 'login.html';
      loginBtn.textContent = 'Login';
      nav.appendChild(loginBtn);
    }
  }
}

function getInitials(name) {
  return name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'U';
}

/* ---------- LOGIN PAGE TOGGLE ---------- */
function switchAuth(tab) {
  document.getElementById('formLogin').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('formSignup').style.display = tab === 'signup' ? 'block' : 'none';

  document.getElementById('tabLogin').className = tab === 'login' ? 'active' : '';
  document.getElementById('tabSignup').className = tab === 'signup' ? 'active' : '';
}

/* ---------- AUTH HANDLERS ---------- */
function handleSignup() {
  const name = document.getElementById('signName').value;
  const email = document.getElementById('signEmail').value;
  const pass = document.getElementById('signPass').value;
  const phone = document.getElementById('signPhone').value;
  const address = document.getElementById('signAddress').value;

  if (!name || !email || !pass || !address) return alert("All fields required");

  // Check if email exists
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    alert("Email already registered. Please Login.");
    switchAuth('login');
    return;
  }

  const newUser = { name, email, pass, phone, address };
  saveUserToDB(newUser);

  // Auto Login
  setUserSession(newUser);
  alert('Account created! Welcome, ' + name + '.');
  location.href = 'index.html';
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;

  const users = getUsers();
  const user = users.find(u => u.email === email && u.pass === pass);

  if (user) {
    setUserSession(user);
    alert('Welcome back, ' + user.name + '!');
    location.href = 'index.html';
  } else {
    alert("Invalid Email or Password.");
  }
}

/* ---------- PROFILE PAGE LOGIC ---------- */
function renderProfile() {
  const user = getUser();
  if (!user) { location.href = 'login.html'; return; }

  document.getElementById('pName').textContent = user.name;
  document.getElementById('pAddress').textContent = user.address;
  document.getElementById('pAvatar').textContent = getInitials(user.name);

  // Email Update Logic
  window.openUpdateEmail = function () {
    document.getElementById('currentEmail').value = user.email;
    document.getElementById('newEmail').value = '';
    document.getElementById('confirmPass').value = '';
    document.getElementById('emailModal').style.display = 'block';
  };

  window.saveNewEmail = function () {
    const newEmail = document.getElementById('newEmail').value;
    const pass = document.getElementById('confirmPass').value;

    if (!newEmail || !pass) return alert("Please fill in all fields");
    if (newEmail === user.email) return alert("New email cannot be same as old one");

    // Verify Password
    if (pass !== user.pass) {
      alert("Incorrect Password. Cannot update email.");
      return;
    }

    // Check if new email is taken
    const allUsers = getUsers();
    if (allUsers.find(u => u.email === newEmail)) {
      alert("This email is already registered to another account.");
      return;
    }

    // Update User in DB
    const userIndex = allUsers.findIndex(u => u.email === user.email);
    if (userIndex > -1) {
      allUsers[userIndex].email = newEmail;
      localStorage.setItem('users', JSON.stringify(allUsers));

      // Update Session
      user.email = newEmail;
      setUserSession(user);

      alert("Email updated successfully!");
      document.getElementById('emailModal').style.display = 'none';

      // Optional: Render changes if we displayed email anywhere
    }
  };

  // Recently Viewed rendering
  const recentIds = getRecent();
  const recentGrid = document.getElementById('recentGrid');
  if (!recentGrid) return;

  if (recentIds.length === 0) {
    recentGrid.innerHTML = '<p style="color:#777">No recently viewed items.</p>';
  } else {
    recentGrid.innerHTML = recentIds.reverse().slice(0, 4).map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return '';
      return `
              <div class="product-card" onclick="openProduct(${p.id})">
                <img src="${p.images[0]}" alt="${p.title}" style="height:200px;">
                <div class="details">
                    <h3 style="font-size:0.9rem">${p.title}</h3>
                    <p class="price">₹${p.price}</p>
                </div>
              </div>
            `;
    }).join('');
  }
}

/* ---------- RECENTLY VIEWED TRACKING ---------- */
const originalOpen = window.openProduct;
window.openProduct = function (id) {
  let recent = getRecent();
  recent = recent.filter(r => r !== id);
  recent.push(id);
  if (recent.length > 10) recent.shift();

  localStorage.setItem('recent', JSON.stringify(recent));
  location.href = `product.html?id=${id}`;
};
