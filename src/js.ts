var O = document.getElementById("O");

var o_e: MouseEvent;
var o_rect: DOMRect;

document.onmousedown = (e) => {
    o_e = e;
    o_rect = O.getBoundingClientRect();
};

document.onmousemove = (e) => {
    mouse(e);
};
document.onmouseup = (e) => {
    mouse(e);
    o_e = null;
};
var mouse = (e: MouseEvent) => {
    if (o_e) {
        let x = o_rect.x + (e.clientX - o_e.clientX),
            y = o_rect.y + (e.clientY - o_e.clientY);
        O.style.left = x + "px";
        O.style.top = y + "px";
    }
};
