import "./App.css";
import logo from "./img/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="app-logo-container">
        <img src={logo} className="app-logo" alt="app-logo" />
      </div>

      <div className="calculator-container">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
