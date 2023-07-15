import React, { useState } from "react";

const Form = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
 

  

  const formValidation = () => {
    if (!name || !email || !password || !cPassword) {
      setErrorMsg("Please enter valid details in all fields before signing up");
      setSuccessMsg("");
      return;
    }

    if (name.length < 3 || name.length > 30) {
      setErrorMsg("Name should be between 3 and 30 characters");
      setSuccessMsg("");
      return;
    }

    if (!email.includes("@")) {
      setErrorMsg("Valid email is required");
      setSuccessMsg("");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password should have at least 6 characters");
      setSuccessMsg("");
      return;
    }

    if (cPassword !== password) {
      setErrorMsg("Password mismatch. Please enter the same password in the 'Confirm Password' field.");
      setSuccessMsg("");
      return;
    }

    setErrorMsg("");
    setSuccessMsg("Congratulations, you have successfully signed up.");
    
    // Reset the form
    
  };

  return (
    <div className="layout">
      <container>
        <div className="header">
          <h2> Create Account </h2>
          <div className="online">
            <button>
              <img src="#" alt="G-logo" />
              Signup With Google
            </button>
            <button>
              Signup with Facebook
              <img src="#" alt="F-logo" />
            </button>
            <br /> <br />
            <div className="or"></div>
          </div>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Full Name"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
          />
          <br />
          <hr />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
          <br />
          <hr />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
          <br />
          <hr />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="Confirm-password"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value.trim())}
          />
          <br />
          <hr />
          <button onClick={formValidation}>Create Account</button>
        </div>
        {errorMsg && <h4 id="err">{errorMsg}</h4>}
        {successMsg && <h4 id="success">{successMsg}</h4>}
      </container>
      <div className="image"></div>
    </div>
  );
};

export default Form;
