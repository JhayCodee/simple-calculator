import "./App.css";
import logo from "./img/freecodecamp-logo.png";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="app-logo-container">
        <img src={logo} className="app-logo" alt="app-logo" />
      </div>

      <div className="calculator-container">
        <div className="row">
          <Button>AC</Button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
