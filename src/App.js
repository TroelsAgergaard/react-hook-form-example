import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import Signup from "./Signup";
import Payment from "./Payment";
import FormProvider from "./FormProvider";
import { useContext } from "react";
function App() {
  return (
    <div className="App mt-10 w-1/3 mx-auto">
      {/* <Context.Provider value={useContext(Context)}> */}
      <FormProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </FormProvider>
      {/* </Context.Provider> */}
    </div>
  );
}

export default App;
