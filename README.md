Full Site Federation eCommerce Example
===============================================

An example eCommerce app Module Federation in a Full Site Federation configuration, using [react-router-dom](https://www.npmjs.com/package/react-router-dom) to manage the routing.

# Installation

In these five directories; `addtocart`, `cart`, `home`, `pdp` and `server` run these commands:

```sh
yarn && yarn start
```

In a different terminal window for each app.

The visit the [home page](http://localhost:3000/).

# Explicacion

Existen 4 microfrontends:
- Home
    - MainLayout: con un header, footer y el contenido según la ruta
    - HomeContent: la pagina principal, donde se muestran los productos
- PDP
    - PDPContent: la pagina de detalle de producto, donde se muestra el producto seleccionado
- Cart
    - CartContent: Es la pagina del carrito de compras, donde se muestran los productos seleccionados. 
    - MiniCart: que se muestra en la parte superior derecha de la pagina
    - Cart.js: contiene las funciones para agregar, obtener y eliminar productos del carrito. El carrito se almacena en el backend.
- AddToCart
    - AddToCart: Es el boton de login, que se muestra en la parte superior derecha de la pagina.