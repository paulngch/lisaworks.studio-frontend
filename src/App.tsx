import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import Album from "./pages/Album";
import Contact from "./pages/Contact";

function App() {
  //Prevents ALL Right-clicks on the site to prevent right-click saving of images
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  //Prevents ALL Drag-starts to stop dragging-dropping saving of images
  document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  return (
    <>
      {/* <img src="/testimg.jpg" alt="" className="h-40 w-40 object-cover object-center" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/pages/album" element={<Album />} />
            <Route path="/pages/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
