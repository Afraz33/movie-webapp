import "./App.css";
import ThemeRoutes from ".";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
  );
}

export default App;
