import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Header.css";

export default function Header() {
    
    const nav = useNavigate();
    const [activeTab, setActiveTab] = useState("Home");
    const [logged, setLogged ] = useState(false);

  const location = useLocation();
  useEffect( () => {
        axios.get("/user/checkConnection").then(({data}) => {
            if(data.ok){
                console.log("heelo");
                setLogged(true);
            }else{
                console.log("fuck react");
                nav('/');
            }
        });
        
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
  }, [logged])


  return (
    <div className='header'>
            <p className='logo'>Bhaa Abu fool</p>
            <div className='header-right'>
                {!logged && <Link to='/'>
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                    </Link>
                }
                 {logged && <><Link to='/adduser'>
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
                        משימות
                    </p>
                </Link>
                <Link to='/requirements'>
                    <p className={`${activeTab === "Requirements" ? "active" : ""}`} onClick={() => setActiveTab("Requirements")}>
                        דרישות
                    </p>
                </Link> </>}      
            </div>
        </div>
  )
}
