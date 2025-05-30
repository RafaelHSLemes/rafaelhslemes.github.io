document.addEventListener('DOMContentLoaded', () => {
  const lista = document.getElementById('agenda-list');
  const dados = [
    { cliente: 'Maria Silva', servico: 'Corte Feminino', data: '2025-06-01 14:00' },
    { cliente: 'João Oliveira', servico: 'Barba e Cabelo', data: '2025-06-02 10:30' },
    { cliente: 'Luciana Costa', servico: 'Coloração', data: '2025-06-03 16:00' }
  ];
  dados.forEach(({ cliente, servico, data }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${cliente}</td><td>${servico}</td><td>${new Date(data).toLocaleString()}</td>`;
    lista.appendChild(tr);
  });
});