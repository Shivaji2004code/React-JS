import React from "react"
import { Outlet } from "react-router-dom"
import {Provider} from 'react-redux'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  
  return (
    <Provider store={store} >
      <Header/>
      <Outlet />
      <Footer />
    </Provider>
  )
}
export default App
