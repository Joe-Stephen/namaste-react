import { useState, useEffect } from "react";
const User=({name})=>{
    const [count, udpdateCount] = useState(0); 
    useEffect(()=>{

    },[count])
    return(
    <>
    <div className="user-card">
        <h1>{name}{count}</h1>
        <button onClick={()=>udpdateCount((count)=>++count)}>add</button>
        <button onClick={()=>udpdateCount((count)=>--count)}>less</button>
        <h2>Location: Thrissur</h2>
        <h3>Instagram: joe_stephen_k</h3>
    </div>
    </>);
}
export default User;