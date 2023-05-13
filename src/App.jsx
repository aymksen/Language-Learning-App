import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";

import Letters1 from "./Components/Letters1";
import Letters2 from "./Components/Letters2";
import Letters3 from "./Components/Letters3";
import Letters4 from "./Components/Letters4";
import Numbers from "./Components/Numbers";
import Numbers2 from "./Components/Numbers2";
import Numbers3 from "./Components/Numbers3";
import Days from "./Components/Days";
import Grammar1 from "./Components/Grammar1";
import Grammar2 from "./Components/Grammar2";
import Grammar3 from "./Components/Grammar3";
import Colors from "./Components/Colors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Letters1" element={<Letters1 />} />
          <Route path="Letters2" element={<Letters2 />} />
          <Route path="Letters3" element={<Letters3 />} />
          <Route path="Letters4" element={<Letters4 />} />
          <Route path="Numbers" element={<Numbers />} />
          <Route path="Numbers2" element={<Numbers2 />} />
          <Route path="Numbers3" element={<Numbers3 />} />
          <Route path="Days" element={<Days />} />
          <Route path="Grammar1" element={<Grammar1 />} />
          <Route path="Grammar2" element={<Grammar2 />} />
          <Route path="Grammar3" element={<Grammar3 />} />
          <Route path="Colors" element={<Colors />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
