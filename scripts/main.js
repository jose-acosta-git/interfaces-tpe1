const canvas = document.getElementById('canvas');
const ctx = canv.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const forms = [];
const forms_max = 10;
const forms_size = 50

for (i = 0; i < forms_max; i++) {
    addForm(i < (forms_max / 2));
}

function addForm(style) {
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomRGBA();

    if (style) {
        const rect = new Rect(posX, posY, Math.round(Math.random() * forms_size), Math.round(Math.random() * forms_size), color, ctx, false);
        forms.push(rect);
    } else {
        const ellipse = new Ellipse(posX, posY, Math.round(Math.random() * forms_size), Math.round(Math.random() * forms_size), color, ctx, false);
        forms.push(ellipse);
    }
}



function randomRGBA() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}