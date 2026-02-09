fetch("data/vegetables.json")
  .then(res => res.json())
  .then(veggies => {
    const garden = document.getElementById("garden");

    veggies.forEach(v => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${v.emoji} ${v.name}</h2>
        <p><strong>Sun:</strong> ${v.sun}</p>
        <p><strong>Water:</strong> ${v.water}</p>
        <p>${v.notes}</p>
      `;

      garden.appendChild(card);
    });
  });
