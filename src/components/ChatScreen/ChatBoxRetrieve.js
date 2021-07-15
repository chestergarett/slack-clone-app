import { useContext} from "react";
import UserContext from "../../api/user-context";
import axios from 'axios';

const ChatBoxRetrieve = () => {

    const { currentMessage } =  useContext(UserContext);

    return(
        <div>
            {/* <ul>
             {currentMessage.data.data.map(text => 
                {
                    return <li>{text.body}</li>
                })} 
            </ul> */}
        </div>
    )

}


export default ChatBoxRetrieve;