import { useState } from "react";

const User = (props) =>{
const[phoneNumber1] = useState(9493636087);
const[phoneNumber2] = useState(9663707940);


    return (
    <div className = "user-card">
<h2>Name : {props.name}</h2>
<h3>Visakhapatanam</h3>
<h4>Contact: dasikasirisha233@gmail.com</h4>
<h4>
    Mobile: {phoneNumber1},
            {phoneNumber2}
</h4>
    </div>

    );
}

export default User;