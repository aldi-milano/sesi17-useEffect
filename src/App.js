import "./App.css";
import ReactAsync from "./components/GetApi";

function App() {
  return (
    <>
      <h2>Hey Arnold Character</h2>
      <div id="wrap-arnold">
        <ReactAsync />
      </div>
    </>
  );
}

export default App;
