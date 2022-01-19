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
      console.log(accion.nombre);
      return estado;
    default:
      // La funcion reducer siempre nos tiene que devolver un estado nuevo o no, pero tiene que regresar un estado
      return estado;
  }
};

export default reducer;
