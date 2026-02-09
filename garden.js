fetch("data/vegetables.json")
  .then(res => res.json())
  .then(veggies => {
    const grid = document.getElementById("gardenGrid");

    veggies.forEach(v => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${v.emoji} ${v.name}</h2>
        <p><strong>Sun:</strong> ${v.sun}</p>
        <p><strong>Water:</strong> ${v.water}</p>
        <p><strong>Stage:</strong> ${v.stage || "Unknown"}</p>
      `;

      card.addEventListener("click", () => openModal(v));
      grid.appendChild(card);
    });
  });

function openModal(veg) {
  document.getElementById("modalOverlay").classList.remove("hidden");

  document.getElementById("modalBody").innerHTML = `
    <h2>${veg.emoji} ${veg.name}</h2>
    <p><strong>Planted:</strong> ${veg.plantedDate || "—"}</p>
    <p><strong>Sun:</strong> ${veg.sun}</p>
    <p><strong>Water:</strong> ${veg.water}</p>
    <p><strong>Stage:</strong> ${veg.stage || "Unknown"}</p>
    <p><strong>Last Watered:</strong> ${veg.lastWatered || "—"}</p>
    <p><strong>Harvest Estimate:</strong> ${veg.harvestEstimate || "—"}</p>
    <p>${veg.notes || ""}</p>
  `;
}

document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target.id === "modalOverlay") closeModal();
});

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
}
