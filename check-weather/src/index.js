/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
//establecer constante con la URL de la api
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=522a89a381c4c0c85ae3527d32e63be2'

//establecer constante del nodo
const appNode = document.getElementById('container')

//hacer el fetch y convertir la respuesta a json
window
    .fetch(`${baseUrl}`)
    .then((response) => response.json())
    .then((objectsJson) => {
        const object = [];
        //renderizar la data
        objectsJson.data.forEach(item => {
            //crear el titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = "titulo"

            //crear el div de temperatura, precipitacion e icono de clima
            const temperature = document.createElement('div');
            temperature.textContent = item.base.main.temp;
            temperature.className = "titulo"

            //crear div de precipitacion
            const precipitation = document.createElement('div');
            precipitation.textContent = item.humidity;
            precipitation.className = "titulo"

            //crear imagen del icono
            const weatherIcon = document.createElement('img');
            weatherIcon.src = item.icon

            //crear el contenedor
            const box = document.createElement('div');
            box.append(temperature,precipitation,weatherIcon)

            object.push(container);

        });
        appNode.append(...object);

    });
