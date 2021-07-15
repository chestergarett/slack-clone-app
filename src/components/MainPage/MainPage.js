import "./MainPage.css";
import {useContext, useEffect} from 'react';
import axios from 'axios'
import ChatScreen from "../ChatScreen/ChatScreen";
import UserContext from "../../api/user-context.js";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Mainpage = () => {

  const  {setUpHeaders,channelList,rawUserList, userListHeaders} = useContext(UserContext);

  //render list of channels once main page loads
  useEffect( () => {
    const storage = localStorage.getItem('user');
    if(storage){
        const {"access-token": accessToken, client, expiry, uid} =  JSON.parse(storage);
        setUpHeaders(accessToken,client,expiry,uid);
    }
    axios.get('http://206.189.91.54//api/v1/channels', {headers: userListHeaders})
    .then(res => {
        const {data} = res;
        if(data.errors = "No available channels"){ 
            console.log(data.errors);
            return 
        }
        channelList.push(data)
        console.log(channelList)
    })
    .catch(error => console.error('Error fetching data from API'))
    }
    , []
)

//render list of users once main page loads
useEffect( () => {
    const storage = localStorage.getItem('user');
    if(storage){
        const {"access-token": accessToken, client, expiry, uid} =  JSON.parse(storage);
        setUpHeaders(accessToken,client,expiry,uid);
    }
    axios.get('http://206.189.91.54//api/v1/users', {headers: userListHeaders})
    .then(res => {
        const {data} = res;
        if(data.length == 0){ 
            console.log("No available users");
            return 
        }
        rawUserList.push(data.data)
    })
    .catch(error => console.error('Error fetching data from API'))
    }
    , []
)

  return (
    <Link to="/MainPage" style={{textDecoration: "none", cursor: "default"}} >
      <div className="main-page">
        <div className="main-page-header">
          <Header />
        </div>
        <div className="main-page-sidebar">
          <Sidebar />
        </div>
        <div className="main-page-chat-screen">
          <ChatScreen />
        </div>
      </div>
    </Link>
  );
};

export default Mainpage;