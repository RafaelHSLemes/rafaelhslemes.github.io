document.getElementById('form-agendamento').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const data = document.getElementById('data').value;

  const confirmacao = document.getElementById('confirmacao');
  confirmacao.classList.remove('hidden');
  confirmacao.innerHTML = `<h3>Agendamento confirmado!</h3><p><strong>${nome}</strong>, seu agendamento foi marcado para <strong>${new Date(data).toLocaleString()}</strong>. Um e-mail de confirmação será enviado para <strong>${email}</strong>.</p>`;
});