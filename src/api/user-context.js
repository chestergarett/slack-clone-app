import { createContext } from "react";

const UserContext = createContext({
  userDetails: [],
  userListHeaders: {
    "access-token": "",
    client: "",
    expiry: "",
    uid: "",
      },
  rawUserList: [],
  channelList: [],
  dmList: [],
  chatScreenData: {
    type: "Channel",
    receivers: [{ id: "", name: "Drafts", type: "Channel" }],
  },
  params: {
    sender_id: "",
    recever_class: "",
    receiver_id: "",
  },
  currentMessage: [],
  allMessages: [],
  additionalMembers: [],
});

export default UserContext;
