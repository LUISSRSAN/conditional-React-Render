import React from "react";
import Input from "./Input.jsx";
function Register() {
  return (
    <div>
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Password" />
      <button type="submit"> Register</button>
    </div>
  );
}

export default Register;
