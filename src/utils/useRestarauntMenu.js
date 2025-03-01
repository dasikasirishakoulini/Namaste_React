import { useEffect, useState } from "react";
import {MENU_API} from './constants';

const useRestarauntMenu = (resId) =>{

    const [resInfo,setResInfo] = useState(null);
     //fetchdata

    useEffect(() =>{
        fetchMenu();
        },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
       // console.log(json);
        setResInfo(json.data);
    };

    return resInfo;

}

export default useRestarauntMenu;