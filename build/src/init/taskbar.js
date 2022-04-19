export class Taskbar {
    constructor() {
    }

    init() {
        //create div
        let taskbar = document.createElement("div");
        taskbar.id = "taskbar";
        //add start button
        let startbutton = document.createElement("button");
        startbutton.id = "startbutton";
        startbutton.innerText = "Start";
        taskbar.appendChild(startbutton);
        taskbar.classList.add("fadeIn");
        document.body.appendChild(taskbar);
    }
    
    hide() {
        //apply class "dontshow"
        document.getElementById("taskbar").classList.add("dontshow");
    }

    unhide() {
        //remove class "dontshow"
        document.getElementById("taskbar").classList.remove("dontshow");
    }
}
