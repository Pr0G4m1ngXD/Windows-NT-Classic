/*
THIS NAME IS A PLACEHOLDER, FOR SUGGESTIONS HEAD TO MY DISCORD SERVER AT                                                                            
 _ _ _ _       _                  _____ _____    _____ _             _     
| | | |_|___ _| |___ _ _ _ ___   |   | |_   _|  |     | |___ ___ ___|_|___ 
| | | | |   | . | . | | | |_ -|  | | | | | |    |   --| | .'|_ -|_ -| |  _|
|_____|_|_|_|___|___|_____|___|  |_|___| |_|    |_____|_|__,|___|___|_|___|
                                                                           
This is Windows NT Classic made by Pr0G4m1ngXD and inspired by Windows 93, 96 and Whistler

This is the code that adds functions for FS, Recovery mode and then starts system.js on FS

MIT License

Copyright (c) 2021 Pr0G4m1ngXD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

//Recovery Mode
//listen for f8 key
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 119) {
        //f8 key pressed
        //load recovery mode
        loadScript("FS/system/libjs/recovery.js");
    }
});


  function loadScriptDynamic(src) {
    var s = document.createElement('script');
    s.src = src;
    s.type = "text/javascript";
    s.async = false;                                 // <-- this is important
    document.getElementsByTagName('head')[0].appendChild(s);
}
loadScriptDynamic("FS/system/libjs/system.js");


