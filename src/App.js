import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import { BrowserRouter } from "react-router-dom";
import Searched from "./Components/Searched";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Searched />
      <Category />
     <Pages/>
     </BrowserRouter>
    </div>
  );
}

export default App;
