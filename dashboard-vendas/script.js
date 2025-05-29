const ctx = document.getElementById('graficoVendas').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vendas (R$)',
      data: [3400, 4700, 6200, 5000, 7100, 6000],
      backgroundColor: '#111'
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Faturamento por Mês - 2025'
      }
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});