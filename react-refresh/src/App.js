import React, { useState, useEffect } from "react";
import './App.css';
// import { Login } from "./components/login";
import { signUpFetch, logInFetch, updateFetch, cancelFetch, tokenCheck } from "./utils";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    tokenCheck(setUser);
  }, []);

  const signUpHandler = async (e) => {
    e.preventDefault();
    signUpFetch(username, email, password, setUser);
    setPassword();
  }

  const logInHandler = async (e) => {
    e.preventDefault();
    logInFetch(username, password, setUser);
  }

  const logOutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem("myToken");
    setUser();
  }
  
  const updateHandler = async (e) => {
    e.preventDefault();
    updateFetch(user, email);
  }

  const cancelHandler = async (e) => {
    e.preventDefault();
    cancelFetch(user, password, setUser);
  }

  return (
    <div className="App">
      <h1>{user}</h1>
      {!user ? (
        <div>
          <form onSubmit={signUpHandler}>
            <label>Sign up</label>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <input onChange={(e) => setEmail(e.target.value) } placeholder="Email"/>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button type="submit">Submit</button>
          </form>
          <form onSubmit={logInHandler}>
            <label>Log in</label>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button type="submit">Submit</button>
          </form>
      </div>
      ) : (
        <div>
          <h2>You are logged in</h2>
          <form onSubmit={logOutHandler}>
            <label>Logout</label>
            <button type="submit">Submit</button>
          </form>
          <form onSubmit={updateHandler}>
            <label>Update email</label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="New email"/>
            <button type="submit">Submit</button>
          </form>
          <form onSubmit={cancelHandler}>
            <label>Cancel account</label>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

// Notes ##################################################################

// line 8 wouldn't normally populate an array in state, would have empty array and populate later
// line 11 prevents rerender when form is submitted
// line 20 pasing props as html attributes but don't name the same as the values (e.g. setUser={setUser}), it gets confusing. This way is also reusable
//line 22 if array was something specific e.g. movies the aray would bebcalled movies and the item would be movie
//line 24 key value is very important, i is the index

//useeffect runs on load and whenever thing in [] changes