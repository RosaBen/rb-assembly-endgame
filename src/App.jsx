import Header from "./components/Header";
import Footer from "./components/Footer";
import Chips from "./components/Chips";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

import { languages } from "./assets/scripts/data";
function App() {
  return (
    <main>
      <Header />
      <Chips chips={languages} />
      <Word words={languages} />
      <Keyboard />
      <button className="new-game">New Game</button>
      <Footer />
    </main>
  );
}

export default App;
