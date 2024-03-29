let titulo = document.getElementById ("titulo")
titulo.innerHTML = "<h2 > Compra en nuestro Team!! </h2>"


const articulos = [  
    {
    id : 1,
    nombre : "gorra",
    precio : 2000,          
    },
    {
    id : 2,
    nombre : "campera",
    precio : 12000,
    },
    {
    id : 3,
    nombre : "remera",
    precio : 8000,
    },
    {
    id : 4,
    nombre : "short",
    precio : 3000,
    },
    {
    id : 5,
    nombre : "medias",
    precio : 1500,
    },
    {
    id : 6,
    nombre : "viceras",
    precio : 1000,
    }
    ]


let fichaArticulo 
let fichaDeArticuloLS = localStorage.getItem("fichaArticulo")
if(fichaDeArticuloLS){
    fichaArticulo = JSON.parse(fichaDeArticuloLS)
}else {
    fichaArticulo = []
}




let listaDeArticulos = document.getElementById("articulos")

function renderProducto(articulos) {
 articulos.forEach((articulo) => {
    const card = document.createElement("div")
    card.innerHTML = `<h3>Nombre: ${articulo.nombre}</h3>
                      <h4>Precio: $${articulo.precio}</h4>                      
                      <button id = "boton-aumentar">+</button>
                      <button id = "boton-disminuir">-</button>
                      <div id = "cantidad">0</div>
                      <button class = "articuloAgregar" id ="${articulo.id}">Agregar al Carro</button>` 
    
    listaDeArticulos.appendChild (card)                      
})

}                  
 botonAgregarAlCarro ()

renderProducto(articulos)

function botonAgregarAlCarro () {
    let addbutton = document.querySelectorAll(".articuloAgregar")
    addbutton.forEach (button => {
        button.onclick = (art) => {
            const artid = art.currentTarget.id
            const articuloSeleccionado = articulos.find (articulo => articulo.id == artid)
            fichaArticulo.push(articuloSeleccionado)
                console.log(fichaArticulo)

                localStorage.setItem("fichaArticulo", JSON.stringify(fichaArticulo))
        }
    })
}


// contador

let cantidad = document.getElementById ("cantidad")
let aumentar = document.getElementById ("boton-aumentar")
let disminuir = document.getElementById ("boton-diminuir")
let contador = 0

aumentar.onclick = () => {
    contador++
    conunter.innerHTML = aumentar
}

disminuir.onclick = () => {
    contador--
    conunter.innerHTML = disminuir
}