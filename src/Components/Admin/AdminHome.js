import React, { useEffect } from "react";
import "./Admin-css/AdminHome.css";
import { useSelector } from "react-redux";
import "./Admin-css/AdminSidebar.css"
import { Dashboard } from "./Dashboard";
import { Sidebar } from "./Sidebar";

export const AdminHome = () =>{
    const State = useSelector(
        ({data})=>data
    )
    useEffect(()=>{
        document.querySelectorAll('.nav-link')[0].classList.add('active');
    },[])

    return(
        <>
            <div className="d-flex flex-wrap">
                <Sidebar/>
                <div className="col">
                    <div className="d-flex flex-wrap">
                        {/* admin main content */}
                        <Dashboard/>
                        <div className="col-12 mt-5">
                            <div className="container-fluid d-flex flex-wrap">
                                {/* welcome box  */}
                                <div className="col-12 d-flex flex-wrap justify-content-center">
                                    <div className="col-6 text-center admin-welcome-content">
                                        <h1>Welcome <span className="text-success">{State.AdminLogin}</span></h1>
                                        <p>This is admin dashboard</p>
                                    </div>
                                </div>

                                {/* Recent activity  */}
                                <div className="col-12 col-md-12 col-lg-6 p-4 mt-5">
                                    <div className="border rounded p-4 bg-light recent-activites">
                                        <h5 className="border-bottom pb-2">Recent Activities</h5>
                                        
                                        {State.usersArray.map((val,ind)=>{
                                            return <div className="col-12 d-flex flex-wrap align-items-center border-bottom my-2">
                                                        <div className="col-2 recentActivity">
                                                            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="user_image" />
                                                        </div>
                                                        <div className="col-3">
                                                            <p className="m-0">{val.userName}</p>
                                                        </div>
                                                        <div className="col-7 text-center">
                                                            <p className="m-0">{val.lastOnline}</p>
                                                        </div>
                                                    </div>
                                            })
                                        }
                                    </div>
                                </div>
                                
                                {/* user overall performance  */}
                                <div className="">
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}