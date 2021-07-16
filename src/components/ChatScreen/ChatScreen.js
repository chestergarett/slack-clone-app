import "./ChatScreen.css";
import ChatScreenHeader from "./ChatScreenHeader";
import ChatScreenDropDown from "./ChatScreenDropDown";
import ChatScreenBody from "./ChatScreenBody";
import ChatBoxSend from "./ChatBoxSend";


const ChatScreen = () => {
  return (
    <div id="chat-screen">
      <ChatScreenHeader id="chat-screen-header" />
      <ChatScreenDropDown id="chat-screen-drop-down" />
      <ChatScreenBody id="chat-screen-body" />
      <ChatBoxSend id="chat-box" />
    </div>
  );
};

export default ChatScreen;

