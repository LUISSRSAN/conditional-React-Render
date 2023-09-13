import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <h1> hello </h1> : <Form />}
    </div>
  );
}

export default App;
