import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import Payment from "./Payment";
import FormProvider from "./FormProvider";
import { useEffect } from "react";

function App() {
  let username = "user1";
  let password = "1234";

  // useEffect(() => {
  //   fetch("http://localhost:4000/auth/token", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: `username=${username}&password=${password}`,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // });

  return (
    <div className="App mt-10 w-1/3 mx-auto">
      <FormProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </FormProvider>
    </div>
  );
}

export default App;
