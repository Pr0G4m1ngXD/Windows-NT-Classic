import {WindowComponents} from "./init/windowcomponents";
import {startRecoveryMode} from "./init/recoverymode";
export const boot = () => {
    function listenF8() {
        let e = window.event;
        if (e.keyCode == 119) {
            console.log("Starting Recovery");
            //remove listener
            document.removeEventListener("keydown", listenF8);
            //f8 key pressed
            //load recovery mode
            startRecoveryMode();
        }
    }
    //listen for f8 key
    document.addEventListener('keydown', listenF8);
    //Set progress
    document.getElementById("1prog").style = "width: 100px;";
    document.getElementById("loadstatetext").innerHTML = "Running init scripts...";
    
};