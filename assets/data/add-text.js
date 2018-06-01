//how to combine the class into my functions? // 

class AddText extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    
var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d'),
    font = '14px sans-serif',
    hasInput = false;

canvas.onclick = function (e) {
    if (hasInput) return;
    addInput(e.clientX, e.clientY);
}

function addInput(x, y) {

    var input = document.createElement('input');

    input.type = 'text';
    input.style.position = 'fixed';
    input.style.left = (x - 4) + 'px';
    input.style.top = (y - 4) + 'px';

    input.onkeydown = handleEnter;

    document.body.appendChild(input);

    input.focus();

    hasInput = true;
}

function handleEnter(e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
        drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
        document.body.removeChild(this);
        hasInput = false;
    }
}

function drawText(txt, x, y) {
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.font = font;
    ctx.fillText(txt, x - 4, y - 4);
}
