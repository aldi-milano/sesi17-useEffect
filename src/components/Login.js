import React from "react";
import { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { useHistory } from "react-router";

function Login() {
  let history = useHistory()
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${data.username}\nPassword: ${data.password}`);
    history.push("/movies")
  };

  return (
    <div className="wrapper">
      <Navbar />
      <div id="container-login">
        <h3 class="text-center">Create account</h3>
        <p class="font-weight-light text-center">
          Get started with your new account
        </p>
        <div id="form-login">
          <form>
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Username
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <FontAwesomeIcon icon="user" />
                  </div>
                </div>
                <input
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Username"
                />
              </div>
            </div>
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Username
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <FontAwesomeIcon icon="lock" />
                  </div>
                </div>
                <input
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  type="password"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="col-auto">
              <button
                onClick={handleSubmit}
                type="submit"
                class="btn btn-primary mb-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
