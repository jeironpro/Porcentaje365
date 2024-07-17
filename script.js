document.addEventListener('DOMContentLoaded', function() {
    const barra_progreso = document.getElementById('barra_progreso');
    const fecha_actual = new Date();
    const anio = fecha_actual.getFullYear();
    const primer_dia_anio = new Date(anio, 0, 1);
    const ultimo_dia_anio = new Date(anio, 11, 31);
    const total_dia_anio = (ultimo_dia_anio - primer_dia_anio) / (1000 * 60 * 60 * 24);
    const dias_transcurridos = (fecha_actual - primer_dia_anio) / (1000 * 60 * 60 * 24);
    const porcentaje = Math.round((dias_transcurridos / total_dia_anio) * 100);
    const ancho_llenado = (230 * porcentaje) / 100;
    const anio_actual = document.getElementById('anio_actual');
    const anio_siguiente = document.getElementById('anio_siguiente');
    anio_actual.innerText = anio;
    anio_siguiente.innerText = anio + 1;

    barra_progreso.style.setProperty('--ancho-llenado', `${ancho_llenado}px`);
    const porcentaje_texto = document.createElement('div');
    porcentaje_texto.textContent = `${porcentaje}%`;
    porcentaje_texto.classList.add('porcentaje_texto');
    barra_progreso.appendChild(porcentaje_texto);

    // if (porcentaje <= 25) {
    //     barra_progreso.style.backgroundColor = '#FF6347';
    // } else if (porcentaje <= 50) {
    //     barra_progreso.style.backgroundColor = '#FFA500';
    // } else if (porcentaje <= 75) {
    //     barra_progreso.style.backgroundColor = '#FFD700';
    // } else {
    //     barra_progreso.style.backgroundColor = '#7CFC00';
    // }
})