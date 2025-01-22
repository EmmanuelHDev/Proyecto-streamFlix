
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splashScreen');
    const main = document.getElementById('main');
  
    // Oculta el splash después de 3 segundos
    setTimeout(() => {
      splashScreen.style.display = 'none';
      main.style.display = 'block';
      document.body.style.overflow = 'auto'; // Habilita el scroll
    }, 5000); // 3000ms = 3 segundos
  });


//Funciones para entrar y salir de la seccion de tendencia
const btnTendecia = document.getElementById('btnTendencia')
const btnSalitTendencia = document.getElementById('salirTendencia')
btnTendecia.addEventListener('click', ()=>{
    const sectionTendencia = document.getElementById('tendencia-busquedad')
    const tendencia_todas = document.getElementById('tendencia_todas')
    const tendencia_carrusel = document.getElementById('tendencia_carrusel')
    const bucarPeli = document.getElementById('buscarPelicula')
    const header = document.querySelector('header')
    const ultimo_estreno = document.getElementById('ultimos-estrenos')
    const categoria = document.getElementById('categoria')

    sectionTendencia.classList.add('inactive')
    tendencia_todas.classList.toggle('inactive')
    tendencia_carrusel.classList.add('inactive')
    bucarPeli.classList.add('inactive')
    header.classList.add('inactive')
    ultimo_estreno.classList.add('inactive')
    categoria.classList.add('inactive')
})
btnSalitTendencia.addEventListener('click', () => {
    const sectionTendencia = document.getElementById('tendencia-busquedad')
    const tendencia_todas = document.getElementById('tendencia_todas')
    const tendencia_carrusel = document.getElementById('tendencia_carrusel')
    const bucarPeli = document.getElementById('buscarPelicula')
    const header = document.querySelector('header')
    const ultimo_estreno = document.getElementById('ultimos-estrenos')
    const peliculaConteiner = document.getElementById('pelicula')

    sectionTendencia.classList.remove('inactive')
    tendencia_todas.classList.add('inactive')
    tendencia_carrusel.classList.remove('inactive')
    bucarPeli.classList.remove('inactive')
    header.classList.remove('inactive')
    peliculaConteiner.classList.add('inactive')
    ultimo_estreno.classList.remove('inactive')
})

//funciones para entrar a ver los detalles de una pelicula  y salir a la parte principal

const pelicula_tendencia = document.getElementById('pelicula_tendencia')
const pelicula_destalles = document.getElementById('pelicula')
const btnSalitPelicula = document.getElementById('salirPelicula')
pelicula_tendencia.addEventListener('click', () => {
    const sectionTendencia = document.getElementById('tendencia-busquedad')
    const tendencia_todas = document.getElementById('tendencia_todas')
    const tendencia_carrusel = document.getElementById('tendencia_carrusel')
    const bucarPeli = document.getElementById('buscarPelicula')
    const header = document.querySelector('header')
    const ultimo_estreno = document.getElementById('ultimos-estrenos')
    const categoria = document.getElementById('categoria')

    sectionTendencia.classList.add('inactive')
    tendencia_todas.classList.add('inactive')
    tendencia_carrusel.classList.add('inactive')
    bucarPeli.classList.add('inactive')
    header.classList.add('inactive')
    ultimo_estreno.classList.add('inactive')
    categoria.classList.add('inactive')
    pelicula_destalles.classList.remove('inactive')
})
btnSalitPelicula.addEventListener('click', () => {
  const sectionTendencia = document.getElementById('tendencia-busquedad')
  const tendencia_todas = document.getElementById('tendencia_todas')
  const tendencia_carrusel = document.getElementById('tendencia_carrusel')
  const bucarPeli = document.getElementById('buscarPelicula')
  const header = document.querySelector('header')
  const ultimo_estreno = document.getElementById('ultimos-estrenos')
  const peliculaConteiner = document.getElementById('pelicula')

  sectionTendencia.classList.remove('inactive')
  tendencia_todas.classList.add('inactive')
  tendencia_carrusel.classList.remove('inactive')
  bucarPeli.classList.remove('inactive')
  header.classList.remove('inactive')
  peliculaConteiner.classList.add('inactive')
  ultimo_estreno.classList.remove('inactive')
})

//funciones para entrar a ver los detalles de las peliculas ultimos estrenos y salir a la parte principal

const pelicula_ultimos = document.getElementById('ultimos-estrenos_1')

pelicula_ultimos.addEventListener('click', () => {
  const sectionTendencia = document.getElementById('tendencia-busquedad')
  const tendencia_todas = document.getElementById('tendencia_todas')
  const tendencia_carrusel = document.getElementById('tendencia_carrusel')
  const bucarPeli = document.getElementById('buscarPelicula')
  const header = document.querySelector('header')
  const ultimo_estreno = document.getElementById('ultimos-estrenos')
  const categoria = document.getElementById('categoria')

  sectionTendencia.classList.add('inactive')
  tendencia_todas.classList.add('inactive')
  tendencia_carrusel.classList.add('inactive')
  bucarPeli.classList.add('inactive')
  header.classList.add('inactive')
  ultimo_estreno.classList.add('inactive')
  categoria.classList.add('inactive')
  pelicula_destalles.classList.remove('inactive')

})
console.log('hola a todos' + API_KEY)