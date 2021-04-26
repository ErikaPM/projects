/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://randomfox.ca";

const max = 122;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min + 1) + min);


//crear contenedor
const createContainer = () => {
    const mainContainer = document.createElement('div');
    mainContainer.className = "p-4";
     //crear img
    const imagen = document.createElement('img');
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;
    imagen.className = "mx-auto";
    imagen.width = "320";
            
    mainContainer.appendChild(imagen);
    return mainContainer;
};

const nuevaImagen = createContainer();
const mountNode = document.getElementById('images');

mountNode.append(nuevaImagen);