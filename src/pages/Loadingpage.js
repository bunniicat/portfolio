import React from "react";
import FadeIn from "react-fade-in";

import loadinggif from "./../resources/photos/loading.svg";


export default function Loading(props){

    const LoadingScreen = () => {
        setTimeout(function(){
            props.updateLoadingStatus()
        },4000)
    }

    LoadingScreen();
    
    return(
        <>
            <div className="loadingContainer">
                <FadeIn transitionDuration={600}>
                <p className="codeDisplay">const [isLoading, setIsLoading] = useState(true);</p>
                <img src={loadinggif} alt="loading gif"></img>
                </FadeIn>
            </div>
        </>
    )
}