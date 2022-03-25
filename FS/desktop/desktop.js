
//delete every div with class "load"
for (var i = 0; i < document.getElementsByClassName("load").length; i++) {
    console.log(document.getElementsByClassName("load")[i]);
    document.getElementsByClassName("load")[i].remove();
    
}


//add iframe/desktop/deskop.html to desktopenv
let mkiframehere = document.getElementById("desktopenv");
let mkiframe = document.createElement("iframe");
mkiframe.src = "iframe/desktop/desktop.html";
mkiframe.id = "desktop";
mkiframe.style.width = "100%";
mkiframe.style.height = "100%";
mkiframe.style.border = "none";
mkiframe.style.position = "absolute";
mkiframe.style.top = "0";
mkiframe.style.left = "0";
mkiframehere.appendChild(mkiframe);


