import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Category />
     <Pages/>
     </BrowserRouter>
    </div>
  );
}

export default App;
