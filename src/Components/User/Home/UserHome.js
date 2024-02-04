import React, { useEffect, useState } from "react";
import "./user-home-css/UserHome.css"
import { useDispatch, useSelector } from "react-redux";
import { UserSidebar } from "./UserSidebar";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "./UserNavbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const UserHomePage = () =>{
    const State = useSelector(
        ({data})=>data
    )

    const dispatch = useDispatch()
    const pageRender = useNavigate()

    useEffect(()=>{
        // var messageCount = State.usersArray.filter((v,i)=>{
        //     return v.requesToAdmin!=="accepted"
        // })
        // setMessCount(messageCount.length)

        // setUserDetails(...State.userLogin)
        // console.log(userDetails)

        document.querySelectorAll('.nav-link')[0].classList.add('active');

    },[])

    return(
        <>
            {/* {
                userDetails.requesToAdmin==="accepted" ? */}
                    <div className="d-flex flex-wrap">
                        {/* admin sidebar */}
                        <UserSidebar/>
                        
                        {/* admin main content */}
                        <div className="col">
                            <div className="d-flex flex-wrap">
                                <UserNavbar/>

                                <div className="col-12 d-flex flex-wrap">
                                    <div className="col-6 p-3">
                                        <div className="myhome border rounded p-5">
                                            <h4 className="text-color">Hii krishna</h4>
                                            <p className="text-color">Be happy and start your journey</p>

                                            <div className="col-12 d-flex flex-wrap mt-5">
                                                <div className="col-4 border-start px-3 border-dark">
                                                    <h6>Total Tasks</h6>
                                                    <p className="text-center col-6 m-0">30</p>
                                                </div>
                                                <div className="col-4 border-start px-3 border-dark">
                                                    <h6>Task in progress</h6>
                                                    <p className="text-center col-6 m-0">30</p>
                                                </div>
                                                <div className="col-4 border-start px-3 border-dark">
                                                    <h6>Finished Tasks</h6>
                                                    <p className="text-center col-6 m-0">30</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12 mt-4">
                                            <div className="myhome border rounded p-5">
                                                <div className="d-flex flex-wrap">
                                                    <h4 className="text-color col-6 ps-3">My projects</h4>
                                                    <p className="text-color m-0 text-end col-6 pe-3 pointer" onClick={()=>pageRender("/user/projects")}>see all</p>
                                                </div>
                                                <div className="col-12 d-flex flex-wrap mt-5">
                                                    {/* <div className="col-6 px-3">
                                                        <div className="myproject rounded text-light">
                                                            <h6 className="ps-3 pt-3"><span>Project title: </span>Total Tasks</h6>
                                                            <p className="col-6 m-0 ps-3 project-description">30</p>
                                                            <p className="col-6 m-0 ps-3 mt-3"><span>Project link</span>30</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 px-3">
                                                        <div className="myproject rounded text-light">
                                                            <h6 className="ps-3 pt-3">Total Tasks</h6>
                                                            <p className="col-6 m-0 ps-3">30</p>
                                                        </div>
                                                    </div> */}
                                                    
                                                    <div className="col-12 noProjects-available d-flex flex-wrap justify-content-center align-items-center text-center">
                                                        <h6>No projects added</h6> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 p-3">
                                        <div className="myperformance border rounded p-5 d-flex flex-wrap">
                                            <div className="col-6 border-end">
                                                <p className="col-12 px-4">My overall performance</p>
                                                <div className="col-8 ms-4">
                                                    <CircularProgressbar value={15} text={`${15}%`} />
                                                </div>
                                            </div>
                                            <div className="col-6 px-4">
                                                <p>My friends overall performance</p>
                                                <div className="">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                {/* :
                    <div className="d-flex flex-wrap justify-content-center align-items-center vh-100">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-center text-secondary border rounded p-5">
                            <h1>Hello</h1>
                            <p className="mt-3">
                                <span className="pe-1 text-warning">{userDetails.firstName} {userDetails.lastName}</span>
                                you need to wait for some time until our admin verify your account
                            </p>
                            <button type="button" className="btn btn-warning text-light" onClick={()=>pageRender("/")}>Return to Home page</button>
                        </div>
                    </div>
            } */}
        </>
    )
}