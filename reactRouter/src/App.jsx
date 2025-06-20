import Footer from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import Header from "./header/header.jsx";



export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    
    </>
  )
  
}