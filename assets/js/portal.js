(() => {
  const date = document.querySelector("#updated-date");
  if (!date || !date.dateTime) return;

  const parsed = new Date(`${date.dateTime}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return;

  date.textContent = new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(parsed);
})();
