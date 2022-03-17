import React from "react";
import './menu-item.styles.scss'
import { useNavigate } from "react-router-dom";

const MenuItem=({title,imageUrl,size,linkUrl})=>{
    const navigate = useNavigate();

    const onClick=()=>{
        setTimeout(()=>{
            navigate(`/${linkUrl}`);
        })
    }

 return(
    <div className={`${size} menu-item`} onClick={onClick}>
        <div className="background-image"  style={{
        backgroundImage: `url(${imageUrl})`
    }}></div>
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
    </div> 
</div>
 )
}
export default MenuItem