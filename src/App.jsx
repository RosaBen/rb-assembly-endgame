import Header from "./components/Header";
import Footer from "./components/Footer";
import Chips from "./components/Chips";

import { languages } from "./assets/scripts/data";
function App() {
  return (
    <>
      <Header />
      <Chips chips={languages} />
      <Footer />
    </>
  );
}

export default App;
