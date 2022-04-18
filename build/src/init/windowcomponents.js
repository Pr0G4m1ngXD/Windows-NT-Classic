export class WindowComponents {
    constructor(title, width, height, x, y, icon, parent) {
        this.title = title;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.icon = icon;
        this.parent = parent;
    }

    activate() {
        let window = document.createElement("div");
        window.classList.add("window");
        window.style.width = this.width + "px";	
        window.style.height = this.height + "px";
        window.style.left = this.x + "px";
        window.style.top = this.y + "px";
        //add titlebar to window
        let titlebar = document.createElement("div");
        titlebar.classList.add("titlebar");
        //add content to window
        let content = document.createElement("div");
        content.classList.add("contentwin");
        //append titlebar and content to window
        window.appendChild(titlebar);
        window.appendChild(content);
        //append window to parent
        document.getElementById(this.parent).appendChild(window);
        console.log("Window created");
    }

}
