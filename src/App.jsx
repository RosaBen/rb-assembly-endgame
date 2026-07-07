import Header from "./components/Header";
import Footer from "./components/Footer";
import Chips from "./components/Chips";
import Word from "./components/Word";

import { languages } from "./assets/scripts/data";
function App() {
  return (
    <>
      <Header />
      <Chips chips={languages} />
      <Word words={languages} />
      <Footer />
    </>
  );
}

export default App;
