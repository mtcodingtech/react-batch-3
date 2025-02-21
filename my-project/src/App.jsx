import { Route, Routes } from "react-router-dom";
import "./App.css";
import Books from "./components/BookShop/Books";
import Button from "./components/Button";
import Logo from "./components/Logo";
import Shop from "./components/Props/Shop";
import Title from "./components/Title";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Hooks from "./pages/Hooks";
import HookDetail from "./pages/HookDetail";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <>
      {/* <Title name="Orange" price="$10" />
     <Title name="Mango" price="$5" />
     <Title name="Apple" /> */}
      {/* <Title name="Apple" price="$5" />
     <Shop /> */}
      {/* <Button />
     <Button isMobile={false} /> */}
      {/* <Button isMobile={true} /> */}
      {/* <Logo /> */}
      {/* <Books /> */}

      <ThemeContextProvider>
        <Nav />
        <Routes>
          <Route path="/hooks" element={<Hooks />}></Route>
          <Route path="/hooks/:id" element={<HookDetail />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
