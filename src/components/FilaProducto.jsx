import PropTypes from "prop-types";

export default function FilaProducto({ producto }) {
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
    </tr>
  );
}

FilaProducto.propTypes = {
  producto: PropTypes.object.isRequired,
};
