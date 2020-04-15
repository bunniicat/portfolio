import React from "react";

import cross from "./../resources/photos/cross.svg";
import controlwhite from "./../resources/photos/controlwhite.svg";
import controlblack from "./../resources/photos/controlblack.svg";

const gameboyComponent = ({gameboyClass, gameboyText, gameboyQuote, gameboyTextTwo}) => {
    return(
        <div className="gameboy">
            <div className={gameboyClass}>
                <p>{gameboyText}</p>
                <p className="gameboyQuote">{gameboyQuote}</p>
                <p>{gameboyTextTwo}</p>
            </div>
            <div className="gameboyUnder">
                <div className="gameboyUnderLeft">
                    <img src={cross} alt="gameboy controller"></img>
                </div>
                <div className="gameboyUnderRight">
                    <div className="gameboyUnderRightButtons">
                        <img src={controlwhite} alt="gameboy controller"></img>
                        <img src={controlblack} alt="gameboy controller"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default gameboyComponent;