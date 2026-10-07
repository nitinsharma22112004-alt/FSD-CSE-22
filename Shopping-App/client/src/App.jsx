import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Counter from "./component/Counter";
import Stopwatch from "./component/Stopwatch";
import "./App.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/stopwatch" element={<Stopwatch />}></Route>
            <Route path="*" element={<h1>Error: Page not found</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
