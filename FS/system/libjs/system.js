//stage 2: init functions
document.getElementById("loadstatetext").innerHTML = "Initilasing Functions";
document.getElementById("1prog").style.width = "100px";

function con(input) {
    console.log(input);
}

// load 1 script
var loadScript = function (path) {
    // make promise
    return new Promise(function (fulfill, reject) {
        // create object
        var script = document.createElement('script');

        // when it loads or the ready state changes
        script.onload = script.onreadystatechange = function () {
            // make sure it's finished, then fullfill the promise
            if (!this.readyState || this.readyState == 'complete') fulfill(this);
        };

        // begin loading it
        script.src = path;

        // add to head
        document.getElementsByTagName('head')[0].appendChild(script);
    });
};
document.getElementById("2prog").style.width = "50px";
// load scripts from array
var loadScripts = function (scripts) {
    return scripts.reduce(function (queue, path) {
        // once the current item on the queue has loaded, load the next one
        return queue.then(function () {
            // individual script
            return loadScript(path);
        });
    }, Promise.resolve());
};

class ntWindow {
    constructor() {
        this.title = "Window",
        this.width = 1280,
        this.height = 720
    }
    show() {

    }
}

loadScripts(["FS/system/libjs/idbfs.js"]).then(function () {


    var fs = new IDBFS.FileSystem('local');

    document.getElementById("loadstatetext").innerHTML = "Loading Drivers";
    document.getElementById("2prog").style.width = "100px";



    fs.readFile('/core/drivers.wlst', 'utf8', function (err, data) {
        //what
        if (data == undefined) {
            con("'/core/drivers.wlst' does not exist, creating file.");
            var created = "[]";
            //the
            fs.mkdir('/core/', function () {
                //fuck
                fs.writeFile('/core/drivers.wlst', created, function (err) { }); //did i do wrong?
                con(err);
                data = created;
            });

        }


        //Todo: Add drivers
        //What are drivers?
        //Drivers are js files that run before the User Interface (desktop.js) has started or as soon as posible

        console.log(data);
    });

    document.getElementById("loadstatetext").innerHTML = "Starting Interface";
    document.getElementById("3prog").style.width = "100px";
    
    loadScript("FS/desktop/debugapp.js");
});




