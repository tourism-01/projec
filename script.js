// Page 1 Products
const page1Products = [
    {
      name: "Multi use charger",
      image: "assets/oil dispenser.jpg",
      ukLink: "https://amzn.to/uk-link1",
      inrLink: "https://amzn.to/inr-link1",
      bio: "Gaming Headphone with 70H Playtime",
      details: "High-quality wireless headphones with noise cancellation and extended battery life, ideal for gaming or work."
    },
    {
      name: "Oil Sprayer & Dispenser",
      image: "",
      ukLink: "https://amzn.to/uk-link2",
      inrLink: "https://amzn.to/inr-link2",
      bio: "Health & fitness tracking.",
      details: "Tracks heart rate, sleep, and workouts. Syncs with your smartphone for notifications."
    },
    {
      name: "Gaming Mouse",
      image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
      ukLink: "https://amzn.to/uk-link3",
      inrLink: "https://amzn.to/inr-link3",
      bio: "Precision RGB mouse.",
      details: "Ergonomic design with customizable DPI and RGB lighting."
    },
    {
        name: "Multi use charger",
        image: "manali.jpg",
        ukLink: "https://amzn.to/uk-link1",
        inrLink: "https://amzn.to/inr-link1",
        bio: "Gaming Headphone with 70H Playtime",
        details: "High-quality wireless headphones with noise cancellation and extended battery life, ideal for gaming or work."
      },
      {
        name: "Oil Sprayer & Dispenser",
        image: "",
        ukLink: "https://amzn.to/uk-link2",
        inrLink: "https://amzn.to/inr-link2",
        bio: "Health & fitness tracking.",
        details: "Tracks heart rate, sleep, and workouts. Syncs with your smartphone for notifications."
      },
      {
        name: "Gaming Mouse",
        image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
        ukLink: "https://amzn.to/uk-link3",
        inrLink: "https://amzn.to/inr-link3",
        bio: "Precision RGB mouse.",
        details: "Ergonomic design with customizable DPI and RGB lighting."
      },
  ];
  
  // Page 2 Products
  const page2Products = [
    {
      name: "Projector",
      image: "projector.jpg",
      ukLink: "https://amzn.to/uk-link4",
      inrLink: "https://amzn.to/inr-link4",
      bio: "Portable projector for home and office.",
      details: "Compact and powerful projector with HD resolution and multiple connectivity options."
    },
    {
      name: "Smartwatch Pro X",
      image: "https://via.placeholder.com/300x200?text=Smartwatch+Pro+X",
      ukLink: "https://amzn.to/uk-link5",
      inrLink: "https://amzn.to/inr-link5",
      bio: "High-res display, GPS.",
      details: "Advanced fitness tracking with built-in GPS and AMOLED screen."
    },
    {
      name: "Wireless Headphones",
      image: "manali.jpg",
      ukLink: "https://amzn.to/uk-link6",
      inrLink: "https://amzn.to/inr-link6",
      bio: "Gaming Headphone with 70H Playtime",
      details: "High-quality wireless headphones with noise cancellation and extended battery life, ideal for gaming or work."
    }
  ];
  
  // Combine all pages
  const allPages = [page1Products, page2Products];
  let currentPage = 0;
  
  const productList = document.getElementById("product-list");
  const searchInput = document.getElementById("search");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function renderProducts(list) {
    productList.innerHTML = "";
    list.forEach(product => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded-2xl shadow hover:shadow-xl transition flex flex-col justify-between";
  
      const image = product.image || 'https://via.placeholder.com/300x200?text=No+Image';
      const url = `product.html?name=${encodeURIComponent(product.name)}&image=${encodeURIComponent(image)}&bio=${encodeURIComponent(product.bio)}&details=${encodeURIComponent(product.details)}&ukLink=${encodeURIComponent(product.ukLink)}&inrLink=${encodeURIComponent(product.inrLink)}`;
  
      card.innerHTML = `
        <div>
          <img src="${image}" alt="${product.name}" class="w-full h-48 object-cover rounded-xl mb-4">
          <h2 class="text-lg font-semibold mb-2">${product.name}</h2>
          <p class="mb-4 text-gray-600">${product.bio}</p>
        </div>
        <div class="flex items-center justify-between mt-auto pt-2">
          <a href="${url}" class="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600">View Details</a>
        </div>
      `;
      productList.appendChild(card);
    });
  }
  
  function updatePaginationButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === allPages.length - 1;
  }
  
  function filterAndRender() {
    const keyword = searchInput.value.toLowerCase();
    const filtered = allPages[currentPage].filter(p => p.name.toLowerCase().includes(keyword));
    renderProducts(filtered);
  }
  
  // Initial load
  filterAndRender();
  updatePaginationButtons();
  
  searchInput.addEventListener("input", filterAndRender);
  nextBtn.addEventListener("click", () => {
    if (currentPage < allPages.length - 1) {
      currentPage++;
      filterAndRender();
      updatePaginationButtons();
    }
  });
  
  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      filterAndRender();
      updatePaginationButtons();
    }
  });