import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

import { Toaster } from "./components/ui/sonner";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <hr />
      <div className="m-5">
        <Outlet />
      </div>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
