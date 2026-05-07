// Gráfico de Canales (Donut)
const ctx1 = document.getElementById('chartCanales').getContext('2d');
new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Newsletter', 'Google', 'Radio', 'Otros'],
        datasets: [{
            data: [11, 8, 6, 25], // Basado en data.xlsx
            backgroundColor: ['#06b6d4', '#3b82f6', '#8b5cf6', '#475569']
        }]
    },
    options: { plugins: { title: { display: true, text: 'Canales de Venta', color: '#fff' }}}
});

// Gráfico de Sedes (Barras)
const ctx2 = document.getElementById('chartSedes').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Ate', 'San Miguel', 'Callao', 'Lima'],
        datasets: [{
            label: 'Ventas en Soles',
            data: [660000, 420000, 210000, 180000], // Proporcional a data.xlsx
            backgroundColor: '#06b6d4'
        }]
    }
});
