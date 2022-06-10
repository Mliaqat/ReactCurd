import Table from "./components/table/Table";
import ContextState from "./context/ContextState";
function App() {
  return (
    <ContextState>
      <Table />
    </ContextState>
  );
}

export default App;
