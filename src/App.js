import "./App.css";
import Buttons from "./components/buttons";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="app_container">
      <Header />
      <Main />
      <Buttons />
    </div>
  );
}

export default App;
