import "./App.css";
import Theme from "./Component/Theme/Theme";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./Component/MainRoute";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <MainRoute/>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
