/**
 * Como conectar con una API
1. Establecer la constante con la URL
2. Hacer un llamado de fetch
    2.1. conectarse con el servidor
    2.2. procesar la respuesta y convertirla en JSON
    2.3. Renderizar la data en el browser
 **/

const baseUrl = "https://platzi-avo.vercel.app";

//creo una constante para agregar los elementos a un id del HTML
const appNode = document.querySelector('#app')

//puedo llamar una API para dar formato a fechas y monedas
const priceFormat = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN" ,{
        style: "currency",
        currency: "USD"
    }).format(price);
    return newPrice
}

window
    .fetch(`${baseUrl}/api/avo`)
    .then((response) => response.json())
    .then((objectsJson) => {
            //creo un arreglo de todos los elementos
            const allObjects = [];
            objectsJson.data.forEach(item => {

            //crear img
            const imagen = document.createElement('img');
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className = "imagen"

            //crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = "titulo commons-text"

            //crear precio
            const price = document.createElement('div');
            price.textContent = priceFormat(item.price);
            price.className = "precio commons-text"

            //crear un contenedor por objeto
            const container = document.createElement('div');
            container.append(imagen,title,price);
            container.className = "main-container"

            //hacer push con cada item al arreglo
            allObjects.push(container);
        });
            //inserto todos los elementos del arreglo en el body
        appNode.append(...allObjects);
    });

