import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserSidebar } from "./UserSidebar";
import { UserNavbar } from "./UserNavbar";
import "./user-home-css/User-timeline.css"

export const UserTimeline = () =>{
    const State = useSelector(
        ({data})=>data
    )


    useEffect(()=>{
        document.querySelectorAll('.nav-link')[2].classList.add('active');
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

                        <div className="col-12 container mt-5 user-timeline-chart-height shadow overflow-scroll">
                            <div className="timeline col-12">                             
                                <div className="accordion mt-2" id="accordionExample">
                                    {
                                        State.timelineArray.map((val,ind)=>{
                                                return <div className="accordion-item text-center border-top py-3 col-12" key={ind}>
                                                        <h4 className="accordion-header" id={"heading"+ind}>
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+ind} aria-expanded={ind==0 ?"true" : "false"} aria-controls={"collapse"+ind}>
                                                            {val.title}
                                                        </button>
                                                        </h4>
                                                        <div id={"collapse"+ind} className={ind===0 ?"accordion-collapse collapse show":"accordion-collapse collapse"} aria-labelledby={"heading"+ind} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <ul>
                                                                    {
                                                                        val.TimeLineCharts.map((value,index)=>{
                                                                            return  <li className="m-0" key={index}>
                                                                                        <div className="shadow timeline-content p-4">
                                                                                            <h5>{value.heading}</h5>
                                                                                            <p>{value.textareaCnt}</p>
                                                                                        </div>
                                                                                    </li>
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                            })
                                            
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}