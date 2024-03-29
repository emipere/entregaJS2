let cartsotarge = localStorage.getItem("fichaArticulo")
cartsotarge = JSON.parse(cartsotarge) 

let cartContaainer = document.getElementById ("seccion-carro")

function renderCarrito(cartItems) {
    cartItems.forEach (articulo => {
        const cart = document.createElement ("div")
        cart.innerHTML = `<h3>${articulo.nombre}</h3>
                         <h4>${articulo.precio}</h4>`
         cartContaainer.appendChild(cart)                
    });
}

renderCarrito(cartsotarge)