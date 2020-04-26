import React from "react";

import BtnComp from "./../components/button";

import avatar from "./../resources/photos/avatar.svg";
import designIcon from "./../resources/photos/design.svg";
import codeIcon from "./../resources/photos/code.svg";

export default function Homepage(){
    return(
        <>
        <div className="gridContainer banner">
            <div className="bannerText">
                <p className="bannerP">Hi! My name is <span className="underline--magical">Nina Nguyen,</span> <br />
                <span className="underline--magical">a front-end developer &#38; web designer <br /></span>
                based in Oslo, Norway.</p>
            </div>
            <div className="bannerImage">
                <img src={avatar} alt="avatar"></img>
            </div>
        </div>
        
        <div className="homeinfo">
            <h2 className="underline--magical">What I can do for you</h2>
            <div className="homeinfoWrapper">
                <div className="homeinfoBox">
                    <img src={designIcon} alt="design icon"></img>
                    <p>I’m design oriented. I enjoy experimenting with
                    different styles and like to get creative with
                    how to best convey the message you would like 
                    to send to the user.</p>
                </div>
                <div className="homeinfoBox">
                    <img src={codeIcon} alt="code icon"></img>
                    <p>I’m a newly educated developer that can use
                    the latest technologies to develop your website
                    to be optimised across all devices.</p>
                </div>
            </div>
            <BtnComp linkUrl="/contact" btnClass="btn btn-primary homeinfoBtn" btnText="message me" />
        </div>
        </>
    )
}