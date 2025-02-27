import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Web Developer",
                    "UIUX Designer",
                    "Frontend Developer",
                    "Backend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
