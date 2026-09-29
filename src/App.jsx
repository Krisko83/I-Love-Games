import { Route, Routes } from "react-router";
import Catalog from "./components/catalog/Catalog.jsx";
import CreateGame from "./components/create-game/CreateGame.jsx";
import EditGame from "./components/edit-game/EditGame.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/edit-game" element={<EditGame />} />
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
