import {draggable} from './draggable';
export class WindowComponents {
    constructor(title, content, width, height, x, y, icon, parent) {
        this.title = title;
        this.content = content;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.icon = icon;
        this.parent = parent;
        this.id = "";
    }

    activate() {
        //readable
        //create a random id
        this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        let window = document.createElement("div");
            window.classList.add("window");
            window.style.width = this.width + "px";	
            window.style.height = this.height + "px";
            window.style.left = this.x + "px";
            window.style.top = this.y + "px";
            //add titlebar to window
            let titlebar = document.createElement("div");
                titlebar.classList.add("titlebar");
                titlebar.classList.add("fadeIn");
                let title = document.createElement("span");
                    title.innerHTML = this.title;
                    title.id = this.id + "header";
                titlebar.appendChild(title);
                //add close button to titlebar
                let closebutton = document.createElement("button");
                    closebutton.classList.add("closebutton");
                    closebutton.innerHTML = "&times;";
                    closebutton.id = this.id + "closebutton";
                    closebutton.addEventListener("click", () => {
                        //remove window
                        document.getElementById(this.id).remove();
                        //remove eventlistener
                        document.removeEventListener("keydown", this.keyListener);
                    });
                titlebar.appendChild(closebutton);
            //add content to window
            let content = document.createElement("div");
                content.classList.add("contentwin");
                content.classList.add("fadeIn");
                content.innerHTML = this.content;
            //append titlebar and content to window
            window.appendChild(titlebar);
            window.appendChild(content);
            //fade in window
            window.classList.add("fadeIn");
            //add id to window
            window.id = this.id;
            //make window draggable
            draggable(window);
            //append window to parent
            document.getElementById(this.parent).appendChild(window);
        console.log("Window created");
    }
}
