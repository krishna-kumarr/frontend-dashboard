import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:"admin-dashboard",
    initialState:{
        Admin:[{
            adminUsername:'krishna',
            adminPassword:'123'
        }],
        usersArray:[],
        AdminLogin:"",
        userLogin:[],
        timelineArray:[
            {
                title:'2024 Frontend Roadmap',
                TimeLineCharts:[
                            {
                                heading:"Html",
                                textareaCnt:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
                                status: 'not started'
                            },
                            {
                                heading:"Css",
                                textareaCnt:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
                                status:"not started'"
                            },
                            {
                                heading:"Javascrit",
                                textareaCnt:"JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
                                status:"not started'"
                            },
                            {
                                heading:"React js",
                                textareaCnt:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
                                status:"not started'"
                            }
                        ],
                    performance:0
            }
        ],
        userAccessTimeLineArray:[],
        userFriendsPerform:[]
    },
    reducers:{
        updateAdmin:(state,action)=>{
            state.Admin = action.payload
        },
        updateAdminLogin:(state,action)=>{
            state.AdminLogin = action.payload
        },
        updateUsersArray:(state,action)=>{
            state.usersArray = action.payload
        },
        updateuserLogin:(state,action)=>{
            state.userLogin = action.payload
        },
        updateTimelineArray:(state,action)=>{
            state.timelineArray = action.payload
        },
        updateUserAccessTimeLineArray:(state,action)=>{
            state.userAccessTimeLineArray = action.payload
        },
        updateUserFriendsPerform:(state,action)=>{
            state.userFriendsPerform = action.payload
        }
    }
})

export default Slice.reducer;
export const{updateName,updateAdminLogin,updateUsersArray,updateuserLogin,updateTimelineArray,updateUserAccessTimeLineArray,updateUserFriendsPerform} = Slice.actions