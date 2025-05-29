const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai'],
    datasets: [{
      label: 'Vendas (R$)',
      data: [1200, 1900, 3000, 2500, 2800],
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});