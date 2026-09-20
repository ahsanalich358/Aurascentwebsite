const products = [
  {
    id: 1,
    name: "Midnight Oud",
    gender: "men",
    sizes: ["50ml", "100ml"],
    price: 1400,
    oldPrice: 1600,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80",
    sale: true,
    new: false,
    desc: "A rich and mysterious blend of rare oud, warm amber and exotic spices. Perfect for evenings of quiet confidence."
  },
  {
    id: 2,
    name: "Rose Petal Elixir",
    gender: "women",
    sizes: ["30ml", "50ml", "100ml"],
    price: 1800,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
    sale: false,
    new: true,
    desc: "Delicate Bulgarian rose absolute with soft vanilla and white musk. Romantic, elegant, and timeless."
  },
  {
    id: 3,
    name: "Ocean Breeze",
    gender: "unisex",
    sizes: ["50ml", "100ml", "200ml"],
    price: 999,
    oldPrice: 1100,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
    sale: true,
    new: false,
    desc: "Fresh aquatic notes with bright citrus and light woods. Clean, invigorating, and endlessly wearable."
  },
  {
    id: 4,
    name: "Velvet Amber",
    gender: "women",
    sizes: ["50ml", "100ml"],
    price: 1500,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    sale: false,
    new: true,
    desc: "Warm amber, soft vanilla and delicate florals create a luxurious, enveloping feminine scent."
  },
  {
    id: 5,
    name: "Black Leather",
    gender: "men",
    sizes: ["100ml", "200ml"],
    price: 3800,
    oldPrice: 4500,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80",
    sale: true,
    new: false,
    desc: "Bold leather, rich tobacco and dark woods. Powerful, sophisticated and unapologetically masculine."
  },
  {
    id: 6,
    name: "Citrus Bloom",
    gender: "women",
    sizes: ["30ml", "50ml"],
    price: 2200,
    oldPrice: null,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1GgUEhtJcjA1pdz2MlZf981-MgDsaG4siouGAo16mg&s=10",
    sale: false,
    new: true,
    desc: "Sparkling citrus, jasmine petals and light musk. Fresh, bright and perfectly uplifting."
  },
  {
    id: 7,
    name: "Sandalwood Noir",
    gender: "men",
    sizes: ["50ml", "100ml"],
    price: 2000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?w=600&q=80",
    sale: false,
    new: false,
    desc: "Creamy sandalwood with smoky incense and subtle spice. Grounded, warm and deeply comforting."
  },
  {
    id: 8,
    name: "Golden Saffron",
    gender: "unisex",
    sizes: ["30ml","50ml", "100ml"],
    price: 900,
    oldPrice: 1400,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80",
    sale: true,
    new: false,
    desc: "Exotic saffron, rose and precious oud. A true luxury statement fragrance for the discerning."
  },
  {
    id: 9,
    name: "White Jasmine",
    gender: "women",
    sizes: ["30ml", "50ml", "100ml"],
    price: 1500,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80",
    sale: false,
    new: true,
    desc: "Pure jasmine absolute with soft powdery notes and light woods. Delicate, luminous and refined."
  },
  {
    id: 10,
    name: "Cedar Forest",
    gender: "men",
    sizes: ["100ml"],
    price: 1800,
    oldPrice: 2500,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&q=80",
    sale: true,
    new: false,
    desc: "Deep cedar, vetiver and pine needles. Earthy, grounding and quietly powerful."
  },
  {
    id: 11,
    name: "Peony Silk",
    gender: "women",
    sizes: ["50ml", "100ml"],
    price: 1500,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80",
    sale: false,
    new: false,
    desc: "Soft peony, rose and creamy musk. Delicate, sophisticated and effortlessly elegant."
  },
  {
    id: 12,
    name: "Tobacco Vanilla",
    gender: "unisex",
    sizes: ["50ml", "100ml", "200ml"],
    price: 2000,
    oldPrice: null,
    image: "data:image/jpeg;base64,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",
    sale: false,
    new: true,
    desc: "Sweet vanilla, rich tobacco leaf and warm spices. Unforgettable, sensual and deeply inviting."
  }
];

let cart = [];
let currentProduct = null;
let selectedSize = null;
let selectedQty = 1;

function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  document.getElementById('resultsCount').textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results"><h3>No fragrances found</h3><p>Try adjusting your filters</p></div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="badges">
          ${p.sale ? '<span class="badge sale">Sale</span>' : ''}
          ${p.new ? '<span class="badge new">New</span>' : ''}
        </div>
        <div class="quick-actions">
          <button class="quick-btn" onclick="openQuickView(${p.id})">Quick View</button>
          <button class="quick-btn" onclick="quickAdd(${p.id})">Add to Bag</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-gender">${p.gender}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-sizes">${p.sizes.join(' · ')}</div>
        <div class="product-price">
          <span class="current-price">Rs. ${p.price.toLocaleString()}</span>
          ${p.oldPrice ? `<span class="old-price">Rs. ${p.oldPrice.toLocaleString()}</span>` : ''}
          ${p.oldPrice ? `<span class="discount">-${Math.round((1 - p.price/p.oldPrice)*100)}%</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function applyFilters() {
  let filtered = [...products];

  const search = document.getElementById('searchInput').value.toLowerCase().trim();
  if (search) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search) || 
      p.desc.toLowerCase().includes(search) ||
      p.gender.includes(search)
    );
  }

  const genders = [...document.querySelectorAll('input[name="gender"]:checked')].map(el => el.value);
  if (genders.length) filtered = filtered.filter(p => genders.includes(p.gender));

  const sizes = [...document.querySelectorAll('input[name="size"]:checked')].map(el => el.value);
  if (sizes.length) filtered = filtered.filter(p => p.sizes.some(s => sizes.includes(s)));

  const minP = parseInt(document.getElementById('minPrice').value) || 0;
  const maxP = parseInt(document.getElementById('maxPrice').value) || 50000;
  filtered = filtered.filter(p => p.price >= minP && p.price <= maxP);

  const specials = [...document.querySelectorAll('input[name="special"]:checked')].map(el => el.value);
  if (specials.includes('sale')) filtered = filtered.filter(p => p.sale);
  if (specials.includes('new')) filtered = filtered.filter(p => p.new);

  const sort = document.getElementById('sortSelect').value;
  if (sort === 'price-low') filtered.sort((a,b) => a.price - b.price);
  if (sort === 'price-high') filtered.sort((a,b) => b.price - a.price);
  if (sort === 'newest') filtered.sort((a,b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));

  renderProducts(filtered);
}

function clearFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
  document.getElementById('minPrice').value = 0;
  document.getElementById('maxPrice').value = 50000;
  document.getElementById('priceSlider').value = 50000;
  document.getElementById('priceValue').textContent = 'Rs. 50,000';
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'featured';
  applyFilters();
}

function updatePriceDisplay() {
  const val = document.getElementById('priceSlider').value;
  document.getElementById('maxPrice').value = val;
  document.getElementById('priceValue').textContent = `Rs. ${parseInt(val).toLocaleString()}`;
}

function filterByGender(gender) {
  clearFilters();
  document.querySelector(`input[name="gender"][value="${gender}"]`).checked = true;
  applyFilters();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function filterBySpecial(type) {
  clearFilters();
  document.querySelector(`input[name="special"][value="${type}"]`).checked = true;
  applyFilters();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function openQuickView(id) {
  currentProduct = products.find(p => p.id === id);
  selectedSize = currentProduct.sizes[0];
  selectedQty = 1;

  document.getElementById('modalImg').src = currentProduct.image;
  document.getElementById('modalName').textContent = currentProduct.name;
  document.getElementById('modalGender').textContent = currentProduct.gender;
  document.getElementById('modalDesc').textContent = currentProduct.desc;
  document.getElementById('modalQty').textContent = 1;

  let priceHtml = `Rs. ${currentProduct.price.toLocaleString()}`;
  if (currentProduct.oldPrice) {
    priceHtml += ` <span style="font-size:15px;color:#999;text-decoration:line-through;margin-left:10px">Rs. ${currentProduct.oldPrice.toLocaleString()}</span>`;
  }
  document.getElementById('modalPrice').innerHTML = priceHtml;

  document.getElementById('modalSizes').innerHTML = currentProduct.sizes.map(s => 
    `<button class="size-btn ${s === selectedSize ? 'active' : ''}" onclick="selectSize('${s}')">${s}</button>`
  ).join('');

  document.getElementById('modalAddBtn').onclick = () => {
    addToCart(currentProduct.id, selectedSize, selectedQty);
    closeQuickView();
  };

  document.getElementById('quickViewModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('active');
  document.body.style.overflow = '';
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === size);
  });
}

function changeQty(delta) {
  selectedQty = Math.max(1, selectedQty + delta);
  document.getElementById('modalQty').textContent = selectedQty;
}

function quickAdd(id) {
  const p = products.find(x => x.id === id);
  addToCart(id, p.sizes[0], 1);
}

function addToCart(id, size, qty) {
  const p = products.find(x => x.id === id);
  const existing = cart.find(item => item.id === id && item.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, name: p.name, size, price: p.price, image: p.image, qty });
  }
  updateCartUI();
  showToast(`${p.name} added to your bag`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <p>Your bag is empty</p>
        <a href="#shop" class="btn btn-dark" onclick="toggleCart()">Continue Shopping</a>
      </div>`;
    footer.style.display = 'none';
  } else {
    container.innerHTML = cart.map((item, i) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${item.size} · Qty ${item.qty}</div>
          <div class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
          <button class="remove-item" onclick="removeFromCart(${i})">Remove</button>
        </div>
      </div>
    `).join('');
    footer.style.display = 'block';
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = `Rs. ${total.toLocaleString()}`;
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
  document.body.style.overflow = document.getElementById('cartSidebar').classList.contains('open') ? 'hidden' : '';
}

function toggleSearch() {
  document.getElementById('searchOverlay').classList.toggle('active');
  if (document.getElementById('searchOverlay').classList.contains('active')) {
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
  }
}

function checkout() {
  if (cart.length === 0) {
    showToast('Your bag is empty');
    return;
  }
  showToast('Thank you! Proceeding to checkout...');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

document.getElementById('quickViewModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeQuickView();
});

// Init
renderProducts(products);
