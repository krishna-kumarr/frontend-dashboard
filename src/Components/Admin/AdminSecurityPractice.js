import React, { useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";

export const AdminSecurityPractices = () =>{
    useEffect(()=>{
        document.querySelectorAll('.nav-link')[3].classList.add('active');
    },[])


    return(
        <div className="d-flex flex-wrap create-timeline">
            {/* admin sidebar */}
            <Sidebar/>
            <div className="col">
                <div className="d-flex flex-wrap">
                    {/* admin main content */}
                    <Dashboard/>

                    <div className="col-12 container d-flex justify-content-center mt-5">
                        <div className="">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}