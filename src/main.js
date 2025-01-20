
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splashScreen');
    const main = document.getElementById('main');
  
    // Oculta el splash después de 3 segundos
    setTimeout(() => {
      splashScreen.style.display = 'none';
      main.style.display = 'block';
      document.body.style.overflow = 'auto'; // Habilita el scroll
    }, 0); // 3000ms = 3 segundos
  });



const btnTendecia = document.getElementById('btnTendencia')
const btnSalitTendencia = document.getElementById('salirTendencia')
btnTendecia.addEventListener('click', ()=>{
    const sectionTendencia = document.getElementById('tendencia-busquedad')
    const tendencia_todas = document.getElementById('tendencia_todas')
    const tendencia_carrusel = document.getElementById('tendencia_carrusel')
    const bucarPeli = document.getElementById('buscarPelicula')
    const header = document.querySelector('header')
    sectionTendencia.classList.add('inactive')
    tendencia_todas.classList.toggle('inactive')
    tendencia_carrusel.classList.add('inactive')
    bucarPeli.classList.add('inactive')
    header.classList.add('inactive')
})
btnSalitTendencia.addEventListener('click', () => {
    const sectionTendencia = document.getElementById('tendencia-busquedad')
    const tendencia_todas = document.getElementById('tendencia_todas')
    const tendencia_carrusel = document.getElementById('tendencia_carrusel')
    const bucarPeli = document.getElementById('buscarPelicula')
    const header = document.querySelector('header')

    sectionTendencia.classList.remove('inactive')
    tendencia_todas.classList.add('inactive')
    tendencia_carrusel.classList.remove('inactive')
    bucarPeli.classList.remove('inactive')
    header.classList.remove('inactive')
})
console.log('hola a todos' + API_KEY)