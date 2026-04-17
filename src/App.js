import "./App.css";
import cover from "./cover-ocean.mp4";
import Dictionary from "./Dictionary";
import Results from "./Results";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  let [results, setResults] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay muted loop playsInline src={cover}></video>
        <h1>Welcome to my dictionary</h1>
        <Dictionary setResults={setResults} />
      </header>
      {results && <Results results={results} />}
      <Footer />
    </div>
  );
}

export default App;
