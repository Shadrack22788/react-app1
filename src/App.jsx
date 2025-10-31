
import Heading from "./components/Heading";
import Logo from "./components/image";
import Paragraphy from "./components/Paragraphy";
import Button from "./components/Button";
import Footer from "./components/Footer";


  function App() {
    return (
      <div>

      <div className="w-1/2 mx-auto">
        <Heading />
        <Logo/>
        <Paragraphy/>
        <Button/>
        
        </div>
<Footer/>
      </div>
    )
  }

export default App;