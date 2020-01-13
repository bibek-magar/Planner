import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign in</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="button btn ping lighten-1 z-depth-0">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
