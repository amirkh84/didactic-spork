let box = document.body;
function gen() {
    let symbols , color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i<6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16 )];
    };
    return color;
};
function genk() {
box.style.background = `linear-gradient(to right , ${gen()} , ${gen()})`;
};
window.addEventListener("click",genk)