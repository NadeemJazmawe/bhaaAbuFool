import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

export default function Header() {

  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();
  useEffect( () => {
      if (location.pathname === "/"){
          setActiveTab("Home");
      } else if (location.pathname === "/adduser"){
          setActiveTab("AddUser");
      }else if (location.pathname === "/clients"){
        setActiveTab("Clients");
      }
  })


  return (
    <div className='header'>
            <p className='logo'>Bhaa Abu fool</p>
            <div className='header-right'>
                <Link to='/'>
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                </Link>
                <Link to='/adduser'>
                    <p className={`${activeTab === "AddUser" ? "active" : ""}`} onClick={() => setActiveTab("AddUser")}>
                        Add Client
                    </p>
                </Link>
                <Link to='/clients'>
                    <p className={`${activeTab === "Clients" ? "active" : ""}`} onClick={() => setActiveTab("Clients")}>
                        Clients
                    </p>
                </Link>
            </div>
        </div>
  )
}
