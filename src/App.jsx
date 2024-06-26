import "./App.css";
import TablaProductos from "./components/TablaProductos";
import { productos } from "./productos";

function App() {
  return <TablaProductos productos={productos} />;
}

export default App;
