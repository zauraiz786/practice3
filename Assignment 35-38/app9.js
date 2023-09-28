function calculateRectangleAreaByVariable(width, height) {
    const area = width * height;
    return area;
}
const widthVariable = prompt(`Enter width`);
const heightVariable = prompt(`Enter height`);
const areaByVariable = calculateRectangleAreaByVariable(widthVariable, heightVariable);
alert(`The area of the rectangle is ${areaByVariable}`);