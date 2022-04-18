import {WindowComponents} from "./init/windowcomponents";
import {startRecoveryMode} from "./init/recoverymode";
import {Taskbar} from "./init/taskbar";
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
    document.getElementById("2prog").style = "width: 100px;";
    document.getElementById("3prog").style = "width: 100px;";
    document.getElementById("loadstatetext").innerHTML = "imported init scripts";
    //delete loadscreen
    document.getElementById("container").remove();
    //remove listener
    document.removeEventListener("keydown", listenF8);
    //create taskbar
    let taskbar = new Taskbar();
    taskbar.init();
    //create window
    let win = new WindowComponents("Welcome", `<h1>Welcome to Windows NT Classic</h1>`, 600, 100, 50, 50, "", "desktop");
    win.activate();
};