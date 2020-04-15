import React from "react";
import { Link } from "react-router-dom";

const ButtonComponent = ({linkUrl, btnText, btnClass}) => {
    return(
        <Link to={linkUrl} className={btnClass}>{btnText}</Link>
    )
}

export default ButtonComponent;