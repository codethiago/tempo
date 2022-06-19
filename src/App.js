import { MainPage } from "./pages/main";
import "../src/app.css";

function App() {
  return (
    <div className="App">
      <MainPage />
      <footer>
        <p>
          T E M P O is developed by{" "}
          <a href="https://github.com/codethiago">Thiago Brandão</a>
        </p>
        <p>
          Data provided by{" "}
          <a href="https://www.weatherapi.com/">©Weather API</a>
        </p>

        <p>version 0.1.0</p>
      </footer>
    </div>
  );
}

export default App;
