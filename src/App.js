import logo from './logo.svg';
import './App.css';
import StringCalculator from './components/StringCalculator';  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>String Calculator</h1>
      </header>
      <main>
        <StringCalculator />
      </main>
    </div>
  );
}

export default App;
