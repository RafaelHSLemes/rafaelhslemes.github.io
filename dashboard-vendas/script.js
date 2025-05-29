const ctx = document.getElementById('chart-vendas').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Faturamento (R$)',
      data: [3200, 4500, 6100, 4900, 7200, 8500],
      borderColor: '#111',
      backgroundColor: 'rgba(0,0,0,0.1)',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Faturamento Mensal - 2025'
      }
    }
  }
});