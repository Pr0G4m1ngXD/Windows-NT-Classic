# winobj 1.0.0

## quick info

~~winobj is used for easiely making windows, this is the reference for winobj~~
WINOBJ MIGHT BECOME USELESS BECAUSE OF THE NTWINDOW CLASS

## for msgbox/iframe/windowapi windows
```
title: "title of window", 
type: "msgbox/iframe/windowapi",
icon: "example@fs/icon.png"
```
## for msgbox
```
msg: "message", 
msgtype: "err/info/fact/warn", 
msgbuttontype: "custom names/separated by a slash/and up to 3 different ones", 
onmsgbutton: "close/1st/2nd/3rd" //insert function names
```
## for iframe
```
//choose one of these 3
content: "example.com",
localcontent: "example@fs/index.html",
html: "<span>example</span>"
```
## for iframe/windowapi
```
width: 1280,
height: 720,
canclose: true,
candrag: true,
canfullscreen: true,
canminimize: true,
canresize: true,
onclose: "example()",
ondrag: "example()",
onfullscreen: "example()",
onminimize: "example()",
onrezise: "example()",
```