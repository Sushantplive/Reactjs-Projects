import { useEffect } from "react";
import { connection } from "./connection.js";

const CleanUp = () =>{
    useEffect(()=>{
        // we need to connect to the server on home page
        const serverConnect = connection();
        serverConnect.connect() 
        /**
         * Here it will print connected to server twice,
         * imazine if you are navigating to diffrent pages then chatroom component unmounted but again you come back to chatrrom then again server connection connected withought desroing the old connectoion
         * so we need to destroy the connection
         */
        return () =>{
            serverConnect.disconnect()
        }
        /**
         * react will call clean func again before it run again
         */
    },[])
    return(
        <div>
            Welcome to my chatroom
        </div>
    )
}

export default CleanUp;