 
 class Destinos{
    constructor(provincia , precio) {
      this.provincia = provincia.toLowerCase();
      this.precio = parseInt(precio)
    }
    descuentoEfectivo(){
        this.precio = this.precio * 0.80;
        return this.precio
    }

}

const destino=[];
destino.push(new Destinos ("tierra del fuego", 20000));
destino.push(new Destinos ("santa cruz",16000 ));
destino.push(new Destinos("chubut", 18000));
destino.push(new Destinos("rio negro", 16000));
destino.push(new Destinos("neuquen", 14000));


 const{provincia,precio}=destino[0]
 
 const imprimirDatos=({provincia: province,precio: price})=>{
     console.log(province,price)
 }
 



 //JAVASCRIPT A EJECUTARSE UNA VEZ CARGADA LA PAGINA: 
 window.onload = function(){
 
 
    }
    
const imagenes = [
  {
    src: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg',
    alt: 'Gatitos, no se puede decir más',
    nombre: 'Artículo 1',
    precio: 52
  },
  {
    src: 'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg',
    alt: 'Gatitos, no se puede decir más',
    nombre: 'Artículo 2',
    precio: 82
  },
  {
    src: 'https://www.zooplus.es/magazine/wp-content/uploads/2018/04/fotolia_169457098.jpg',
    alt: 'Gatitos, no se puede decir más',
    nombre: 'Artículo 3',
    precio: 99
  },
];

function renderizarGaleria(imagenes) {
  let html = '';
  
  imagenes.forEach(function(imagen){
    html += `
      <div class="galeria-item">
        <img src="${imagen.src}" alt="${imagen.alt}" width="200px" />
        <h3>${imagen.nombre}</h3>
        <p>${imagen.precio}€</p>
      </div>
    `;
  });
  
  $('#galeria').html(html);
}

$(function() {
  renderizarGaleria(imagenes);
});