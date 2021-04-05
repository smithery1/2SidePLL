'use strict';

const Colors = Object.freeze([ 'blue', 'orange', 'green', 'red' ]);

const lineWidth = 4;
const pieceInnerSize = 26;
const pieceOuterSize = pieceInnerSize + lineWidth;
const topSize = pieceOuterSize * 3;
const totalSize = pieceOuterSize * 5 + lineWidth;
const inset = lineWidth / 2;

const backX = lineWidth + pieceOuterSize;
const backY = lineWidth;
const frontX = backX;
const frontY = lineWidth + topSize + pieceOuterSize;
const leftX = lineWidth;
const leftY = lineWidth + pieceOuterSize;
const rightX = lineWidth + topSize + pieceOuterSize;
const rightY = leftY;

let context = null;
    
function initCube(canvas) {
    context = canvas.getContext('2d');
    context.lineWidth = lineWidth;
    const scaleFactor = (Math.sqrt(2) - 1) / 2;
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(-Math.PI / 4);
    context.scale(canvas.width * (1 - scaleFactor) / totalSize, canvas.height * (1 - scaleFactor) / totalSize);
    context.translate(-totalSize / 2, -totalSize / 2);
    
    context.fillStyle = 'yellow';
    context.fillRect(pieceOuterSize, pieceOuterSize, topSize, topSize);
    context.strokeRect(inset, pieceOuterSize + inset, totalSize - lineWidth, topSize);
    context.strokeRect(pieceOuterSize + inset, inset, topSize, totalSize - lineWidth);
    context.strokeRect(inset, pieceOuterSize * 2 + inset, totalSize - lineWidth, pieceOuterSize);
    context.strokeRect(pieceOuterSize * 2 + inset, inset, pieceOuterSize, totalSize - lineWidth);    
}

function renderVisible(pieceColors) {
    context.fillStyle = 'white';
    context.fillRect(backX, backY, pieceInnerSize, pieceInnerSize);
    context.fillRect(backX + pieceOuterSize, backY, pieceInnerSize, pieceInnerSize);
    context.fillRect(backX + pieceOuterSize * 2, backY, pieceInnerSize, pieceInnerSize);
    context.fillRect(rightX, rightY, pieceInnerSize, pieceInnerSize);
    context.fillRect(rightX, rightY + pieceOuterSize, pieceInnerSize, pieceInnerSize);
    context.fillRect(rightX, rightY + pieceOuterSize * 2, pieceInnerSize, pieceInnerSize);
    
    context.fillStyle = Colors[pieceColors[6]];
    context.fillRect(frontX + pieceOuterSize * 2, frontY, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[7]];
    context.fillRect(frontX + pieceOuterSize, frontY, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[8]];
    context.fillRect(frontX, frontY, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[9]];
    context.fillRect(leftX, leftY + pieceOuterSize * 2, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[10]];
    context.fillRect(leftX, leftY + pieceOuterSize, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[11]];
    context.fillRect(leftX, leftY, pieceInnerSize, pieceInnerSize);
}

function renderHidden(pieceColors) {
    context.fillStyle = Colors[pieceColors[0]];
    context.fillRect(backX, backY, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[1]];
    context.fillRect(backX + pieceOuterSize, backY, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[2]];
    context.fillRect(backX + pieceOuterSize * 2, backY, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[3]];
    context.fillRect(rightX, rightY, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[4]];
    context.fillRect(rightX, rightY + pieceOuterSize, pieceInnerSize, pieceInnerSize);
    context.fillStyle = Colors[pieceColors[5]];
    context.fillRect(rightX, rightY + pieceOuterSize * 2, pieceInnerSize, pieceInnerSize);
}

//export { renderVisible, renderHidden };