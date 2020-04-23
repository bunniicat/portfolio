import React from "react";

import GameboyComp from "./../components/gameboy";

import pixelme from "./../resources/photos/pixelme.png";
import quest from "./../resources/photos/quest.svg";
import cross from "./../resources/photos/cross.svg";
import controlwhite from "./../resources/photos/controlwhite.svg";
import controlblack from "./../resources/photos/controlblack.svg";

export default function Aboutpage(){
    return(
        <>

            <div className="gameboyContainer">
                <GameboyComp gameboyClass="gameboyTop gameboyFirst" />
                <GameboyComp gameboyClass="gameboyTop gameboyStory"
                gameboyText="i'm a young newly educated developer with a love for design, javascript &#38; games."
                gameboyTextTwo="i am passionate about developing and polishing my skills as a developer so i can bring the endless ideas in my head to life." 
                />
                <GameboyComp gameboyClass="gameboyTop gameboyStory"
                gameboyText="whether we are talking about graphic design or clothes, my words to live by is definitely"
                gameboyQuote="&quot;express your identity boldly&quot;" 
                gameboyTextTwo="i'm always focused on creating designs with clear statements and strong personal identities."
                />
                <GameboyComp gameboyClass="gameboyTop gameboyFourth" />
                
            </div>

            <div className="about">

                <div className="stats">
                    <div className="statsLeft">
                        <p>PLAYER: NINA NGUYEN</p>
                        <img src={pixelme} alt="pixel character"></img>
                    </div>
                    <div className="statsRight">
                        <p>LEVEL/AGE: 22</p>
                        <p>SPEC: web design, web development</p>
                        <p>PERSONALITY: determined, creative</p>
                        <p>PORTFOLIO: www.######.com</p>
                        <p>LANG: english, norwegian, vietnamese</p>
                        <br />
                        <p>FUN FACT</p>
                        <p>was on track to study fashion design, ended up <br />
                        writing scripts instead and realizing it was amazing.</p>
                    </div>
                </div>

                <div className="quest">
                    <div className="questLeft">
                        <img src={quest} alt="quest icon"></img>
                 </div>
                    <div className="questRight">
                        <p>NEW MAIN QUEST</p>
                        <p>taking a 360 degree turn from my original plan to pursue fashion design my current goal in life is to continue growing as a developer and create awesome designs and user experiences. let's create something stunning together!</p>
                    </div>
                </div>
            </div>



            <div className="cv">

                <div className="gameConsole">
                    <div className="gameConsoleLeft">
                        <img src={cross} alt="game controller"></img>
                    </div>
                    <div className="gameConsoleScreen"></div>
                    <div className="gameConsoleRight">
                        <img src={controlwhite} alt="gameboy controller"></img>
                        <img src={controlblack} alt="gameboy controller"></img>
                    </div>
                </div>

            </div>
            
        </>
    )
}