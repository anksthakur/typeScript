import './App.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <div>
        <h1>React TS</h1>
      {/* <Button text="Click Me"/> */}
        <Button onClick={() => alert("Anup")} text="Click Me Again"/>
      </div>
    </>
  );
}

export default App;
