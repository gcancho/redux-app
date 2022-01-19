// Le estamos poniendo varias propiedades dentro de un objeto
const estadoInicial = {
  productos: [
    { id: 1, nombre: "Producto A" },
    { id: 2, nombre: "Producto B" },
    { id: 3, nombre: "Producto C" },
    { id: 4, nombre: "Producto D" },
  ],

  carrito: [],
};

// Se va a encargar de modificar el estado global relacionado con la tienda
// Tenemos que pasarle dos valores, el estado de nuestra app y la accion , ejm: agregarProducto, eliminarProducto
// Cuando el reducer cargue, va a tomar el 'estadoInicial' por defecto
// Es una funcion que se va a encargar de administrar el estado global de nuestra app.
const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case "AGREGAR_PRODUCTO_AL_CARRITO":
      //Esto es lo que se imprimirá cada vez que le demos click a agregar producto al carrito
      const { nombre, idProductoAAgregar } = accion;
      // Si el carrito no tiene elementos entonces agregamos uno.
      if (estado.carrito.length === 0) {
        return {
          ...estado,
          carrito: [{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }],
        };
      } else {
        // De otra foma tenemos que revisar que el carrito no tenga ya el producto que queremos agregar.
        // Si ya lo tiene entonces queremos actualizar su valor.
        // Si no tiene el producto entonces lo agregamos.

        // Para poder editar el arreglo tenemos que clonarlo.
        const nuevoCarrito = [...estado.carrito];

        // Comprobamos si el carrito ya tiene el ID del producto a agregar.
        const yaEstaEnCarrito =
          nuevoCarrito.filter((productoDeCarrito) => {
            return productoDeCarrito.id === idProductoAAgregar;
          }).length > 0;

        if (yaEstaEnCarrito) {
          // Para ello tenemos que buscarlo, obtener su posicion en el arreglo.
          // Y en base a su posicion ya actualizamos el valor.
          nuevoCarrito.forEach((productoDeCarrito, index) => {
            if (productoDeCarrito.id === idProductoAAgregar) {
              const cantidad = nuevoCarrito[index].cantidad;
              nuevoCarrito[index] = {
                id: idProductoAAgregar,
                nombre: nombre,
                cantidad: cantidad + 1,
              };
            }
          });
          // De otra forma entonces agregamos el producto al arreglo.
        } else {
          nuevoCarrito.push({
            id: idProductoAAgregar,
            nombre: nombre,
            cantidad: 1,
          });
        }

        return {
          ...estado,
          carrito: nuevoCarrito,
        };
      }

    default:
      // La funcion reducer siempre nos tiene que devolver un estado nuevo o no, pero tiene que regresar un estado
      return estado;
  }
};

export default reducer;
