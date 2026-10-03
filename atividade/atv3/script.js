const form = document.querySelector("#form-tarefa");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const texto = input.value.trim();
  if (!texto) {
    return;
  }

  const item = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", `Marcar "${texto}" como concluída`);

  const span = document.createElement("span");
  span.textContent = texto;

  item.append(checkbox, span);
  lista.append(item);
  input.value = "";
  input.focus();
});

lista.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) {
    return;
  }

  if (event.target.matches('input[type="checkbox"]')) {
    item.classList.toggle("concluida", event.target.checked);
    return;
  }

  item.remove();
});
