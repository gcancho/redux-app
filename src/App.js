import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import Tienda from "./componentes/Tienda";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/Carrito";
// Se importa este componente 'Provider' que pertenece a 'react-redux'
import { Provider } from "react-redux";
// Se importa la funcion 'createStore' de 'redux'
import { createStore } from "redux";
// Importamos reducer que creamos en 'tiendaReducer'
import reducer from "./reducers/tiendaReducer";

const App = () => {
  const [carrito, cambiarCarrito] = useState([]);

  const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
    // Si el carrito no tiene elementos entonces agregamos uno.
    if (carrito.length === 0) {
      cambiarCarrito([{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }]);
    } else {
      // De otra foma tenemos que revisar que el carrito no tenga ya el producto que queremos agregar.
      // Si ya lo tiene entonces queremos actualizar su valor.
      // Si no tiene el producto entonces lo agregamos.

      // Para poder editar el arreglo tenemos que clonarlo.
      const nuevoCarrito = [...carrito];

      // Comprobamos si el carrito ya tiene el ID del producto a agregar.
      const yaEstaEnCarrito =
        nuevoCarrito.filter((productoDeCarrito) => {
          return productoDeCarrito.id === idProductoAAgregar;
        }).length > 0;

      // Si ya tiene el producto entonces lo tenemos que actualizar.
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

      // Por ultimo actualizamos el carrito.
      cambiarCarrito(nuevoCarrito);
    }
  };

  // Guardamos la funcion 'createStore' en la variable 'store'
  // El reducer es una funcion que nos va a permitir administrar nuestro estado global
  const store = createStore(reducer);
  // Nos muestra el estado global y sus propiedades
  console.log(store.getState());

  return (
    // El componente 'Provider' debe rodear a todo el contenido para que funcione, funciona parecido a BrowserRouter
    // Le tenemos que pasar la propiedad 'store', que es un almacenamiento global, el estado global se lo pasaremos por alli
    <Provider store={store}>
      <Contenedor>
        <Menu>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tienda" element={<Tienda />} />
          </Routes>
        </main>
        <aside>
          <Carrito carrito={carrito} />
        </aside>
      </Contenedor>
    </Provider>
  );
};

const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;

//BoilerPlate: es el codigo inicial que tu necesitas para que pueda funcionar
