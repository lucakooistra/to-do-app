import "./App.scss";
import todo from "./components/todo";

function App() {
  return (
    <div className="background">
      <div className="background-img">
        <div className="container">
          <div className="app-header">
            <h1>T O D O</h1>
            <img className="app-switch" src="./images/icon-sun.svg" />
          </div>
           {todo} 
        </div>
      </div>
    </div>
  );
}

export default App;
