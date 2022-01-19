// Le estamos poniendo varias propiedades dentro de un objeto
const estadoInicial = {
  productos: [
    { id: 1, nombre: "Producto A" },
    { id: 2, nombre: "Producto B" },
    { id: 3, nombre: "Producto C" },
    { id: 4, nombre: "Producto D" },
  ],

  carrito: [1, 2, 3],
};

// Se va a encargar de modificar el estado global relacionado con la tienda
// Tenemos que pasarle dos valores, el estado de nuestra app y la accion , ejm: agregarProducto, eliminarProducto
// Cuando el reducer cargue, va a tomar el 'estadoInicial' por defecto
const reducer = (estado = estadoInicial, accion) => {
  // La funcion reducer siempre nos tiene que devolver un estado nuevo o no, pero tiene que regresar un estado
  return estado;
};

export default reducer;
