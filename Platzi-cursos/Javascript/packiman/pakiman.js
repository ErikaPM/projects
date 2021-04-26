var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman
{
    constructor (nombre, vida, ataque) 
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;

        this.imagen.src = imagenes[this.nombre];
    }
}

var cauchin = new Pakiman("cauchin", 100, 30);
var pokacho = new Pakiman("pokacho", 80, 50);
var tocinauro = new Pakiman("tocinauro", 120, 40);

