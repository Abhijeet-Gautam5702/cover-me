// components
import InputForm from "./components/InputForm/InputForm";

// styles
import "./App.css";

function App() {
  return (
    <div className="app app__flex">
      <p className="app__logo">
        cover<span className="accent">ME</span>
      </p>
      <InputForm />
    </div>
  );
}

export default App;
