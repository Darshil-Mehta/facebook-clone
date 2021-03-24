import React from "react"
import './App.css';
import Header from "./Header"
import SideBarLeft from "./SideBarLeft"
import Feed from "./Feed"
import SideBarRight from "./SideBarRight"
import Login from "./Login"
import { useStateValue } from "./StateProvider"
import Footer from "./Footer"

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      { !user ? ( <Login /> ) : (<> 
          <Header />
          <div className="app__body">
            <SideBarLeft />
            <Feed />
            <SideBarRight />
          </div>
          <Footer />
        </>)
      }
    </div>
  );
}

export default App;