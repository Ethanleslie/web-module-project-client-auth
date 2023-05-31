import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriends";
import Logout from "./components/Logout";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="login">
            Login
          </Link>
          <Link className="link" to="friends">
            Friends
          </Link>
          <Link className="link" to="friends/add">
            Add Friends
          </Link>
          <Link className="link" to="logout">
            Logout
          </Link>
        </header>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>

          <Route
            exact
            path="/friends"
            element={<PrivateRoute> <FriendsList/> </PrivateRoute>}
          > </Route>

          <Route exact path="/friends/add" element={<AddFriend />}></Route>

          <Route exact path="/logout" element={<Logout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
