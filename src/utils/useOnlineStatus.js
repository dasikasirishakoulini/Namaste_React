import { useEffect,useState } from "react";

const useOnlineStatus =()=>{
const[onlineStatus, setOnlineStatus] = useState(true);

     // check if online,if offline update onlineStatus to false
     useEffect(()=>{
      window.addEventListener(("offline"),() =>{
       setOnlineStatus(false);
      });
      window.addEventListener(("online"),() =>{
        setOnlineStatus(true);
       });
     },[]) //with empty error, useEffect will executed only once
    return onlineStatus;

}

export default useOnlineStatus;