import PropTypes from "prop-types";
import FilaProducto from "./FilaProducto";

export default function TablaProductos({ productos }) {
  console.log(productos);
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <FilaProducto producto={producto} key={producto.nombre} />
        ))}
      </tbody>
    </table>
  );
}

TablaProductos.propTypes = {
  productos: PropTypes.array.isRequired,
};
