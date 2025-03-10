import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

const App = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default App;
