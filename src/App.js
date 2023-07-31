import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import User from "./components/User/User";
import { Context } from "./context/context";
import { Route, Routes } from "react-router-dom";

function App() {

  const [users, setUsers] = useState({
    person: [],
    count: 0
  })

  return (
    <Context.Provider value={[users, setUsers]}>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;
