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
      }else if (location.pathname === "/data"){
        setActiveTab("data");
      }else if (location.pathname === "/listem"){
        setActiveTab("listem");
      }else if (location.pathname === "/requirements"){
        setActiveTab("Requirements");
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
                        הוספת לקוח
                    </p>
                </Link>
                <Link to='/clients'>
                    <p className={`${activeTab === "Clients" ? "active" : ""}`} onClick={() => setActiveTab("Clients")}>
                        לקוחות
                    </p>
                </Link>
                <Link to='/data'>
                    <p className={`${activeTab === "data" ? "active" : ""}`} onClick={() => setActiveTab("data")}>
                        נתונים
                    </p>
                </Link> 
                <Link to='/listem'>
                    <p className={`${activeTab === "listem" ? "active" : ""}`} onClick={() => setActiveTab("listem")}>
                        מסימות
                    </p>
                </Link>
                <Link to='/requirements'>
                    <p className={`${activeTab === "Requirements" ? "active" : ""}`} onClick={() => setActiveTab("Requirements")}>
                        דרישות
                    </p>
                </Link>            
            </div>
        </div>
  )
}
