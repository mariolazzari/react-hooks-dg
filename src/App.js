import "./App.css";
import UseCallback from "./Components/UseCallback";
import UseMemo from "./Components/UseMemo";
import UseRef from "./Components/UseRef";

const App = () => {
  return (
    <main className="App">
      <UseCallback />
      <UseMemo />
      <UseRef />
    </main>
  );
};

export default App;
