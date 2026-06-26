const servicesContainer = document.getElementById("servicesContainer");

async function loadServices() {
  try {
    const res = await fetch("http://localhost:3000/services");
    const data = await res.json();

    servicesContainer.innerHTML = data.map(service => `
      <div class="d-flex flex-column service-item ${service.highlight ? 'bg-primary-200' : ''}">
        <img src="${service.image}" alt="service" />

        <div class="p-3">
          <img class="mb-2" src="${service.icon}" alt="icon" />

          <h2>${service.title}</h2>

          <p>${service.description}</p>

          <a class="nav-link" href="${service.link}">Learn More</a>
        </div>
      </div>
    `).join("");

  } catch (error) {
    console.error("Gagal load services:", error);
  }
}

loadServices();