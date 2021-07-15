import "./ChatScreenBody.css";
import CustomScrollbar from "../UI/CustomScrollbar";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import MessageContainer from '../UI/Modal';

const ChatScreenBody = () => {
  return (
    <CustomScrollbar>
      <div className="chat-screen-body">
        <div className="user-chat-body">
          {/* <div className="user-chat">
            <img src={user1} />
            <h1>User Name</h1>
          </div>
          <div className="user-chat">
            <img src={user2} />
            <h1>User Name</h1>
          </div> */}
        </div>
      </div>
    </CustomScrollbar>
  );
};

export default ChatScreenBody;
