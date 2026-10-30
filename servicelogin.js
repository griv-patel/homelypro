// ---------------------------------------------
// Service data
// ---------------------------------------------
const services = [
  {
    name: "Electrician",
    desc: "Wiring, Installation & Repair Services",
    icon: "⚡",
    category: "skilled",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=60",
    page: "electrician.html"
  },
  {
    name: "Plumber",
    desc: "Pipes, Fittings & Bathroom Services",
  
    icon: "🔧",
    category: "skilled",
    img: "https://live.staticflickr.com/99/294035034_4d20737588_o.jpg",
    page: "plumber.html"
  },
  {
    name: "Carpenter",
    desc: "Furniture, Repair & Wood Work",
  
    icon: "🔨",
    category: "skilled",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Habitat_for_Humanity_at_Fremont_Fair_2007_-_02.jpg?width=400",
    page: "carpenter.html"
  },
  {
    name: "Painter",
    desc: "Painting, Wall & Texture",
  
    icon: "🖌️",
    category: "skilled",
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=400&q=60",
    page: "painter.html"
  },
  {
    name: "Cleaner",
    desc: "Home, Office & Deep Cleaning",
    
    icon: "🧴",
    category: "home",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=60",
    page: "cleaner.html"
  },
  {
    name: "Gardener",
    desc: "Garden Care & Maintenance",
    
    
    icon: "🌿",
    category: "home",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=60",
    page: "gardener.html"
  },
  {
    name: "Pest Control",
    desc: "Pest, Termite & Rodent Control",
    
    icon: "🐞",
    category: "home",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/A_day_in_the_life-_Pest_Management_Journeyman.jpeg?width=400",
    page: "pestcontrolservice.html"
  },
  {
    name: "AC Technician",
    desc: "AC Repair, Service & Installation",
  
    icon: "❄️",
    category: "skilled",
    img: "https://images.unsplash.com/photo-1621905252472-943afaa20e20?auto=format&fit=crop&w=400&q=60",
    page: "actechnicianservice.html"
  },
  {
    name: "Appliance Repair",
    desc: "Washing Machine, RO, Microwave & More",
  
    icon: "🛠️",
    category: "skilled",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=60",
    page: "appliancerepair.html"
  },
  {
    name: "Driver",
    desc: "Personal Driver & Pickup/Drop",
  
    icon: "🚗",
    category: "home",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=400&q=60",
    page: "driver.html"
  },
  {
    name: "Home Tutor",
    desc: "Academic & Subject Tutoring",
   
    icon: "📖",
    category: "care",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=60",
    page: "hometutor.html"
  },
  {
    name: "Babysitter",
    desc: "Baby Care & Child Supervision",
  
    icon: "🍼",
    category: "care",
    img: "https://images.unsplash.com/photo-1554342872-034a06541bad?auto=format&fit=crop&w=400&q=60",
    page: "babysitter.html"
  }
];

// ---------------------------------------------
// Render service cards
// ---------------------------------------------
const grid = document.getElementById("servicesGrid");

function renderServices(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#6b7280;">No services found.</p>`;
    return;
  }

  list.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="img-wrap" style="background-image:url('${service.img}')">
        <div class="service-icon">${service.icon}</div>
      </div>
      <div class="service-body">
        <h3>${service.name}</h3>
        <p>${service.desc}</p>
        
        <button class="view-workers" data-service="${service.name}" data-page="${service.page || ''}">View Workers →</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderServices(services);

// ---------------------------------------------
// Search + category filter
// ---------------------------------------------
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const filtered = services.filter(service => {
    const matchesQuery =
      service.name.toLowerCase().includes(query) ||
      service.desc.toLowerCase().includes(query);
    const matchesCategory = category === "all" || service.category === category;
    return matchesQuery && matchesCategory;
  });

  renderServices(filtered);
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);

// ---------------------------------------------
// "View Workers" button click (delegated)
// Navigates to the service's page if one exists,
// otherwise shows a "coming soon" alert.
// ---------------------------------------------
grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-workers")) {
    const serviceName = e.target.getAttribute("data-service");
    const page = e.target.getAttribute("data-page");

    if (page) {
      window.location.href = page;
    } else {
      alert(`"${serviceName}" page is coming soon!`);
    }
  }
});

// ---------------------------------------------
// Header Login / Register buttons
// ---------------------------------------------
document.getElementById("loginBtn").addEventListener("click", () => {
  alert("Redirecting to Login page...");
});

document.getElementById("registerBtn").addEventListener("click", () => {
  alert("Redirecting to Register page...");
});