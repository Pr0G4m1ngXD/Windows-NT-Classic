import { WindowComponents } from "./windowcomponents"
export const startRecoveryMode = () => {
    //Recovery Mode
    //Make a window with windowcomponents
    let win = new WindowComponents("Recovery Mode", 300, 200, 100, 100, "", "desktop");
    win.activate();
}
