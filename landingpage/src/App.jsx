import React from "react";

import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Component/Header";

const App = () => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
      <div>

      </div>
    </section>
  );
};

export default App;
