import React from "react";
import styled from "styled-components";
// Se importa para conectar el estado global
import { connect } from "react-redux";

const Carrito = ({ carrito }) => {
  return (
    <div>
      <h3>Carrito de Compras</h3>
      {carrito.length > 0 ? (
        carrito.map((producto, index) => {
          return (
            <Producto key={index}>
              <NombreProducto>{producto.nombre}</NombreProducto>
              Cantidad: {producto.cantidad}
            </Producto>
          );
        })
      ) : (
        <p>Aun no has agregado productos al carrito</p>
      )}
    </div>
  );
};

const Producto = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const NombreProducto = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

const mapStateToProps = (estado) => {
  return {
    //Le estamos pasando el estado global y accedemos a productos con 'estado.productos'
    carrito: estado.carrito,
  };
};

export default connect(mapStateToProps)(Carrito);
