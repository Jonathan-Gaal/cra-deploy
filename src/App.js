import Contact from "./Components/Contact";
import "./App.css";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>Pursuit App Template</h1>
      <h2>My New Update</h2>
      <h3>making changes on jg-first-branch</h3>
      <Contact />
    </div>
  );
}

export default App;
