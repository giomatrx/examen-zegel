// Gráfico 1: Canales
new Chart(document.getElementById('chartCanales'), {
    type: 'doughnut',
    data: {
        labels: ['Newsletter', 'Google', 'Radio', 'Otros'],
        datasets: [{
            data: [11, 8, 5, 26],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#858796']
        }]
    }
});

// Gráfico 2: Sedes
new Chart(document.getElementById('chartSedes'), {
    type: 'bar',
    data: {
        labels: ['Ate', 'San Miguel', 'Callao', 'Lima'],
        datasets: [{
            label: 'Ventas Reales',
            data: [660000, 420000, 210000, 180000],
            backgroundColor: '#4e73df'
        }]
    }
});

// Gráfico 3: Segmentos
new Chart(document.getElementById('chartSegmentos'), {
    type: 'pie',
    data: {
        labels: ['Persona', 'Empresa'],
        datasets: [{
            data: [35, 15],
            backgroundColor: ['#1cc88a', '#f6c23e']
        }]
    }
});

// Gráfico 4: Tiempo
new Chart(document.getElementById('chartTiempo'), {
    type: 'line',
    data: {
        labels: ['Mayo', 'Junio', 'Julio'],
        datasets: [{
            label: 'Tendencia de Venta',
            data: [250000, 310000, 290000],
            borderColor: '#4e73df',
            fill: false
        }]
    }
});
