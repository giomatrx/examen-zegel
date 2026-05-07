// 1. Gráfico de Canales (Doughnut)
new Chart(document.getElementById('chartCanales'), {
    type: 'doughnut',
    data: {
        labels: ['Newsletter', 'Google', 'Radio', 'Otros'],
        datasets: [{
            data: [11, 8, 4, 27],
            backgroundColor: ['#06b6d4', '#3b82f6', '#8b5cf6', '#475569']
        }]
    }
});

// 2. Gráfico de Sedes (Bar)
new Chart(document.getElementById('chartSedes'), {
    type: 'bar',
    data: {
        labels: ['Ate', 'San Miguel', 'Callao', 'Lima'],
        datasets: [{
            label: 'Soles',
            data: [660000, 420000, 210000, 180000],
            backgroundColor: '#06b6d4'
        }]
    }
});

// 3. Gráfico de Segmentos (Pie)
new Chart(document.getElementById('chartSegmentos'), {
    type: 'pie',
    data: {
        labels: ['Persona', 'Empresa'],
        datasets: [{
            data: [35, 15],
            backgroundColor: ['#10b981', '#f59e0b']
        }]
    }
});

// 4. Gráfico de Evolución (Line)
new Chart(document.getElementById('chartTiempo'), {
    type: 'line',
    data: {
        labels: ['Mayo', 'Junio', 'Julio'],
        datasets: [{
            label: 'Crecimiento',
            data: [15, 25, 10],
            borderColor: '#06b6d4',
            fill: true,
            backgroundColor: 'rgba(6, 182, 212, 0.2)'
        }]
    }
});
