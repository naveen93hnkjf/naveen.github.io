const temples = [
  "ISKCON Temple Bangalore",
  "Bull Temple Bangalore",
  "Dodda Ganapathi Temple Bangalore",
  "Banashankari Amma Temple Bangalore",
  "Gavi Gangadhareshwara Temple Bangalore",
  "Chokkanathaswamy Temple Bangalore",
  "Halasuru Someshwara Temple Bangalore",
  "Kempfort Shiva Temple Bangalore",
  "Sri Dharmaraya Swamy Temple Bangalore",
  "Begur Nageshwara Temple Bangalore",
  "Ranganathaswamy Temple Bangalore",
  "Sri Venkataramana Temple Malleshwaram Bangalore",
  "Shrungagiri Shanmukha Temple Bangalore",
  "Kote Venkataramana Temple Bangalore",
  "Anjaneya Temple Ragigudda Bangalore",
  "Sri Prasanna Veeranjaneya Temple Bangalore",
  "Kadu Malleshwara Temple Bangalore",
  "Bettadasanapura Meenakshi Sundareshwara Temple Bangalore",
  "Shree Banashankari Temple Bangalore",
  "Gokarna Mahabaleshwara Temple Bangalore"
];

const container = document.getElementById("temple-list");

async function fetchTempleImage(temple) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(temple)}&origin=*`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const pages = data.query.pages;
    const page = Object.values(pages)[0];
    return page.original ? page.original.source : "https://via.placeholder.com/400x200?text=No+Image";
  } catch (error) {
    return "https://via.placeholder.com/400x200?text=Image+Error";
  }
}

async function displayTemples() {
  for (let temple of temples) {
    const imgSrc = await fetchTempleImage(temple);
    const card = document.createElement("div");
    card.className = "temple-card";
    card.innerHTML = `
      <img src="${imgSrc}" alt="${temple}">
      <h2>${temple}</h2>
    `;
    container.appendChild(card);
  }
}

displayTemples();
