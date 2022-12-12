import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import RoomDetails from "./Pages/RoomDetails";
import Rooms from "./Pages/Rooms";
import Contact from "./Pages/Contact";
import { useState, useEffect } from "react";
import Voucher from "./Pages/Voucher/Voucher";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  let path = window.location.pathname;
  const currentTab = () => {
    if (path === "/") return "one";
    else if (path === "/rooms" || path === "/pages/room-details") return "two";
    else if (path === "/voucher") return "three";
    else if (path === "/about") return "four";
    else if (path === "/contact") return "seven";
  };
  useEffect(() => {
    setValue(currentTab);
  }, [path]);
  const [value, setValue] = useState(currentTab);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header_position">
          <Header isDesktop={isDesktop} />
          <NavigationBar
            value={value}
            setValue={setValue}
            isDesktop={isDesktop}
          />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/rooms" element={<Rooms />}></Route>
          <Route exact path="/voucher" element={<Voucher />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/pages/room-details"
            element={<RoomDetails />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
