import './App.css';
import Grid from './components/Grid/Grid.js';

function App() {

  const ruleDisplay = () => {
    let element = document.getElementById("rules");
    element.classList.toggle("displayRules")
  }  

  return (
    <div className="App">
      <h1 className="title">Conway's Game Of Life</h1>
      <button className="ruleTxt" onClick={ruleDisplay}>
          Game Rules
      </button>
      <div id="rules">
        <ul>
            <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
            <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
            <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
            <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
        </ul>
      </div>
      <Grid/>
    </div>
  );
}

export default App;
