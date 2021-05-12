//Variables

const menu = document.querySelector('#menuMovil');
const degradado = document.querySelector('#degradado');
const btnMenu = document.querySelector('#btnMenu');
const btnSalir = document.querySelector('#salir');
const enlaces = document.querySelectorAll('.link');
const imagenes = document.querySelectorAll('.imagen');
const ligthbox = document.querySelector('#lightbox');
const btnExit = document.querySelector('#exit');
const boxImage = document.querySelector('#boxImage');
const imagenLightbox = document.querySelector('#imagenLightbox');
const nombreImagen = document.querySelector('#nombre');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

//Eventos
btnMenu.addEventListener('click', mostrarMenu);
btnSalir.addEventListener('click', ocultarMenu);
document.addEventListener('keydown', filtroTecla);
degradado.addEventListener('click', ocultarMenu);
enlaces.forEach( enlaces=>{
    enlaces.addEventListener('click', ocultarMenu);
})
imagenes.forEach( imagen =>{
    imagen.addEventListener('click', selecionarImagen);
})
btnExit.addEventListener('click', ocultarLightbox);
document.addEventListener('keydown', filtroTecla);
document.addEventListener('click', filtrarElemento);
form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ''
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ''
    if(nombre.value.length <6){
        warnings += 'El nombre debe tener al menos 6 caracteres <br>' 
        entrar = true
    }
    
    if (!regexEmail.test(email.value)) {
        warnings += 'El email no es válido <br>'
        entrar = true
    }
    if(password.value.length <8){
        warnings += 'La contraseña no es válida <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = 'Enviado'
    }

})

//Funciones

function filtroTecla(e){
    e.keyCode === 27 && ocultarMenu();
}
function filtroTecla(e){
    e.keyCode === 27 && ocultarLightbox();
}
function filtrarElemento(e){
    e.target.id === 'lightbox' && ocultarLightbox();
}


function mostrarMenu(){
    menuMovil.style.left ='0';
    degradado.style.display = 'block'
    setTimeout(()=>{
        degradado.style.background = 'rgba(51, 74, 82, 0.75)';
    }, 10 )
}
function ocultarMenu(){
    menuMovil.style.left ='-80%';
    degradado.style.background = 'rgba(51, 74, 82, 0)';
    setTimeout(()=>{
        degradado.style.display = 'none';
    }, 250 )
}

function selecionarImagen(e){
    const imagen = e.target.children[0];
    const src = imagen.getAttribute('src');
    const nombre = imagen.getAttribute('nombre');
    mostrarLightbox(src, nombre);
}

function mostrarLightbox(src, nombre){
    ligthbox.style.display = 'flex';
    setTimeout(()=>{
        ligthbox.style.opacity = '1';
    }, 10);

    setTimeout(()=>{
        boxImage.style.opacity = '1';
    }, 250);
    
    imagenLightbox.setAttribute('src', src);
    nombreImagen.textContent = `Nombre: ${nombre}`;
}

function ocultarLightbox(){
    setTimeout(()=>{
        boxImage.style.opacity = '0';
    }, 250);
    setTimeout(()=>{
        ligthbox.style.display = 'none';
    }, 500);
}