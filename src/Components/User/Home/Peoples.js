import React, { useEffect } from "react";
import { UserSidebar } from "./UserSidebar";
import { UserNavbar } from "./UserNavbar";
import "./user-home-css/userPeoples.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { LuView } from "react-icons/lu";

export const Peoples = () =>{
    useEffect(()=>{
        document.querySelectorAll('.nav-link')[1].classList.add('active');
    },[])

    return(
        <>
             <div className="d-flex flex-wrap">
                {/* admin sidebar */}
                <UserSidebar/>
                
                {/* admin main content */}
                <div className="col">
                    <div className="d-flex flex-wrap">
                        <UserNavbar/>

                        <div className="col-12 d-flex flex-wrap">

                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-lg-3 p-3">
                                <div className="rounded d-flex flex-wrap user-border-color">
                                    <div className="col-12 people-img-backround text-center py-4">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vzAeNqH03TdQOGhSMrF-9Fm18gYkKn2YIAhee_wh7a9JBWUm3bNhSTBmLf3FFANY4Zg&usqp=CAU" alt=""/>
                                    </div>
                                    <div className="text-center col-12">
                                        <h6>suresh krishna</h6>
                                        <p>Front-end developer</p>
                                        <div className="col-12 d-none d-sm-flex flex-wrap mt-5">
                                            <div className="col-4 px-3 border-dark">
                                                <h6 className="text-secondary">Projects</h6>
                                                <p className="text-center col-12 m-0">30</p>
                                            </div>
                                            <div className="col-4 px-3 border-dark">
                                                <h6 className="text-secondary">followings</h6>
                                                <p className="text-center col-12 m-0">30</p>
                                            </div>
                                            <div className="col-4 px-3 border-dark">
                                                <h6 className="text-secondary">followers</h6>
                                                <p className="text-center col-12 m-0">30</p>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex flex-wrap justify-content-center mt-5 mb-2">
                                            <div className="col-12 col-sm-6 profile-button my-2">
                                                <button type="button">Add friend</button>
                                                <BsFillPersonPlusFill className="profile-button-position"/>
                                            </div>
                                            <div className="col-12 col-sm-6 profile-button my-2">
                                                <button type="button">Message</button>
                                                <FaTelegramPlane className="profile-button-position"/>
                                            </div>
                                            <div className="col-12 col-sm-6 profile-button my-2">
                                                <button type="button">View profile</button>
                                                <LuView className="profile-button-position"/>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}