import {useContext} from 'react';
import UserContext from './user-context.js'


const UserProvider = props => {
    const {userDetails, userListHeaders,rawUserList} = useContext(UserContext);
    
    const setUpHeaders = (accessToken,client,expiry,uid) => {
        userListHeaders["access-token"] = accessToken;
        userListHeaders["client"] = client;
        userListHeaders["expiry"] = expiry;
        userListHeaders["uid"] = uid;
    }

    return (
        <UserContext.Provider value={{userDetails, userListHeaders, rawUserList, setUpHeaders}}>
            {props.children}
        </UserContext.Provider>    
    )
}


export default UserProvider;