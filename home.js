fetch("data/vegetables.json")
  .then(res => res.json())
  .then(veggies => {
    // Total vegetables
    document.getElementById("totalVeggies").textContent = veggies.length;

    // Needs watering (example logic)
    const needsWater = veggies.filter(v => v.water === "High").length;
    document.getElementById("needsWater").textContent = needsWater;

    // Ready to harvest (example logic)
    const readyHarvest = veggies.filter(v => v.stage === "Harvest").length;
    document.getElementById("readyHarvest").textContent = readyHarvest;

    // Recently added (last 3)
    const recent = veggies.slice(-3).reverse();
    const container = document.getElementById("recentVeggies");

    recent.forEach(v => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${v.emoji} ${v.name}</h3>
        <p><strong>Stage:</strong> ${v.stage || "Unknown"}</p>
        <p>${v.notes || ""}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading vegetables:", err);
  });
