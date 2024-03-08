import React from "react";
import PhonePeForm from "./components/PhonePeForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PhonePeForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
