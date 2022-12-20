import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Bg from "./../src/component/Images/bg.svg";
function App() {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Navbar />
      <About />
    </div>
  );
}

export default App;
