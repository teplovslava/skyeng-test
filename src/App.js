import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import User from "./components/User/User";
import { Context } from "./context/context";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  const [users, setUsers] = useState({
    person: [],
    count: 0
  })

  return (
    <Context.Provider value={[users, setUsers]}>
      <Layout>
        <Routes>
          <Route path="/skyeng-test/"  element={<Main />} />
          <Route path="/skyeng-test/user/:id"  element={<User />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;
