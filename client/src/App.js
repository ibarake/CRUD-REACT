import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList.js";
import AddUser from "./components/AddUser.js";
import EditUser from "./components/EditUser.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
          CRUD with MERN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="adduser">
                  Add
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="edituser">
                  Edit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} exact></Route>
          <Route path="/adduser" element={<AddUser />} exact></Route>
          <Route path="/edituser" element={<EditUser />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
