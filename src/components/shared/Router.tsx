import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Design1 from "../../designs/1/App";
import Design2 from "../../designs/2/App";
import Design3 from "../../designs/3/App";
import Design4 from "../../designs/4/App";
import Design5 from "../../designs/5/App";
import Landing from "../../pages/Landing";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/1" element={<Design1 />} />
        <Route path="/2" element={<Design2 />} />
        <Route path="/3" element={<Design3 />} />
        <Route path="/4" element={<Design4 />} />
        <Route path="/5" element={<Design5 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
