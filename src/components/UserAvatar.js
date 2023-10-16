import React, {useState} from "react";
import Avatar from "react-avatar";

function UserAvatar(){
    const [avMenu, setAvMenu] = useState(false)
    const showMenu = ()=>(setAvMenu(!avMenu))
    return (
        <>
        <Avatar size= "32px"
                name= "Business Informatics"
                round={true}
                onClick={showMenu}
                />
        </>
    );
}

export default UserAvatar