const form = document.getElementById('form-agendamento');
const lista = document.getElementById('lista-agendamentos');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const data = document.getElementById('data').value;

  const item = document.createElement('li');
  item.textContent = `${nome} | ${email} | ${new Date(data).toLocaleString()}`;
  lista.appendChild(item);

  form.reset();
});