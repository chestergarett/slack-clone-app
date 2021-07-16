import "./ChatScreenBody.css";
import ChatsRetrieved from "./ChatsRetrieved";
import { Scrollbars } from 'react-custom-scrollbars-2';
import CustomScrollbar from '../UI/CustomScrollbar'

const ChatScreenBody = () => {
  return (
      <div className="chat-screen-body">
        <div className="user-chat-body">
          <CustomScrollbar>
            <ChatsRetrieved />
          </CustomScrollbar>
        </div>
      </div>
  );
};

export default ChatScreenBody;
