// Configuración global para que los textos sean blancos/claros en el modo oscuro
Chart.defaults.color = '#e2e8f0';
Chart.defaults.borderColor = '#334155';

// 1. Gráfico de Eficiencia por Canal (Doughnut)
const ctxCanales = document.getElementById('chartCanales').getContext('2d');
new Chart(ctxCanales, {
    type: 'doughnut',
    data: {
        labels: ['Newsletter', 'Google', 'Radio', 'Redes Sociales', 'Otros'],
        datasets: [{
            data: [11, 8, 6, 5, 20],
            backgroundColor: [
                '#06b6d4', // Cian
                '#3b82f6', // Azul
                '#8b5cf6', // Morado
                '#ec4899', // Rosado
                '#475569'  // Gris
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

// 2. Gráfico de Ventas por Sede (Bar)
const ctxSedes = document.getElementById('chartSedes').getContext('2d');
new Chart(ctxSedes, {
    type: 'bar',
    data: {
        labels: ['Ate', 'San Miguel', 'Lima', 'Callao'],
        datasets: [{
            label: 'Ventas Reales (Soles)',
            data: [660149, 453872, 312000, 185000],
            backgroundColor: '#06b6d4',
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// 3. Gráfico de Segmentación de Mercado (Pie)
const ctxSegmentos = document.getElementById('chartSegmentos').getContext('2d');
new Chart(ctxSegmentos, {
    type: 'pie',
    data: {
        labels: ['Persona', 'Empresa'],
        datasets: [{
            data: [35, 15],
            backgroundColor: ['#10b981', '#f59e0b'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

// 4. Gráfico de Evolución Trimestral (Line)
const ctxTiempo = document.getElementById('chartTiempo').getContext('2d');
new Chart(ctxTiempo, {
    type: 'line',
    data: {
        labels: ['Mayo', 'Junio', 'Julio'],
        datasets: [{
            label: 'Flujo de Ventas',
            data: [420000, 580000, 310000],
            borderColor: '#06b6d4',
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
