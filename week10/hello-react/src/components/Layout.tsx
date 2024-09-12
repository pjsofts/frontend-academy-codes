import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="h-screen flex flex-col  bg-red-200">
        <Header />
        <div className="flex-1 bg-blue-200">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout