import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ChatArea from "./components/chat-area/ChatArea";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<ChatArea />} path="/chat-area" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
