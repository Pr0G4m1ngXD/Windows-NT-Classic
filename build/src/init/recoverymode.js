import { WindowComponents } from "./windowcomponents"
export const startRecoveryMode = () => {
    //Recovery Mode
    //Make a window with windowcomponents
    let win = new WindowComponents("Recovery Mode", `<h1>Will finnish later</h1>`, 400, 400, 50, 50, "", "desktop");
    win.activate();
}
