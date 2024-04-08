import { BrowserRouter } from "react-router-dom";
import Navebar from "./Navebar";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navebar></Navebar>
     </BrowserRouter>
    </div>
  );
}

export default App;
